import React from 'react';
import Header from './components/Header';
import BarChart from './components/BarChart';


function Graficas() {
  return (
    <div className="Dashboard" style={{ backgroundColor: '#DCDCDC' }}>
      <Header />
      <div className='d-flex dashboard' style={{ marginTop: '0px' }}>
        <div
          className='d-flex sidebar flex-column flex-shrink-0 text-white'
          style={{ width: '200px', height: '100vh', position: 'fixed', backgroundColor: '#003087' }}
        >
          <ul className='nav nav-pills flex-column mb-auto px-0'>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h4 style={{ borderBottom: '2px solid white', paddingBottom: '10px' }}>Administrador</h4>
            </div>

            <li className='nav-item'>
              <a href="" className='nav-link text-white'>
                <span className='ms-2'>Dashboard</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link text-white'>
                <span className='ms-2'>Cars</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content" style={{ marginLeft: '200px', padding: '20px' }}>
          {/* Aquí renderiza el componente ChessChart */}
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Graficas;
