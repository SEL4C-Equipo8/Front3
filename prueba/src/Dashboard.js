import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/Home';
import Sidebar2 from './components/Sidebar2';

function Dashboard() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
<div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        {toggle && (
          <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar2 />
          </div>
        )}
        {toggle && <div className='col-4 col-md-2'></div>}
        <div className='col'>
          <Home Toggle={Toggle} />
        </div>
        </div>
    </div>
    );
}
export default Dashboard;






