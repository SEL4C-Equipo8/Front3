import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modulos.css';

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

  const [expandedBoxIndex, setExpandedBoxIndex] = useState(-1);

  const openBox = (index) => {
    setExpandedBoxIndex(index);
  };

  const closeBox = () => {
    setExpandedBoxIndex(-1);
  };

  const groupedBoxes = [];
  for (let i = 0; i < boxesData.length; i += 3) {
    groupedBoxes.push(boxesData.slice(i, i + 3));
  }

  return (
    <Container>
<h1 style={{ textAlign: 'center' }}>Módulos - Actividades</h1>
      {groupedBoxes.map((group, groupIndex) => (
        <Card key={groupIndex}>
          <Card.Header>
            <h2>Módulos de la actividad {groupIndex + 1}</h2>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outline-secondary">Crear Módulo</Button>
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              {group.map((box, index) => (
                <Col key={index} xs={12} sm={6} md={4}>
                  <div className="expandable-box-container">
                    <Card
                      className={`expandable-box ${expandedBoxIndex === groupIndex * 3 + index ? 'full-screen' : ''}`}
                    >
                      {expandedBoxIndex === groupIndex * 3 + index && (
                        <div className="close-button-container">
                          <Button
                            className="close-button"
                            variant="outline-secondary"
                            onClick={closeBox}
                          >
                            Cerrar
                          </Button>
                        </div>
                      )}
                      <Card.Body>
                        {expandedBoxIndex === groupIndex * 3 + index ? (
                          <div>
                            {box.expandedContent}
                            <Button variant="outline-secondary">Eliminar</Button>
                          </div>
                        ) : (
                          <div>
                            <Card.Title>{box.title}</Card.Title>
                            <Button
                              variant="outline-secondary"
                              onClick={() => openBox(groupIndex * 3 + index)}
                            >
                              Modificar
                            </Button>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default YourComponent;














