import React, { useState } from 'react';

const SubmissionForm = ({ onSubmit }) => {
    const [description, setDescription] = useState('');
    const [areaOfImprovement, setAreaOfImprovement] = useState([]);
    const [supportingInfo, setSupportingInfo] = useState('');

    const handleAreaChange = (event) => {
        const value = Array.from(event.target.selectedOptions, option => option.value);
        setAreaOfImprovement(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description && areaOfImprovement.length > 0 && supportingInfo) {
            onSubmit({ description, areaOfImprovement, supportingInfo });
            setDescription('');
            setAreaOfImprovement([]);
            setSupportingInfo('');
        }
    };

    return (
        <div className="overlay">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description of Change:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Area of Improvement:</label>
                    <select multiple value={areaOfImprovement} onChange={handleAreaChange} required>
                        <option value="Fun">Fun</option>
                        <option value="Strategic/Competitive">Strategic/Competitive</option>
                        <option value="Fairness">Fairness</option>
                        <option value="Sustainable">Sustainable</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Supporting Info:</label>
                    <textarea
                        value={supportingInfo}
                        onChange={(e) => setSupportingInfo(e.target.value)}
                        placeholder="Stats, examples, logic, history, etc..."
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmissionForm;