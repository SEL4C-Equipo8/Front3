import React, { useState } from 'react';
import axios from 'axios';

function ActivityForm() {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/admin/activities/', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 201) {
        setMessage('Actividad creada exitosamente');
        // Puedes realizar otras acciones después de la creación exitosa
        // Por ejemplo, cerrar el modal o actualizar la lista de actividades
      } else {
        setMessage('Error al crear la actividad');
      }
    } catch (error) {
      console.error('Error al crear la actividad:', error);
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
          <button type="submit">Crear Actividad</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ActivityForm;
