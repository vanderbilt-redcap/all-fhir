<?php

namespace Vanderbilt\FhirSnapshot\Queue\Processors;

use Vanderbilt\FhirSnapshot\Queue\Task;

class ArchiveProcessor extends AbstractTaskProcessor
{
    public function getTaskKey(): string
    {
        return 'create_archive';
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        $validationResult = $this->validateParams($task, ['mrns']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $mrns = $params['mrns'];
        $format = $params['format'] ?? 'zip';

        $this->logInfo("Creating archive for " . count($mrns) . " MRNs in $format format");

        // Simulate archive creation process
        // In a real implementation, this would:
        // 1. Retrieve FHIR data for each MRN
        // 2. Create archive file (ZIP, tar, etc.)
        // 3. Store archive in temp directory
        // 4. Return download link or file path

        $archiveId = uniqid('archive_', true);
        $fileName = $archiveId . '.' . $format;

        // Simulate processing time based on number of MRNs
        $processingTime = count($mrns) * 0.1; // 0.1 seconds per MRN
        usleep(intval($processingTime * 1000000));

        $this->logInfo("Archive created successfully: $fileName");

        return TaskProcessorResult::success("Archive created successfully", [
            'archive_id' => $archiveId,
            'file_name' => $fileName,
            'format' => $format,
            'mrn_count' => count($mrns),
            'processing_time' => $processingTime,
            'file_path' => "/tmp/archives/$fileName"
        ]);
    }
}