import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './Aboutus.css';  // Asegúrate de tener este archivo para los estilos.
import Header from './components/Header';

function Aboutus() {
    return (
     <div className="Aboutus" style={{ backgroundColor: '#DFE0DA' }}>
        <Header></Header>


        <Container className="aboutus-container">
            <h1>About us</h1>
            {/* Sobre el Emprendimiento Social */}
            <Card className="aboutus-card fade-in">
            <Card.Title>Sobre el Emprendimiento Social</Card.Title>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Card.Text>
                                Cuando se habla de emprendimiento, existen muchos antecedentes...
                                {/* Aquí continúa el resto del contenido */}
                            </Card.Text>
                        </Col>
                        <Col md={6}>
                            
                            <Image src="ruta_de_la_imagen1.jpg" alt="Imagen 1" fluid />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* Sobre la importancia de generar valor social */}
            <Card className="aboutus-card fade-in">
            <Card.Title>Sobre la importancia de generar valor social</Card.Title>

                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Card.Text>
                                La principal meta de cualquier emprendimiento social es...
                                {/* Aquí continúa el resto del contenido */}
                            </Card.Text>
                        </Col>
                        <Col md={6}>
                            <Image src="ruta_de_la_imagen2.jpg" alt="Imagen 2" fluid />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* Sobre la Metodología SEL4C */}
            <Card className="aboutus-card fade-in">
            <Card.Title>Sobre la Metodología SEL4C</Card.Title>

                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Card.Text>
                                Misión de la metodología SEL4C...
                                {/* Aquí continúa el resto del contenido */}
                            </Card.Text>
                        </Col>
                        <Col md={6}>
                            <Image src="ruta_de_la_imagen3.jpg" alt="Imagen 3" fluid />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </Container>
        </div>
    );
}

export default Aboutus;
