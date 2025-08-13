<?php

namespace Vanderbilt\FhirSnapshot\Services;

use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataAdverseEventDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataCapabilitiesDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataDecoratorInterface;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataEmailDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirMetadata\Decorators\FhirMetadataVandyDecorator;
use Vanderbilt\REDCap\Classes\Fhir\FhirSystem\FhirSystem;
use Vanderbilt\REDCap\Classes\Fhir\FhirVersionManager;

/**
 * FhirMetadataService
 * 
 * Service for creating and managing FHIR metadata sources with appropriate decorators.
 * 
 * ROLE & RESPONSIBILITIES:
 * - Create FHIR metadata sources for given FHIR systems
 * - Apply the proper decorator chain for metadata enhancement
 * - Handle FHIR system validation and error cases
 * - Provide centralized metadata source configuration
 * - Encapsulate complex decorator pattern implementation
 * 
 * DECORATOR CHAIN:
 * - FhirMetadataVandyDecorator: Vanderbilt-specific customizations
 * - FhirMetadataCapabilitiesDecorator: FHIR capability statement enhancements
 * - FhirMetadataEmailDecorator: Email notification metadata
 * - FhirMetadataAdverseEventDecorator: Adverse event handling
 * 
 * KEY FEATURES:
 * - Standardized decorator chain application
 * - Null-safe FHIR system handling
 * - Encapsulated complex FHIR metadata creation logic
 * - Consistent metadata source configuration
 */
class FhirMetadataService
{
    /**
     * Create a FHIR metadata source with appropriate decorators
     * 
     * @param string|null $fhirSystemID
     * @return FhirMetadataDecoratorInterface|null
     */
    public function getFhirMetadataSource(?string $fhirSystemID): ?FhirMetadataDecoratorInterface
    {
        if (!$fhirSystemID) {
            return null;
        }

        $fhirSystem = new FhirSystem($fhirSystemID);
        $fhirVersionManager = FhirVersionManager::getInstance($fhirSystem);
        $metadataSource = $fhirVersionManager->getFhirMetadataSource();
        
        // Apply decorator chain
        $metadataSource = new FhirMetadataVandyDecorator($metadataSource);
        $metadataSource = new FhirMetadataCapabilitiesDecorator($metadataSource, $fhirVersionManager);
        $metadataSource = new FhirMetadataEmailDecorator($metadataSource);
        $metadataSource = new FhirMetadataAdverseEventDecorator($metadataSource);
        
        return $metadataSource;
    }
}