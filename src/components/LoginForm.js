import React, { useState } from 'react';
import axios from 'axios';
import CustomButton from './components/CustomButton'

const BASE_URL = 'https://sel4c.online'; 

function LoginForm() { 
  const [formData, setFormData] = useState({
    email: '',
    contrasena: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/api/admin/login/`, formData);      
      if (response.status === 200) {
        console.log('Inicio de sesión exitoso');
      } else {
        console.log('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
