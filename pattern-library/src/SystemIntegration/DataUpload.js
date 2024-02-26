import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataUploadForm() {
    const [file, setFile] = useState(null);
    const [dataType, setDataType] = useState('');
    const [validDate, setValidDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('data_file', file);
        formData.append('data_type', dataType);
        formData.append('valid_date', validDate);
        try {
            await axios.post('/api/upload-data/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('File uploaded successfully.');
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed.');
        }
    };

    const handleCancel = () => {
        // Reset the form or perform other cancel actions
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-3">
            <div className="mb-3">
                <h2>Data Upload</h2>
            </div><br/><br/>
            <div className="mb-3">
                <input type="file" className="form-control" onChange={e => setFile(e.target.files[0])} />
            </div>
            <div className="mb-3">
                <select className="form-select" onChange={e => setDataType(e.target.value)}>
                <option value="">Select Data Type</option>
                <option value="logs">Logs</option>
                <option value="metrics">Metrics</option>
                </select>
            </div>
            <div className="mb-3">
                <input type="date" className="form-control" onChange={e => setValidDate(e.target.value)} />
            </div><br/><br/><br/>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary me-2">Upload</button>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default DataUploadForm;
