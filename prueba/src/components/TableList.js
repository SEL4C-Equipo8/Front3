import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TableList() {
  const data = [
    {
      username: 'usuario1',
      email: 'usuario1@example.com',
      grado_ac: 'Licenciatura',
      genero: 'Femenino',
      edad: 25,
      pais: 'México',
      institucion: 'Universidad A',
    },
    {
      username: 'usuario2',
      email: 'usuario2@example.com',
      grado_ac: 'Maestría',
      genero: 'Masculino',
      edad: 30,
      pais: 'España',
      institucion: 'Universidad B',
    },
    // Agrega más datos aquí
  ];
  return (
    <div className="container mt-4">
      <h2>Tabla de Datos</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Grado Académico</th>
            <th>Género</th>
            <th>Edad</th>
            <th>País</th>
            <th>Institución</th>
            <th>Gráficas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.grado_ac}</td>
              <td>{item.genero}</td>
              <td>{item.edad}</td>
              <td>{item.pais}</td>
              <td>{item.institucion}</td>
              <td>
                {/* Agrega aquí el enlace o botón para las gráficas */}
                <button className="btn btn-primary">Ver Gráficas</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableList;