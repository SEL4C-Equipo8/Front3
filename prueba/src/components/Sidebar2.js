import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';


function Sidebar2() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <span className="brand-name fs-4">SEL4C</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
      <Link to="/tablas">
        <a className="list-group-item py-2">
        <i className="bi bi-table fs-5 me-3"></i>
          <span>Tablas</span>
        </a>
        </Link>
        <Link to="/barchart">
        <a className="list-group-item py-2">
            <i className="bi bi-speedometer2 fs-5 me-3"></i>
            <span>Dashboard</span>
        </a>
        </Link>
      
      </div>
    </div>
  );
}

export default Sidebar2;





 