import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function SystemIntegrationForm() {
    const [integrationDetails, setIntegrationDetails] = useState({
        name: '',
        api_endpoint: '',
        auth_key: '',
        integration_type: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await axios.post('/api/system-integration', integrationDetails);
        console.log(response.data);
        alert('Integration successful!');
        } catch (error) {
        console.error(error);
        alert('Integration failed.');
        }
    };

    // Function to handle testing integration
    const handleTestIntegration = async () => {
        try {
            // Make a request to test the integration (this URL is just an example)
            const response = await axios.post('/api/test-system-integration', integrationDetails);
            console.log(response.data);
            alert('Test successful!');
        } catch (error) {
            console.error(error);
            alert('Test failed.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="mb-3">
                <h2>System Integration</h2>
            </div><br/><br/>
            <div className="mb-3">
                <input type="text" className="form-control" value={integrationDetails.name} onChange={(e) => setIntegrationDetails({ ...integrationDetails, name: e.target.value })} placeholder="System Name" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" value={integrationDetails.api_endpoint} onChange={(e) => setIntegrationDetails({ ...integrationDetails, api_endpoint: e.target.value })} placeholder="API Endpoint URL" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" value={integrationDetails.auth_key} onChange={(e) => setIntegrationDetails({ ...integrationDetails, auth_key: e.target.value })} placeholder="Authentication Key" />
            </div>
            <div className="mb-3">
                <select className="form-select" value={integrationDetails.integration_type} onChange={(e) => setIntegrationDetails({ ...integrationDetails, integration_type: e.target.value })}>
                <option value="direct_api">Direct API</option>
                <option value="file_upload">File Upload</option>
                <option value="third_party">Third-Party Service</option>
                </select>
            </div><br/><br/><br/>
            <div className="d-flex justify-content-between">
                <div style={{width: '350px'}}>
                    <button type="button" style={{width: '100%'}} className="btn btn-info" onClick={handleTestIntegration}>Test Integration</button>
                </div>
                <div>
                    <button type="submit" className="btn btn-success me-2">Save Integration</button>
                    <button type="button" className="btn btn-secondary" onClick={() => {/* handle cancel */}}>Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default SystemIntegrationForm;
