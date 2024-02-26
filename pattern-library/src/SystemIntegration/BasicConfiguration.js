import React, { useState } from 'react';
import axios from 'axios';

function BasicConfigurationForm() {
    const [config, setConfig] = useState({
        alert_thresholds: '',
        data_retention_policy: '',
        performance_baselines: '',
        feedback_channels: '',
    });

    const handleChange = (e) => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/basic-configuration/', config);
            alert('Configuration saved successfully.');
        } catch (error) {
            console.error('Saving configuration failed:', error);
            alert('Saving configuration failed.');
        }
    };

    const handleCancel = () => {
        // Reset form or navigate away
    };

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <h2>Basic Configuration</h2>
                </div><br/><br/>
                <div className="mb-3">
                    <label htmlFor="alert_thresholds" className="form-label">Alert Thresholds</label>
                    <input type="text" className="form-control" id="alert_thresholds" name="alert_thresholds" value={config.alert_thresholds} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="data_retention_policy" className="form-label">Data Retention Policy</label>
                    <input type="text" className="form-control" id="data_retention_policy" name="data_retention_policy" value={config.data_retention_policy} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="performance_baselines" className="form-label">Performance Baselines</label>
                    <input type="text" className="form-control" id="performance_baselines" name="performance_baselines" value={config.performance_baselines} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback_channels" className="form-label">Feedback Channels</label>
                    <input type="text" className="form-control" id="feedback_channels" name="feedback_channels" value={config.feedback_channels} onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary me-2">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default BasicConfigurationForm;
