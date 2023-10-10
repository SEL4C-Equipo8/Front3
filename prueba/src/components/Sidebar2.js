import React from 'react';
import './Sidebar2.css'; // Utiliza el mismo nombre de archivo CSS
import { Link } from 'react-router-dom';

function Sidebar2() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="brand-name fs-4">SEL4C</span>
      </div>
      <hr className="sidebar-divider" />
      <div className="sidebar-menu">
        <Link to="/tablas" className="sidebar-item">
          <i className="bi bi-table fs-5 me-3"></i>
          <span>Tablas</span>
        </Link>
        <Link to="/dashboard" className="sidebar-item">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>Dashboard</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar2;






 