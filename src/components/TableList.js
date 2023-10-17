import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import ChartModal from './ChartModal';

const BASE_URL = 'http://34.230.9.105:8000'; // Reemplaza con la URL de tu servidor Django

function TableList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);

  const showGraphics = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/admin/personalProgress/1/`);
      console.log(response.data);  // Añadiste este log para diagnosticar
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
    <div className="container mt-4">
      <h2>Tabla de Usuarios</h2>

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
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.grado_ac}</td>
                <td>{item.genero}</td>
                <td>{item.edad}</td>
                <td>{item.pais}</td>
                <td>{item.institucion}</td>
                <td>
                  <button  onClick={() => showGraphics(item.id)} className="btn-custom">
                    Ver Gráficas
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ChartModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} evaluationData={currentUserData} />
    </div>
  );
}

export default TableList;
