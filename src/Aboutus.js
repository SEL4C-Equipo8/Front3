import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './Aboutus.css';  
import Header from './components/Header';

function Aboutus() {
    return (


        <div className="Aboutus" style={{ backgroundColor: '#DFE0DA' }}>
            <Header></Header>

            <Container className="aboutus-container">
                <h1 className="main-title" >Sobre Nosotros</h1>
                
                {/* Sobre el Emprendimiento Social */}
                <Card className="aboutus-card card-red fade-in">
                
                    <Card.Title className="align-left">
                        <div className="title-background-red">
                            Sobre el Emprendimiento Social
                        </div>
                    </Card.Title>                       
                     <Row>
                            <Col md={6}>
                                <Card.Text style={{marginLeft: '20px'}}>
                                    El emprendimiento social se centra en empresas que añaden valor.
                                    Combina la producción de bienes y servicios con un propósito claramente social, 
                                    enfatizando la gestión democrática, la autonomía y la transparencia en sus objetivos 
                                    orientados hacia el bienestar de la sociedad.
                                </Card.Text>
                            </Col>
                            <Col md={6}>
                                <Image className="carda-img" src="foto8.jpeg" alt="Imagen 1" fluid />
                            </Col>
                        </Row>
                </Card>

                {/* Sobre la importancia de generar valor social */}
                <Card className="aboutus-card card-blue fade-in">
                    <Card.Title className="align-right">
                        <div className="title-background-blue">
                            Sobre la importancia de generar valor social
                        </div>
                    </Card.Title>
                        <Row>
                            <Col md={6}>
                            <Card.Text style={{marginLeft: '20px'}}>
                                    La principal meta de cualquier emprendimiento social es...
                                    {/* Aquí continúa el resto del contenido */}
                                </Card.Text>
                            </Col>
                            <Col md={6}>
                                <Image className="carda-img" src="foto9.jpeg" alt="Imagen 2" fluid />
                            </Col>
                        </Row>
                </Card>

                {/* Sobre la Metodología SEL4C */}
                <Card className="aboutus-card card-green fade-in">
                    <Card.Title className="align-left">
                    <div className="title-background-green">
                        Sobre la Metodología SEL4C
                    </div>
                    </Card.Title>
                        <Row>
                            <Col md={6}>
                            <Card.Text style={{marginLeft: '20px'}}>
                                    Misión de la metodología SEL4C...
                                </Card.Text>
                            </Col>
                            <Col md={6}>
                                <Image className="carda-img" src="foto7.jpeg" alt="Imagen 3" fluid />
                            </Col>
                        </Row>
                </Card>
            </Container>
        </div>
    );
}

export default Aboutus;
