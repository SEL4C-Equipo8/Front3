import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ModifyActivityForm({ activityId }) {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
  });

  const [message, setMessage] = useState('');

  // Cargar los datos de la actividad actual al montar el componente
  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener los detalles de la actividad actual
    const fetchActivityDetails = async () => {
      try {
        const response = await axios.get(`/api/admin/activities/${activityId}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.status === 200) {
          const activityData = response.data;
          // Actualiza el estado del formulario con los detalles de la actividad actual
          setFormData({
            titulo: activityData.titulo,
            descripcion: activityData.descripcion,
          });
        }
      } catch (error) {
        console.error('Error al cargar los detalles de la actividad:', error);
        setMessage('Error de conexión');
      }
    };

    fetchActivityDetails();
  }, [activityId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/admin/activities/${activityId}/`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        setMessage('Actividad modificada exitosamente');
        // Puedes realizar otras acciones después de la modificación exitosa
        // Por ejemplo, cerrar el modal o actualizar la lista de actividades
      } else {
        setMessage('Error al modificar la actividad');
      }
    } catch (error) {
      console.error('Error al modificar la actividad:', error);
      setMessage('Error de conexión');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Título de la actividad"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción de la actividad"
            required
          />
        </div>
        <div>
          <button type="submit">Modificar Actividad</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ModifyActivityForm;
