import axios from 'axios';

const BASE_URL = 'http://34.230.9.105:8000'; // Reemplaza esto con la URL de tu servidor Django

export async function createModule(idActividad, titulo_mod, instrucciones, imagen_mod, tipo_multimedia) {
  const url = `${BASE_URL}/api/admin/activity/${idActividad}/module/create/`; // URL para crear un módulo en una actividad específica
  const data = {
    id_actividad: idActividad,
    titulo_mod: titulo_mod,
    instrucciones: instrucciones,
    imagen_mod: imagen_mod,
    tipo_multimedia: tipo_multimedia,
    // Otros campos del módulo, si los tienes

  };

  console.log("Datos a enviar:", JSON.stringify(data, null, 2)); // Esto imprimirá el JSON con un formato amigable

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 201) {
      // Aquí puedes manejar la respuesta exitosa, por ejemplo, mostrar un mensaje de éxito
      console.log('Módulo creado exitosamente');
      alert('Error al crear el módulo');
      window.location.reload();
      return { success: true, message: 'Módulo creado exitosamente' };
    } else {
      // Manejar otros códigos de estado de respuesta en caso de error
      alert('Módulo creado exitosamente');
      window.location.reload();
      return { success: false, message: 'Error al crear el módulo' };
    }
  } catch (error) {
    // Manejar errores de conexión u otros errores
    console.error('Error al crear el módulo:', error);
    return { success: false, message: 'Error de conexión' };
  }
}

export async function editModule(idActividad, idModulo, titulo_mod, instrucciones, imagen_mod, tipo_multimedia) {
  const url = `${BASE_URL}/api/admin/activity/${idActividad}/module/${idModulo}/update/`; // URL para editar un módulo específico en una actividad específica
  const data = {
    id_actividad: idActividad,
    titulo_mod: titulo_mod,
    instrucciones: instrucciones,
    imagen_mod: imagen_mod,
    tipo_multimedia: tipo_multimedia,
    // Otros campos del módulo, si los tienes
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
      console.log('Módulo modificado exitosamente');
      alert('Módulo modificado exitosamente');
      window.location.reload();
      return { success: true, message: 'Módulo modificado exitosamente' };
    } else {
      // Manejar otros códigos de estado de respuesta en caso de error
      alert('Error al modificar el módulo');
      window.location.reload();
      return { success: false, message: 'Error al modificar el módulo' };
    }
  } catch (error) {
    // Manejar errores de conexión u otros errores
    console.error('Error al modificar el módulo:', error);
    return { success: false, message: 'Error de conexión' };
  }
}

export async function deleteModule(idActividad, idModulo) {
  const url = `${BASE_URL}/api/admin/activity/${idActividad}/module/${idModulo}/`; // URL para eliminar un módulo específico en una actividad específica

  try {
    const response = await axios.delete(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Agrega el token de autenticación si es necesario
      },
    });

    if (response.status === 204) {
      // La respuesta 204 indica que se eliminó con éxito
      console.log('Módulo eliminado exitosamente');
      alert('Error al eliminar el módulo');
      window.location.reload();
      return { success: true, message: 'Módulo eliminado exitosamente' };
    } else {
      // Manejar otros códigos de estado de respuesta en caso de error
      alert('Módulo eliminado exitosamente');
      window.location.reload();
      return { success: false, message: 'Error al eliminar el módulo' };
    }
  } catch (error) {
    // Manejar errores de conexión u otros errores
    console.error('Error al eliminar el módulo:', error);
    return { success: false, message: 'Error de conexión' };
  }
}

export async function getModulesByActivity(idActividad) {
  const url = `${BASE_URL}/api/admin/activity/${idActividad}/module/all/`;

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Token de autenticación
      },
    });

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, message: 'Error al obtener los módulos' };
    }
  } catch (error) {
    console.error('Error al obtener los módulos:', error);
    return { success: false, message: 'Error de conexión' };
  }
}