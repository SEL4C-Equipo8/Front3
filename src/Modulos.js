import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomModal from './components/CustomModal';
import './Modulos.css';
import Header from './components/Header';
import {  deleteModule } from './models/Module'; // Asegúrate de tener la función para eliminar el módulo
import axios from 'axios';

const Modulos = () => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState(null);
  const [moduleData, setModuleData] = useState({
    idActividad: null,
    titulo_mod: '',
    instrucciones: '',
    imagen_mod: null,
    tipo_multimedia: '',
  });

  const handleOpenModal = (boxTitle, activityIndex, existingModuleData) => {
    setActivityToEdit({ boxTitle, activityIndex });
    setShowModal(true);

    if (existingModuleData) {
      setModuleData(existingModuleData);
    } else {
      setModuleData({
        idActividad: activityIndex,
        titulo_mod: '',
        instrucciones: '',
        imagen_mod: null,
        tipo_multimedia: '',
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Cargar actividades desde el servidor
    axios.get('/api/admin/activities/all/')
      .then((response) => {
        if (response.status === 200) {
          setActivities(response.data);
        }
      })
      .catch((error) => {
        console.error('Error al cargar las actividades:', error);
      });
  }, []);

 

  const handleDeleteModule = (activityId, moduleId) => {
    // Aquí debes implementar la lógica para eliminar un módulo
    // Debes llamar a la función deleteModule pasando activityId y moduleId
    deleteModule(activityId, moduleId)
      .then((response) => {
        if (response.success) {
          console.log('Módulo eliminado exitosamente');
          // Aquí puedes actualizar la lista de módulos si es necesario
        } else {
          console.error('Error al eliminar el módulo');
        }
      })
      .catch((error) => {
        console.error('Error al eliminar el módulo:', error);
      });
  };

  return (
    <div>
      <Header></Header>
      <section id="timeline" style={{ backgroundColor: '#DFE0DA' }}>
        <Container>
      <h1 style={{ fontWeight: '500', fontSize: '350%', marginTop: '0px', marginBottom: '40px' }}>Módulos</h1>
      {activities.map((activity, activityIndex) => {
        const idActividad = activity.id_actividad;
        const existingModuleData = null;

        return (
          <div key={activityIndex}>
            <Row className="d-flex justify-content-between align-items-center">
              <Col xs={9}>
                <h2>{activity.titulo}</h2>
              </Col>
              <Col xs={3} className="text-right">
                <Button variant="primary" 
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: '500',
                    borderRadius: '50px',
                    borderColor: 'black',
                    width: '150px', // Establece el ancho predeterminado en píxeles
                    height: '40px', // Establece la altura predeterminada en píxeles
                    marginBottom: '180px',
                  }}
                onClick={() => handleOpenModal(null, idActividad)}>
                  Crear Módulo
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <div className="box-container">
                  <Card className="demo-card demo-card--step">
                    <Card.Body>
                      <Card.Title  style={{  color: 'white',fontSize: '40px' }}>Módulo 1</Card.Title>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '6%', marginTop: '7%', marginBottom: '3%' }}>
                      <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleOpenModal('Módulo 1', idActividad, existingModuleData)}>
                        Modificar 
                      </Button>
                      <div style={{ marginRight: '10px' }}></div> {/* Espacio */}

                      <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleDeleteModule(idActividad, 1)}>
                        Eliminar 
                      </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="box-container">
                  <Card className="demo-card demo-card--step">
                    <Card.Body>
                      <Card.Title style={{  color: 'white',fontSize: '40px' }}>Módulo 2</Card.Title>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '6%', marginTop: '7%', marginBottom: '3%' }}>
                      <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleOpenModal('Módulo 2', idActividad, existingModuleData)}>
                        Modificar 
                      </Button>
                      <div style={{ marginRight: '10px' }}></div> {/* Espacio */}

                      <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleDeleteModule(idActividad, 2)}>
                        Eliminar 
                      </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="box-container">
                  <Card className="demo-card demo-card--step">
                    <Card.Body>
                    <Card.Title style={{  color: 'white',fontSize: '40px' }}>Módulo 3</Card.Title>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '6%', marginTop: '7%', marginBottom: '3%' }}>
                      <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleOpenModal('Módulo 3', idActividad, existingModuleData)}>
                        Modificar 
                      </Button>
                      <div style={{ marginRight: '10px' }}></div> {/* Espacio */}
                      <Button variant="outline-light" style={{ width: '120px', height: '40px' }}onClick={() => handleDeleteModule(idActividad, 3)}>
                        Eliminar 
                      </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
            <CustomModal
              show={showModal && activityToEdit && activityToEdit.activityIndex === idActividad}
              onHide={handleCloseModal}
              idActividad={idActividad}
              moduleData={moduleData}
              onModuleDataChange={(updatedModuleData) => setModuleData(updatedModuleData)}
              onSave={() => {
                if (activityToEdit.boxTitle) {
                  // Lógica para editar un módulo existente
                  // Debes obtener los datos del módulo existente y llamar a la función de edición
                } else {
                  // Lógica para crear un nuevo módulo
                  // Debes llamar a la función de creación de módulo
                }
                handleCloseModal();
              }}
            />
          </div>
        );
      })}
      </Container>
      </section>
    </div>
  );
};

export default Modulos;








