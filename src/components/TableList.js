import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Header from './Header';
import ChartModal from './ChartModal';

const BASE_URL = 'https://sel4c.online'; 

function TableList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [userProgressData, setUserProgressData] = useState(null);

  const fetchUserProgress = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user/progress/brief/${userId}`);
      if (response.status === 200) {
        setUserProgressData(response.data);
      } else {
        console.error('Error al obtener el progreso del usuario');
      }
    } catch (error) {
      console.error('Error al obtener el progreso del usuario:', error);
    }
  };

  const showGraphics = async (userId) => {
    await fetchUserProgress(userId);
    try {
      const response = await axios.get(`${BASE_URL}/api/admin/personalProgress/${userId}/`);
      setCurrentUserData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error obteniendo los datos de la gráfica:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/admin/users`);
      setData(response.data.users);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error("Hubo un error al obtener los datos:", err);
    }
  };

  useEffect(() => {
    fetchData(); // Llamada inicial
  }, []);

  return (
    <>
      <Header></Header>
      <section id="timeline" style={{ backgroundColor: '#DFE0DA' }}>
        <div className="container mt-4">
          <h1 style={{ fontWeight: '500', fontSize: '350%', marginTop: '-30px', marginBottom: '85px' }}>Tabla de Usuarios</h1>
          {loading ? (
            <p>Cargando...</p>
          ) : error ? (
            <p>Hubo un error al cargar los datos.</p>
          ) : (
            <table className="custom-table">
              <thead className="thead-dark">
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Grado Académico</th>
                  <th>Género</th>
                  <th>Edad</th>
                  <th>País</th>
                  <th>Institución</th>
                  <th>Gráficas</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id_usuario}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.grado_ac}</td>
                    <td>{item.genero}</td>
                    <td>{item.edad}</td>
                    <td>{item.pais}</td>
                    <td>{item.institucion}</td>
                    <td>
                      <button onClick={() => showGraphics(item.id_usuario)} className="btn-custom">
                        Ver Gráficas
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <ChartModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} evaluationData={currentUserData} userProgressData={userProgressData} />
        </div>
      </section>
    </>
  );
}

export default TableList;