import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modulos.css';
import CustomModal from './components/CustomModal';

const YourComponent = () => {
  const boxesData = [
    { title: 'Box 1' },
    { title: 'Box 2' },
    { title: 'Box 3' },
    { title: 'Box 4' },
    { title: 'Box 5' },
    { title: 'Box 6' },
    { title: 'Box 7' },
    { title: 'Box 8' },
    { title: 'Box 9' },
    { title: 'Box 10' },
    { title: 'Box 11' },
    { title: 'Box 12' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState(null);

  const handleOpenModal = (boxTitle, activityIndex) => {
    setActivityToEdit({ boxTitle, activityIndex });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const groupedBoxes = chunkArray(boxesData, 3);

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Módulos - Actividades</h1>
      {groupedBoxes.map((group, groupIndex) => {
        const idActividad = 7;
        return (
          <div key={groupIndex}>
            <Row className="d-flex justify-content-between align-items-center">
              <Col xs={9}>
                <h2>Actividad {idActividad}</h2>
              </Col>
              <Col xs={3} className="text-right">
                <Button variant="primary" onClick={() => handleOpenModal(null, idActividad)}>
                  Crear Módulo
                </Button>
              </Col>
            </Row>
            <Row>
              {group.map((box, index) => (
                <Col key={index} xs={12} sm={6} md={4}>
                  <div className="box-container">
                    <Card>
                      <Card.Body>
                        <Card.Title>{box.title}</Card.Title>
                        <Button variant="outline-secondary" onClick={() => handleOpenModal(box.title, idActividad)}>
                          Modificar
                        </Button>
                        <Button variant="outline-secondary" onClick={() => {}}>
                          Eliminar
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
            <CustomModal
              show={showModal && activityToEdit && activityToEdit.activityIndex === idActividad}
              onHide={handleCloseModal}
              idActividad={idActividad}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default YourComponent;
















