import React from 'react';
import Nav from './Navbar';
import './Home.css'; // Crear un archivo Home.css para definir estilos personalizados
import Graficas from './Graficas';

function Home({ Toggle }) {
  return (
    <div className='home-container'>
      <Nav Toggle={Toggle} />

      <div className='container'>
        <div className='row my-3'>

          <div className='col-md-4'>
            <div className='home-card2 '>
              <h3 className='home-card-title'>Evaluaciones Inicial</h3>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='home-card2'>
              <h3 className='home-card-title'>Evaluaciones Final</h3>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='home-card2'>
              <h3 className='home-card-title'>Actividades</h3>
            </div>
          </div>

        </div>
      </div>

      <div className='chart-container'>
        <Graficas />

      </div>
    </div>
  );
}

export default Home;
