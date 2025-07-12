import React, { useState } from 'react';
import SubmissionForm from './components/SubmissionForm';
import SubmissionGrid from './components/SubmissionGrid';
import './styles/theme.css';

const App = () => {
    const [submissions, setSubmissions] = useState([]);

    const addSubmission = (submission) => {
        setSubmissions([...submissions, submission]);
    };

    return (
        <div className="app">
            <h1>Proposed Rule Changes</h1>
            <button onClick={() => document.getElementById('submission-form-overlay').style.display = 'block'}>
                Submit Proposed Rule Change
            </button>
            <SubmissionForm addSubmission={addSubmission} />
            <SubmissionGrid submissions={submissions} />
        </div>
    );
};

export default App;