import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/Home';
import Sidebar2 from './components/Sidebar2';
import axios from 'axios';
import { Bar } from 'react-chartjs-2'; // Importa el componente de gráfico de barras


function Dashboard() {
  const [toggle, setToggle] = useState(true);
  const [userData, setUserData] = useState([]);
  const Toggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sel4c.online/api/admin/users');
        setUserData(response.data.users);

        // Agrega un console.log para mostrar las edades de los usuarios
        console.log('Edades de los usuarios:', response.data.users.map(user => user.edad));
      } catch (error) {
        console.error('Error al obtener los datos de usuarios:', error);
      }
    };

    fetchData();
  }, []);

  // Preparar los datos para la gráfica de barras de países -- pie
  const userCountries = userData.map(user => user.pais);
  const countryCounts = userCountries.reduce((acc, country) => {
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});

  const countryLabels = Object.keys(countryCounts);
  const countryData = countryLabels.map(country => countryCounts[country]);

  // Configuración de la gráfica de barras de países
  const countryChartData = {
    labels: countryLabels,
    datasets: [
      {
        label: 'Países de Usuarios',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: countryData,
      },
    ],
  };

  // Preparar los datos para la gráfica de barras de género --dona
  const userGenders = userData.map(user => user.genero);
  const genderCounts = userGenders.reduce((acc, gender) => {
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});

  const genderLabels = Object.keys(genderCounts);
  const genderData = genderLabels.map(gender => genderCounts[gender]);

  // Configuración de la gráfica de barras de género
  const genderChartData = {
    labels: genderLabels,
    datasets: [
      {
        label: 'Género de Usuarios',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.6)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: genderData,
      },
    ],
  };

  // Preparar los datos para la gráfica de barras de institución --barra
  const userInstitutions = userData.map(user => user.institucion);
  const institutionCounts = userInstitutions.reduce((acc, institution) => {
    acc[institution] = (acc[institution] || 0) + 1;
    return acc;
  }, {});

  const institutionLabels = Object.keys(institutionCounts);
  const institutionData = institutionLabels.map(institution => institutionCounts[institution]);

  // Configuración de la gráfica de barras de institución
  const institutionChartData = {
    labels: institutionLabels,
    datasets: [
      {
        label: 'Institución de Usuarios',
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 159, 64, 0.6)',
        hoverBorderColor: 'rgba(255, 159, 64, 1)',
        data: institutionData,
      },
    ],
  };

  // Preparar los datos para la gráfica de barras de disciplina -- puntitos
  const userDisciplines = userData.map(user => user.disciplina);
  const disciplineCounts = userDisciplines.reduce((acc, discipline) => {
    acc[discipline] = (acc[discipline] || 0) + 1;
    return acc;
  }, {});

  const disciplineLabels = Object.keys(disciplineCounts);
  const disciplineData = disciplineLabels.map(discipline => disciplineCounts[discipline]);

  // Configuración de la gráfica de barras de disciplina
  const disciplineChartData = {
    labels: disciplineLabels,
    datasets: [
      {
        label: 'Disciplina de Usuarios',
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153, 102, 255, 0.6)',
        hoverBorderColor: 'rgba(153, 102, 255, 1)',
        data: disciplineData,
      },
    ],
  };

  // Preparar los datos para la gráfica de barras de edades -barra
  const userAges = userData.map(user => user.edad);
  const ageCounts = userAges.reduce((acc, age) => {
    acc[age] = (acc[age] || 0) + 1;
    return acc;
  }, {});

  const ageLabels = Object.keys(ageCounts);
  const ageData = ageLabels.map(age => ageCounts[age]);

  // Configuración de la gráfica de barras de edades
  const ageChartData = {
    labels: ageLabels,
    datasets: [
      {
        label: 'Edad de Usuarios',
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 206, 86, 0.6)',
        hoverBorderColor: 'rgba(255, 206, 86, 1)',
        data: ageData,
      },
    ],
  };

  return (
    <div className="container-fluid min-vh-100" style={{ background: '#e2e2e2' }}>
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar2 />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col" style={{ background: '#e2e2e2' }}>
          <Home Toggle={Toggle} />
          {userData.length > 0 && (
            <div className="container mt-4">
              <h2>Gráfica de Edad de Usuarios</h2>
              <Bar data={ageChartData} />
              <h2>Gráfica de Países de Usuarios</h2>
              <Bar data={countryChartData} />
              <h2>Gráfica de Género de Usuarios</h2>
              <Bar data={genderChartData} />
              <h2>Gráfica de Institución de Usuarios</h2>
              <Bar data={institutionChartData} />
              <h2>Gráfica de Disciplina de Usuarios</h2>
              <Bar data={disciplineChartData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;




