import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modulos.css';
import CustomModal from './components/CustomModal'


const YourComponent = () => {
  const boxesData = [
    {title: 'Box 1',},
    {
      title: 'Box 2',
    },
    {
      title: 'Box 3',
    },
    {
      title: 'Box 4',
    },
    {
      title: 'Box 5',
      
    },
    {
      title: 'Box 6',
      
    },
    {
      title: 'Box 7',
      
    },
    {
      title: 'Box 8',
      
    },
    {
      title: 'Box 9',
      
    },
    {
      title: 'Box 10',
     
    },
    {
      title: 'Box 11',
      
    },
    {
      title: 'Box 12',
      
    },
  ];


  const [showModal, setShowModal] = useState(false); // Nuevo estado para controlar la visibilidad del modal

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Módulos - Actividades</h1>
      <Button variant="primary" onClick={handleOpenModal}>
        Crear Módulo
      </Button>
      {boxesData.map((box, index) => (
        <Col key={index} xs={12} sm={6} md={4}>
          <div className="box-container">
            <Card>
              <Card.Body>
                <Card.Title>{box.title}</Card.Title>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleOpenModal()}
                >
                  Modificar
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => {}}
                >
                  Eliminar
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
      {/* Renderizar el modal */}
      <CustomModal show={showModal} onHide={handleCloseModal} />
    </Container>
  );
};

export default YourComponent;













