import React, { useState } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import './Aboutus.css';  
import Header from './components/Header';
import Header2 from './components/Header2';

function Aboutus() {
  const [isLoggedIn] = useState(false);

  return (
    <div className="Aboutus" style={{ backgroundColor: '#DFE0DA' }}>
      {isLoggedIn ? <Header /> : <Header2 />}
      
      <div className="aboutus-container">
        <h1 className="main-title">Sobre Nosotros</h1>
        
        <div className="timeline">
          {/* Sobre el Emprendimiento Social */}
          <div className="timeline-item">
            <Card className="aboutus-card card-red fade-in">
              <Card.Title className="align-left">
                <div className="title-background-red" style={{fontWeight:'600',fontSize:'28px'}}>
                  Sobre el Emprendimiento Social
                </div>
              </Card.Title>                       
              <Row>
                <Col md={6}>
                  <Card.Text style={{marginLeft: '20px', textAlign:'left', fontSize:'18px',fontWeight:'400'}}>
                    El emprendimiento social se centra en empresas que añaden valor.
                    Combina la producción de bienes y servicios con un propósito 
                    claramente social, enfatizando la gestión democrática, la autonomía
                    y la transparencia en sus objetivos orientados hacia el bienestar 
                    de la sociedad.<br/>
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <Image className="carda-img" src="foto8.jpeg" alt="Imagen 1" fluid />
                </Col>
              </Row>
            </Card>
          </div>
          
          {/* Sobre la importancia de generar valor social */}
          <div className="timeline-item timeline-item-right">
            <Card className="aboutus-card card-blue fade-in">
              <Card.Title className="align-right" style={{fontWeight:'600',fontSize:'28px'}}>
                <div className="title-background-blue">
                  Sobre la importancia de generar valor social
                </div>
              </Card.Title>
              <Row>
                <Col md={6}>
                  <Image className="carda-img" src="foto9.jpeg" alt="Imagen 2" fluid />
                </Col>
                <Col md={6}>
                  <Card.Text style={{marginLeft: '0px', textAlign:'right', fontSize:'18px',fontWeight:'400'}}>
                    La principal meta de cualquier emprendimiento social es...
                    {/* Aquí continúa el resto del contenido */}
                  </Card.Text>
                </Col>
              </Row>
            </Card>
          </div>
          
          {/* Sobre la Metodología SEL4C */}
          <div className="timeline-item">
            <Card className="aboutus-card card-green fade-in">
              <Card.Title className="align-left" style={{fontWeight:'600',fontSize:'28px'}}>
                <div className="title-background-green">
                  Sobre la Metodología SEL4C
                </div>
              </Card.Title>
              <Row>
                <Col md={6}>
                  <Card.Text style={{marginLeft: '20px', textAlign:'left', fontSize:'18px',fontWeight:'400'}}>
                    Misión de la metodología SEL4C...
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <Image className="carda-img" src="foto7.jpeg" alt="Imagen 3" fluid />
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

