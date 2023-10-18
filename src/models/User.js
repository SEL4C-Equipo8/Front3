import axios from 'axios';

const BASE_URL = 'https://sel4c.online'; 

export async function loginUser(email, contrasena) {
  const url = `${BASE_URL}/api/admin/login/`; 
  const data = {
    correo: email,
    contrasena: contrasena,
};

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('token', token);
      return { success: true, message: 'Inicio de sesión exitoso' };
    } else {
      console.error(`Código de estado inesperado: ${response.status}`);
      console.error(response.data);
      console.log(response.data)
      return { success: false, message: 'Credenciales incorrectas' };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error de conexión' };
  }
}
