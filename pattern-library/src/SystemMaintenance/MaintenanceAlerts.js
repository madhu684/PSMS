import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MaintenanceAlerts() {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const fetchAlerts = async () => {
            const { data } = await axios.get('/api/alerts/');
            setAlerts(data);
        };
        fetchAlerts();
    }, []);

    const handleResolve = async (id) => {
        await axios.patch(`/api/alerts/${id}/`, { is_resolved: true });
        setAlerts(alerts.map(alert => alert.id === id ? { ...alert, is_resolved: true } : alert));
    };

    return (
        <div className="container">
            <div className="mb-3">
                <h2>Maintenance Alerts</h2>
            </div><br/><br/>
            <ul className="list-group">
                {alerts.map(alert => (
                    <li key={alert.id} className={`list-group-item ${alert.is_resolved ? 'list-group-item-success' : ''}`}>
                        {alert.message}
                        {!alert.is_resolved && <button className="btn btn-sm btn-primary float-end" onClick={() => handleResolve(alert.id)}>Resolve</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MaintenanceAlerts;
