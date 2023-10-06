import React from 'react';
import Nav from './Navbar';
import './Dashboard.css';
import BarChart from './BarChart';

function Home({ Toggle }) {
  return (
    <div className='px-3' >
      <Nav Toggle={Toggle} />
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
          <div className='col-md-3 p-1'>
            <div className='p-3 shadow-sm d-flex justify-content-around align-items-center rounded'  style={{backgroundColor: '#D3D3D3'}}>
              <div>
                <h3 className='fs-2'>Evalucion Inicial</h3>
              </div>
            </div>
          </div>

          <div className='col-md-3 p-1'>
            <div className='p-3  shadow-sm d-flex justify-content-around align-items-center rounded' style={{backgroundColor: '#D3D3D3'}}>
              <div >
                <h3 className='fs-2' >Evalucion Final</h3>
              </div>
            </div>
          </div>

          <div className='col-md-3 p-1'>
            <div className='p-3  shadow-sm d-flex justify-content-around align-items-center rounded'  style={{backgroundColor: '#D3D3D3'}}>
              <div>
                <h3 className='fs-2'>Actividades</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: '#D3D3D3' }}>
        <BarChart></BarChart>
      </div>
    </div>
  );
}

export default Home;

