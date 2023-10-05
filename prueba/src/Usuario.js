// api.js (nombre del archivo)

import axios from 'axios';

const API_BASE_URL = '/api'; // Cambia esto si es necesario

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/profile/${userId}/`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el perfil de usuario:', error);
    throw error;
  }
};

export const login = async (email, contrasena) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login/`, {
      email: email,
      contrasena: contrasena,
    });
    if (response.data.message === 'Credenciales validas') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/signup/`, userData);
    if (response.data.message === 'Usuario registrado con éxito') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al registrarse:', error);
    throw error;
  }
};

export const updateProfile = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/user/profile/${userId}/`, userData);
    if (response.data.message === 'Datos de perfil actualizados') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al actualizar el perfil de usuario:', error);
    throw error;
  }
};
