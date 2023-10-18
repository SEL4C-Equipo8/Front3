import React from 'react';
import Nav from './Navbar';
import { Link } from 'react-router-dom'; // Importa Link aquí
import './Home.css';

function Home({ Toggle }) {
  return (
    <div>
      <div className='home-container' style={{background: 'linear-gradient(to top, white, rgb(39, 120, 134))'}}>

        <Nav Toggle={Toggle} />

        <div className='container'>
          <div className='row my-3'>

            <div className='col-md-4'>
              <Link to="/tablas"> {/* Actualiza a la ruta correcta */}
                <div className='home-card2'>
                  <h3 className='home-card-title'>Evaluaciones Inicial</h3>
                </div>
              </Link>
            </div>

            <div className='col-md-4'>
              <Link to="/tablas"> {/* Actualiza a la ruta correcta */}
                <div className='home-card2'>
                  <h3 className='home-card-title'>Evaluaciones Final</h3>
                </div>
              </Link>
            </div>

            <div className='col-md-4'>
              <Link to="/gestion"> {/* Actualiza a la ruta correcta */}
                <div className='home-card2'>
                  <h3 className='home-card-title'>Actividades</h3>
                </div>
              </Link>
            </div>

          </div>
        </div>

        <div className='chart-container'>

        </div>
      </div>
    </div>
  );
}

export default Home;

