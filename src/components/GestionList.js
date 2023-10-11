import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GestionList() {
  const [activities, setActivities] = useState([]);
  const [editedActivity, setEditedActivity] = useState({
    id_actividad: null,
    titulo: '',
    descripcion: '',
  });

  useEffect(() => {
    // Cargar la lista de actividades al cargar el componente
    loadActivities();
  }, []);

  const loadActivities = () => {
    axios.get('/api/admin/activities/')
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error al obtener actividades:', error);
      });
  };

  const handleEdit = () => {
    axios.put(`/api/admin/activities/${editedActivity.id_actividad}/`, editedActivity)
      .then(() => {
        loadActivities();
        setEditedActivity({ id_actividad: null, titulo: '', descripcion: '' });
      })
      .catch(error => {
        console.error('Error al editar actividad:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/admin/activities/${id}/`)
      .then(() => {
        loadActivities();
      })
      .catch(error => {
        console.error('Error al eliminar actividad:', error);
      });
  };

  return (
    <div>
      <h2>Gestión de Actividades</h2>

      {/* Lista de actividades */}
      <div>
        <h3>Lista de Actividades</h3>
        <ul>
          {activities.map(activity => (
            <li key={activity.id_actividad}>
              {activity.titulo} - {activity.descripcion}
              <button onClick={() => setEditedActivity(activity)}>Editar</button>
              <button onClick={() => handleDelete(activity.id_actividad)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Formulario para editar una actividad */}
      {editedActivity.id_actividad && (
        <div>
          <h3>Editar Actividad</h3>
          <input
            type="text"
            placeholder="Título"
            value={editedActivity.titulo}
            onChange={(e) => setEditedActivity({ ...editedActivity, titulo: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={editedActivity.descripcion}
            onChange={(e) => setEditedActivity({ ...editedActivity, descripcion: e.target.value })}
          />
          <button onClick={handleEdit}>Guardar Cambios</button>
          <button onClick={() => setEditedActivity({ id_actividad: null, titulo: '', descripcion: '' })}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default GestionList;
