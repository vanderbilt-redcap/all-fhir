<?php

namespace Vanderbilt\AllFhir\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Vanderbilt\AllFhir\Services\OnDemandStreamingPackager;

/**
 * ArchiveController
 *
 * Exposes streaming-focused archive endpoints. These endpoints generate ZIP archives
 * on demand and stream them directly to the client without persisting intermediate
 * files on disk.
 */
class ArchiveController extends AbstractController
{
    public function __construct(
        \Vanderbilt\AllFhir\AllFhir $module,
        private OnDemandStreamingPackager $streamingPackager
    ) {
        parent::__construct($module);
    }

    /**
     * Stream ZIP archive for selected MRNs on-demand.
     */
    public function streamSelected(Request $request, Response $response): Response
    {
        try {
            $params = (array) $request->getParsedBody();

            if (empty($params['mrns']) || !is_array($params['mrns'])) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'MRNs array is required for streaming archive'
                ], 400);
            }

            if (!OnDemandStreamingPackager::isStreamingSupported()) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'On-demand streaming not supported in current environment'
                ], 503);
            }

            while (ob_get_level()) {
                ob_end_clean();
            }

            $options = [];
            if (!empty($params['resource_types']) && is_array($params['resource_types'])) {
                $options['resource_types'] = $params['resource_types'];
            }
            if (!empty($params['archive_name'])) {
                $options['archive_name'] = trim($params['archive_name']);
            }
            if (!empty($params['date_from'])) {
                $options['date_from'] = $params['date_from'];
            }
            if (!empty($params['date_to'])) {
                $options['date_to'] = $params['date_to'];
            }

            $this->streamingPackager->streamResourcesForMrns(
                $params['mrns'],
                $params['resource_types'] ?? [],
                $options
            );

            return $response;
        } catch (\Exception $e) {
            if (!headers_sent()) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'Streaming failed: ' . $e->getMessage()
                ], 500);
            }

            return $response;
        }
    }

    /**
     * Stream ZIP archive for all completed resources (optionally filtered).
     */
    public function streamAll(Request $request, Response $response): Response
    {
        try {
            $params = (array) $request->getParsedBody();

            if (!OnDemandStreamingPackager::isStreamingSupported()) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'On-demand streaming not supported in current environment'
                ], 503);
            }

            while (ob_get_level()) {
                ob_end_clean();
            }

            $options = [];
            if (!empty($params['mrn_list']) && is_array($params['mrn_list'])) {
                $options['mrn_list'] = $params['mrn_list'];
            }
            if (!empty($params['resource_types']) && is_array($params['resource_types'])) {
                $options['resource_types'] = $params['resource_types'];
            }
            if (!empty($params['archive_name'])) {
                $options['archive_name'] = trim($params['archive_name']);
            }
            if (!empty($params['date_from'])) {
                $options['date_from'] = $params['date_from'];
            }
            if (!empty($params['date_to'])) {
                $options['date_to'] = $params['date_to'];
            }

            $this->streamingPackager->streamAllCompletedResources($options);

            return $response;
        } catch (\Exception $e) {
            if (!headers_sent()) {
                return $this->jsonResponse($response, [
                    'success' => false,
                    'message' => 'Streaming failed: ' . $e->getMessage()
                ], 500);
            }

            return $response;
        }
    }
}
