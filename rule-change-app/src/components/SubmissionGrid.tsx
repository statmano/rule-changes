import React from 'react';
import { Submission } from '../types';

interface SubmissionGridProps {
    submissions: Submission[];
}

const SubmissionGrid: React.FC<SubmissionGridProps> = ({ submissions }) => {
    return (
        <div className="submission-grid">
            {submissions.map((submission, index) => (
                <div key={index} className="submission-item">
                    <div className="submission-header">
                        <h3>{submission.description}</h3>
                        <p>{submission.areaOfImprovement.join(', ')}</p>
                    </div>
                    <div className="submission-supporting-info">
                        <p>{submission.supportingInfo}</p>
                    </div>
                    <div className="submission-comments">
                        <CommentBox submissionIndex={index} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubmissionGrid;