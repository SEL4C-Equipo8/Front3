import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './Gestion.css';
import Header from './components/Header';
import CustomModalA from './components/CustomModalA';
import { Link } from 'react-router-dom';
import axios from 'axios';

const activityImages = [
  "actividad1.jpeg",
  "actividad2.jpeg",
  "actividad3.jpeg",
  "actividad4.jpeg",
  "speech.png",
  "actividad6.jpeg",
];

function Gestion() {
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [mode, setMode] = useState('create');
  const [activityToEdit, setActivityToEdit] = useState(null);

  const handleOpenModal = (mode, activityToEdit) => {
    setMode(mode);
    setActivityToEdit(activityToEdit);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const BASE_URL = 'https://sel4c.online';
  const loadActivities = async () => {
    try {
      const url = `${BASE_URL}/api/admin/activities/all/`;
      console.log('Token de autorización:', localStorage.getItem('token'));
  
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Respuesta de Axios:', response);
  
      if (response.status === 200) {
        setActivities(response.data);
      }
    } catch (error) {
      console.error('Error al cargar las actividades:', error);
    }
  };

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

  useEffect(() => {
    loadActivities();
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
            <div style={{ marginRight: '20px' }}></div>
            <Link to="/modulos">
              <Button variant="outline-light" style={{ width: '380px', height: '85px', borderRadius: '20px', borderColor: '#003087', borderWidth: '2.5px', color: 'black', fontSize: '20px' }}>
                Módulos
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
                      <div style={{ marginRight: '10px' }}></div>
                      <Button variant="outline-light" style={{ width: '120px', height: '40px' }} onClick={() => handleDeleteActivity(activity.id_actividad)}>
                        Eliminar
                      </Button>{' '}
                    </div>
                    <img
                      src={activityImages[index] || "/foto11.png"}
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






