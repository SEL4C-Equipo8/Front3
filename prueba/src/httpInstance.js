import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

// Interceptor de solicitud
httpInstance.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config };
    // Puedes agregar encabezados de autorización u otros encabezados personalizados aquí si es necesario.
    // newConfig.headers.Authorization = `Bearer ${jwtToken}`;
    // newConfig.headers["X-Version"] = "1.0.0";
    // newConfig.headers["X-Signature"] = demoToken;
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta
httpInstance.interceptors.response.use(
  (response) => {
    // Puedes realizar acciones comunes en las respuestas aquí si es necesario.
    return response;
  },
  (error) => {
    // Puedes manejar errores comunes aquí si es necesario.
    return Promise.reject(error);
  }
);

export default httpInstance;
