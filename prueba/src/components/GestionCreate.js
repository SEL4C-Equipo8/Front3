import React, { useState } from 'react';
import axios from 'axios';

function GestionCreate() {
  const [newActivity, setNewActivity] = useState({
    titulo: '',
    descripcion: '',

  });

  const handleCreate = () => {
    axios.post('/api/admin/activities/', newActivity)
      .then(() => {
        setNewActivity({ titulo: '', descripcion: '' });
      })
      .catch(error => {
        console.error('Error al crear actividad:', error);
      });
  };

  return (
    <div>
      <h2>Crear Nueva Actividad</h2>

      {/* Formulario para crear una nueva actividad */}
      <div>
        <input
          type="text"
          placeholder="Título"
          value={newActivity.titulo}
          onChange={(e) => setNewActivity({ ...newActivity, titulo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newActivity.descripcion}
          onChange={(e) => setNewActivity({ ...newActivity, descripcion: e.target.value })}
        />
        <button onClick={handleCreate}>Crear</button>
      </div>
    </div>
  );
}

export default GestionCreate;
