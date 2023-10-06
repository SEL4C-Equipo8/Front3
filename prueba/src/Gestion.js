import React, { useState } from 'react'; // Importa useState desde React
import { Row, Col, Container,Button } from 'react-bootstrap';
import './Gestion.css';
import CustomButton from './components/CustomButton';
import Header from './components/Header';
import Popup from './components/Popup';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa el componente Link
import CustomModalA from './components/CustomModalA';


function Gestion() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }

  
  return (
    <div>
      <Header></Header>
      <section id="timeline" style={{backgroundColor: '#DFE0DA'}}>
      <Container >
    
      <h1 style={{ fontWeight: '500',fontSize:'350%' ,marginTop:'0px',marginBottom:'40px'}}>Actividades</h1>
        <p className="leader" style={{ fontWeight: '400',fontSize:'140%',marginBottom:'45px' }}>
          En esta sección podras crear, modificar y eliminar las actividades.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' , marginRight: '0%', marginTop: '4%',marginBottom: '12%'}}>
                <Button variant="outline-light" style={{width: '380px',  height: '85px', borderRadius: '20px',borderColor: '#003087',borderWidth: '2.5px',color: 'black' ,fontSize: '20px',}} onClick={handleOpenModal}>
                Crear Actividad
              </Button>{' '}
              <div style={{ marginRight: '20px' }}></div> {/* Espacio */} 
              <Link to="/modulos"> {/* Agrega un enlace al botón */}
              <Button variant="outline-light" style={{ width: '380px', height: '85px',borderRadius: '20px',borderColor: '#003087',borderWidth: '2.5px',color: 'black', fontSize: '20px' }}>
                Modulos
              </Button>
            </Link>
            </div>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            {/* Primera columna */}
            <div className="demo-card demo-card--step1">
              {/* Tarjeta 1 */}
              <div className="head">
                <div className="number-box">
                  <span>01</span>
                </div>
                <h2>
                  <span className="small">Actividad 1</span> Identificación
                </h2>
              </div>
              
              <div className="body" style={{marginTop: '30px'}}>
                <p style={{textAlign:'center',color:'white'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis
                  deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' , marginRight: '6%', marginTop: '7%',marginBottom: '3%'}}>
                <Button variant="outline-light" style={{width: '120px',  height: '40px',}} onClick={handleOpenModal}>
                Modificar
              </Button>{' '}
              <div style={{ marginRight: '10px' }}></div> {/* Espacio */}
                <Button variant="outline-light"   style={{width: '120px',  height: '40px',}}onClick={() => {/* Tu función onClick personalizada */}}>
                Eliminar
              </Button>{' '}
            </div>
            <img
            src="/foto11.png"
            alt="Tu imagen"
            className="demo-card img"
          />


              </div>
            </div>
            <div className="demo-card demo-card--step2"> 
              {/* Tarjeta 3 */}
              <div className="head">
                <div className="number-box">
                  <span>03</span>
                </div>
                <h2>
                  <span className="small">Actividad 3</span> Ideación
                </h2>
              </div>
              <div className="body" style={{marginTop: '30px'}}>
              <p style={{textAlign:'center',color:'white'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis
                  deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' , marginRight: '6%', marginTop: '7%',marginBottom: '3%'}}>
                <Button variant="outline-light" style={{width: '120px',  height: '40px',}} onClick={handleOpenModal}>
                Modificar
              </Button>{' '}
              <div style={{ marginRight: '10px' }}></div> {/* Espacio */}
                <Button variant="outline-light"   style={{width: '120px',  height: '40px',}}onClick={() => {/* Tu función onClick personalizada */}}>
                Eliminar
              </Button>{' '}
            </div>
                <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            {/* Segunda columna */}
            <div className="demo-card demo-card--step3">
              {/* Tarjeta 2 */}
              <div className="head">
                <div className="number-box">
                  <span>02</span>
                </div>
                <h2>
                  <span className="small">Actividad 2</span> Investigación
                </h2>
              </div>
              <div className="body" style={{marginTop: '30px'}}>
              <p style={{textAlign:'center',color:'white'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis
                  deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' , marginRight: '6%', marginTop: '7%',marginBottom: '3%'}}>
                <Button variant="outline-light" style={{width: '120px',  height: '40px',}} onClick={handleOpenModal}>
                Modificar
              </Button>{' '}
              <div style={{ marginRight: '10px' }}></div> {/* Espacio */}
                <Button variant="outline-light"   style={{width: '120px',  height: '40px',}}onClick={() => {/* Tu función onClick personalizada */}}>
                Eliminar
              </Button>{' '}
            </div>
                <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
            </div>
            <div className="demo-card demo-card--step4">
              {/* Tarjeta 4 */}
              <div className="head">
                <div className="number-box">
                  <span>04</span>
                </div>
                <h2>
                  <span className="small">Actividad 4</span> Socialización
                </h2>
              </div>
              <div className="body" style={{marginTop: '30px'}}>
              <p style={{textAlign:'center',color:'white'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis
                  deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' , marginRight: '6%', marginTop: '7%',marginBottom: '3%'}}>
                <Button variant="outline-light" style={{width: '120px',  height: '40px',}} onClick={handleOpenModal}>
                Modificar
              </Button>{' '}
              <div style={{ marginRight: '10px' }}></div> {/* Espacio */}
                <Button variant="outline-light"   style={{width: '120px',  height: '40px',}}onClick={() => {/* Tu función onClick personalizada */}}>
                Eliminar
              </Button>{' '}
            </div>
                <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
            </div>
          </Col>
        </Row>
        <CustomModalA show={showModal} onClose={handleCloseModal}  />

      </Container>
    </section>
    </div>
  );
}

export default Gestion;





