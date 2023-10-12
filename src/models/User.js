import axios from 'axios';

const BASE_URL = 'http://54.205.255.125:8000'; // Reemplaza esto con la URL de tu servidor Django

export async function loginUser(email, contrasena) {
  const url = `${BASE_URL}/authentication/login/`; // Asegúrate de que la URL sea la correcta
  const data = {
    email: email,
    contrasena: contrasena,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      // Aquí puedes manejar la respuesta exitosa, como guardar el token en localStorage
      const token = response.data.token;
      localStorage.setItem('token', token);
      return { success: true, message: 'Inicio de sesión exitoso' };
    } else {
      // Manejar otros códigos de estado de respuesta, por ejemplo, 401 para credenciales incorrectas
      return { success: false, message: 'Credenciales incorrectas' };
    }
  } catch (error) {
    // Manejar errores de conexión u otros errores
    return { success: false, message: 'Error de conexión' };
  }
}
