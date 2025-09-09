<?php

namespace Vanderbilt\AllFhir\Queue\Processors;

use Vanderbilt\AllFhir\Constants;
use Vanderbilt\AllFhir\ValueObjects\Task;
use Vanderbilt\AllFhir\ValueObjects\TaskProcessorResult;

class EmailNotificationProcessor extends AbstractTaskProcessor
{
    public function getTaskKey(): string
    {
        return Constants::TASK_EMAIL_NOTIFICATION;
    }

    protected function doProcess(Task $task): TaskProcessorResult
    {
        $validationResult = $this->validateParams($task, ['to', 'subject', 'message']);
        if ($validationResult !== null) {
            return $validationResult;
        }

        $params = $task->getParams();
        $to = $params['to'];
        $subject = $params['subject'];
        $message = $params['message'];
        $from = $params['from'] ?? 'noreply@redcap.org';

        $this->logInfo("Sending email to: $to, Subject: $subject");

        // Simulate email sending process
        // In a real implementation, this would use REDCap's email functionality
        // or a proper email service

        // Simulate processing time
        usleep(500000); // 0.5 seconds

        // Simulate success/failure (95% success rate)
        $success = rand(1, 100) <= 95;

        if ($success) {
            $this->logInfo("Email sent successfully to: $to");
            return TaskProcessorResult::success("Email sent successfully", [
                'to' => $to,
                'subject' => $subject,
                'from' => $from,
                'sent_at' => date('Y-m-d H:i:s')
            ]);
        } else {
            $error = "Failed to send email to: $to - SMTP connection error";
            $this->logError($error);
            return TaskProcessorResult::failure($error, [
                'to' => $to,
                'subject' => $subject,
                'error_code' => 'SMTP_ERROR'
            ]);
        }
    }
}