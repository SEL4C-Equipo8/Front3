import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './Gestion.css';
import Header from './components/Header';
import CustomModalA from './components/CustomModalA';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Gestion() {
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([]); // Agrega un estado para almacenar las actividades

  const [mode, setMode] = useState('create'); // Inicialmente en modo "crear"
  const [activityToEdit, setActivityToEdit] = useState(null);


  const handleOpenModal = (mode, activityToEdit) => {
    setMode(mode);
    setActivityToEdit(activityToEdit);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  // Función para cargar las actividades desde el servidor
  const loadActivities = async () => {
    try {
      console.log('Token de autorización:', localStorage.getItem('token')); // Agrega esta línea
      const response = await axios.get('/api/admin/activities/all/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      console.log('Respuesta de Axios:', response); // Agrega esta línea
  
      if (response.status === 200) {
        setActivities(response.data);
      }
    } catch (error) {
      console.error('Error al cargar las actividades:', error);
      // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones de manejo de errores.
    }
  };

  // Función para eliminar una actividad
  const handleDeleteActivity = async (idActividad) => {
    try {
      const response = await axios.delete(`/api/admin/activities/${idActividad}/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (response.status === 200) {
        alert('Se ha eliminado la actividad');
        window.location.reload();
        const updatedActivities = activities.filter((activity) => activity.id_actividad !== idActividad);
        setActivities(updatedActivities);
      } else {
        alert('No se ha podido eliminar la actividad');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error al eliminar la actividad:', error);
    }
  };
  

  // Llama a la función para cargar las actividades cuando el componente se monta
  
  useEffect(() => {
    loadActivities(); // Llamada inicial // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div>
      <Header></Header>
      <section id="timeline" style={{ backgroundColor: '#DFE0DA' }}>
        <Container>
          <h1 style={{ fontWeight: '500', fontSize: '350%', marginTop: '0px', marginBottom: '40px' }}>Actividades</h1>
          <p className="leader" style={{ fontWeight: '400', fontSize: '140%', marginBottom: '45px' }}>
            En esta sección podrás crear, modificar y eliminar las actividades.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginRight: '0%', marginTop: '4%', marginBottom: '12%' }}>
            <Button variant="outline-light" style={{ width: '380px', height: '85px', borderRadius: '20px', borderColor: '#003087', borderWidth: '2.5px', color: 'black', fontSize: '20px' }} onClick={handleOpenModal}>
              Crear Actividad
            </Button>{' '}
            <div style={{ marginRight: '20px' }}></div> {/* Espacio */}
            <Link to="/modulos"> {/* Agrega un enlace al botón */}
              <Button variant="outline-light" style={{ width: '380px', height: '85px', borderRadius: '20px', borderColor: '#003087', borderWidth: '2.5px', color: 'black', fontSize: '20px' }}>
                Modulos
              </Button>
            </Link>
          </div>
          <Row>
            {activities.map((activity, index) => (
              <Col key={index} xs={12} sm={6} md={6} lg={6}>
                <div className="demo-card demo-card--step">
                  <div className="head">
                    <div className="number-box">
                      <span>{index + 1}</span>
                    </div>
                    <h2>
                      <span className="small">{activity.titulo}</span> {activity.descripcion}
                    </h2>
                  </div>
                  <div className="body" style={{ marginTop: '30px' }}>
                    <p style={{ textAlign: 'center', color: 'white' }}>
                      {activity.contenido}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '6%', marginTop: '7%', marginBottom: '3%' }}>
                    <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleOpenModal('edit', activity)}>
                      Modificar
                    </Button>{' '}
                      <div style={{ marginRight: '10px' }}></div> {/* Espacio */}
                      <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleDeleteActivity(activity.id_actividad)}> {/* Llama a la función de eliminación */}
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
              </Col>
            ))}
          </Row>
          <CustomModalA show={showModal} onClose={handleCloseModal} />
          <CustomModalA show={showModal} onClose={handleCloseModal} mode={mode} activityToEdit={activityToEdit} />
        </Container>
      </section>
    </div>
  );
}

export default Gestion;






