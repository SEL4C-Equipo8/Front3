import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/Home';
import Sidebar2 from './components/Sidebar2';
import Header from './components/Header';

function Dashboard() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
<div className='container-fluid  min-vh-100' style={{backgroundColor: '#6D8DA1'}}>
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






