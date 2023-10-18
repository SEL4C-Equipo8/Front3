import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomModal from './components/CustomModal';
import './Modulos.css';
import Header from './components/Header';
import { createModule, editModule, deleteModule, getModulesByActivity } from './models/Module';
import axios from 'axios';

const Modulos = () => {
  const [activities, setActivities] = useState([]);
  const [modules, setModules] = useState({});
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
      setModuleData({
        ...existingModuleData,
        idActividad: activityIndex
      });
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

  const onSave = async (titulo, descripcion, imagen, tipoMultimedia) => {
    if (activityToEdit.boxTitle) {
      await editModule(
        moduleData.idActividad,
        moduleData.id_modulo,
        titulo,
        descripcion,
        imagen,
        tipoMultimedia
      );
    } else {
      await createModule(
        moduleData.idActividad,
        titulo,
        descripcion,
        imagen,
        tipoMultimedia
      );
    }
    handleCloseModal();
  };

  useEffect(() => {
    // Cargar actividades desde el servidor
    axios.get('https://sel4c.online/api/admin/activities/all/')
      .then(async (response) => {
        if (response.status === 200) {
          setActivities(response.data);

          // Una vez que las actividades estén cargadas, cargamos los módulos para cada actividad
          for (let activity of response.data) {
            const result = await getModulesByActivity(activity.id_actividad);
            if (result.success) {
              setModules(prevModules => ({
                ...prevModules,
                [activity.id_actividad]: result.data
              }));
            }
          }
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
                        width: '150px',
                        height: '40px',
                        marginBottom: '180px',
                      }}
                      onClick={() => handleOpenModal(null, idActividad)}>
                        Crear Módulo
                    </Button>
                  </Col>
                </Row>

                {/* Renderizar módulos dinámicamente */}
                <Row>
                  {modules[idActividad] && modules[idActividad].map((module, moduleIndex) => (
                    <Col key={moduleIndex} xs={12} sm={6} md={4}>
                      <div className="box-container">
                        <Card className="demo-card demo-card--step">
                          <Card.Body>
                            <Card.Title style={{ color: 'white', fontSize: '40px' }}>
                              {module.titulo_mod}
                            </Card.Title>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '6%', marginTop: '7%', marginBottom: '3%' }}>
                              <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleOpenModal(module.titulo_mod, idActividad, module)}>
                                Modificar 
                              </Button>
                              <div style={{ marginRight: '10px' }}></div>
                              <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleDeleteModule(idActividad, module.id_modulo)}>
                                Eliminar 
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                  ))}
                </Row>

                <CustomModal
                  show={showModal && activityToEdit && activityToEdit.activityIndex === idActividad}
                  onHide={handleCloseModal}
                  moduleData={moduleData}
                  onSave={onSave}
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






