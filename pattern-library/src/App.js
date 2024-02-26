import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SystemIntegrationForm from './SystemIntegration/SystemIntegration';
import DataUploadForm from './SystemIntegration/DataUpload';
import './App.css'; // Import custom CSS
import BasicConfigurationForm from './SystemIntegration/BasicConfiguration';
import MaintenanceAlerts from './SystemMaintenance/MaintenanceAlerts';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <nav className="navbar navbar-light bg-light flex-column align-items-start" id="sidebar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/system-integration'} className="nav-link">System Integration</Link>
            </li>
            <li className="nav-item">
              <Link to={'/data-upload'} className="nav-link">Data Upload</Link>
            </li>
            <li className="nav-item">
              <Link to={'/maintenance-alerts'} className="nav-link">Maintenance Alerts</Link>
            </li>
            <li className="nav-item">
              <Link to={'/basic-configuration'} className="nav-link">Basic Configuration Options</Link>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <Routes>
            <Route path='/system-integration' element={<SystemIntegrationForm />} />
            <Route path='/data-upload' element={<DataUploadForm />} />
            <Route path='/basic-configuration' element={<BasicConfigurationForm />} />
            <Route path='/maintenance-alerts' element={<MaintenanceAlerts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
