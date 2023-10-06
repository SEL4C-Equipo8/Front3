import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Reemplaza esto con la URL de tu servidor Django

export async function createActivity(titulo, descripcion) {
  const url = `${BASE_URL}/api/admin/activities/`; // Asegúrate de que la URL sea la correcta
  const data = {
    titulo: titulo,
    descripcion: descripcion,
    // Otros campos de la actividad, si los tienes
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Agrega el token de autenticación si es necesario
      },
    });

    if (response.status === 201) {
      // Aquí puedes manejar la respuesta exitosa, por ejemplo, mostrar un mensaje de éxito
      console.log('Actividad creada exitosamente');
      return { success: true, message: 'Actividad creada exitosamente' };
    } else {
      // Manejar otros códigos de estado de respuesta en caso de error
      return { success: false, message: 'Error al crear la actividad' };
    }
  } catch (error) {
    // Manejar errores de conexión u otros errores
    console.error('Error al crear la actividad:', error);
    return { success: false, message: 'Error de conexión' };
  }
}

export async function editActivity(idActividad, titulo, descripcion) {
  const url = `${BASE_URL}/api/admin/activities/${idActividad}/`; // URL para editar una actividad específica
  const data = {
    titulo: titulo,
    descripcion: descripcion,
    // Otros campos de la actividad, si los tienes
  };

  try {
    const response = await axios.put(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Agrega el token de autenticación si es necesario
      },
    });

    if (response.status === 200) {
      // Aquí puedes manejar la respuesta exitosa, por ejemplo, mostrar un mensaje de éxito
      console.log('Actividad modificada exitosamente');
      return { success: true, message: 'Actividad modificada exitosamente' };
    } else {
      // Manejar otros códigos de estado de respuesta en caso de error
      return { success: false, message: 'Error al modificar la actividad' };
    }
  } catch (error) {
    // Manejar errores de conexión u otros errores
    console.error('Error al modificar la actividad:', error);
    return { success: false, message: 'Error de conexión' };
  }
}

