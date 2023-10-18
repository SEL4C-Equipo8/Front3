import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/Home';
import Sidebar2 from './components/Sidebar2';

import axios from 'axios';
import { Bar, Pie, Doughnut,Line } from 'react-chartjs-2';
import { PieController, ArcElement, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';


// Registro de los controladores y elementos necesarios
Chart.register(PieController, ArcElement, CategoryScale, Title, Tooltip, Legend);





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

  ////////////
  // Preparar los datos para la GRÁFICA DE PIE DE PAÍSES -- pie
// Preparar los datos para la GRÁFICA DE PIE DE PAÍSES -- pie
const userCountries = userData.map(user => user.pais);
const countryCounts = userCountries.reduce((acc, country) => {
  acc[country] = (acc[country] || 0) + 1;
  return acc;
}, {});

const countryLabels = Object.keys(countryCounts);
const countryData = countryLabels.map(country => countryCounts[country]);

const generateRandomBrownShade = () => {
  const r = Math.floor(Math.random() * 156) + 100; // Valores entre 100 y 255
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 100); // Valores entre 0 y 99 para mantenerlo en tonalidades de café
  return `rgba(${r}, ${g}, ${b}, 0.6)`;
};

const generateDarkerShade = (color) => {
  const rgba = color.match(/\d+/g);
  return `rgba(${Math.min(255, parseInt(rgba[0]) + 20)}, ${Math.min(255, parseInt(rgba[1]) + 20)}, ${rgba[2]}, 0.8)`;
};

const browns = countryLabels.map(() => generateRandomBrownShade());  // Genera un color café/beige para cada país
const hoverBrowns = browns.map(color => generateDarkerShade(color));

// Configuración de la GRÁFICA DE PIE DE PAÍSES -- pie
const countryPieData = {
  labels: countryLabels,
  datasets: [
    {
      label: 'Países de Usuarios',
      backgroundColor: browns,
      borderColor: 'white',
      borderWidth: 1,
      hoverBackgroundColor: hoverBrowns,
      hoverBorderColor: 'rgba(255, 99, 132, 1)',
      data: countryData,
    },
  ],
};
;
  
  
  
  
  
  

  ///////////////

  ///////////////


  // Preparar los datos para la gráfica de DONA de GÉNERO --dona
  const userGenders = userData.map(user => user.genero);
  const genderCounts = userGenders.reduce((acc, gender) => {
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});

  const genderLabels = Object.keys(genderCounts);
  const genderData = genderLabels.map(gender => genderCounts[gender]);
  const getRandomBlueShade = () => {
    const r = Math.floor(Math.random() * 50); // Mantenerlo oscuro para que siempre sea una variante de azul
    const g = Math.floor(Math.random() * 70); 
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
  };
  
  const getDarkerShade = (color) => {
    const rgba = color.match(/\d+/g);
    return `rgba(${rgba[0]}, ${rgba[1]}, ${Math.min(255, parseInt(rgba[2]) + 20)}, 0.8)`;
  };
  
  const blues = genderLabels.map(() => getRandomBlueShade());  // Genera un azul para cada género
  const hoverBlues = blues.map(color => getDarkerShade(color));

  // Configuración de la gráfica de DONA de GÉNERO

  const genderDoughnutData = {
    labels: genderLabels,
    datasets: [
      {
        data: genderData,
        backgroundColor: blues,
        hoverBackgroundColor: hoverBlues,
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  };

  ///////////////
  ///////////////

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

  ///////////////

  // Preparar los datos para la gráfica de lineas de disciplina -- lineas
  const userDisciplines = userData.map(user => user.disciplina);
  const disciplineCounts = userDisciplines.reduce((acc, discipline) => {
    acc[discipline] = (acc[discipline] || 0) + 1;
    return acc;
  }, {});

  const disciplineLabels = Object.keys(disciplineCounts);
  const disciplineData = disciplineLabels.map(discipline => disciplineCounts[discipline]);

  // Configuración de la gráfica de lineas de disciplina 
  const disciplineLineChartData = {
    labels: disciplineLabels,
    datasets: [
      {
         label: 'Disciplina de Usuarios',
      fill: true,  // Esto rellenará el área bajo la línea
      backgroundColor: 'rgba(153, 102, 255, 0.2)',  // Color de relleno más transparente
      borderColor: 'rgba(153, 102, 255, 1)',  // Color de la línea
      borderWidth: 2,  // Ancho de la línea
      hoverBackgroundColor: 'rgba(153, 102, 255, 0.4)',
      hoverBorderColor: 'rgba(153, 102, 255, 1)',
      data: disciplineData,
      pointRadius: 4,  // Tamaño de los puntos en la línea
      pointHoverRadius: 6,  // Tamaño de los puntos en la línea cuando se pasa el mouse por encima
    },
  ],
}

  ///////////////


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
            <div className="row" >
            <div className="col-md-6" >
            <div style={{ width: "400px", height: "350px",marginTop: "100px"  }}>
                <h2 style={{ fontSize: "24px" }}>Gráfica de Países de Usuarios</h2>
                  <Pie data={countryPieData}/>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{width: "500px", height: "400px",marginTop: "100px" }}>
                <h2 style={{ fontSize: "24px" ,textAlign: "center"}}>Gráfica de Disciplina de Usuarios</h2>
                  <Line data={disciplineLineChartData}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div style={{width: "400px", height: "350px",marginTop: "100px" }}>
                <h2 style={{ fontSize: "24px" }}>Gráfica de Género de Usuarios</h2>
                  <Doughnut data={genderDoughnutData}/>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{width: "500px", height: "400px",marginTop: "100px" }}>
                <h2 style={{ fontSize: "24px" ,textAlign: "center"}}>Gráfica de Institución de Usuarios</h2>
                  <Bar data={institutionChartData}/>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{width: "500px", height: "400px",marginTop: "100px" }}>
                <h2 style={{ fontSize: "24px" }}>Gráfica de Edad de Usuarios</h2>
                  <Bar data={ageChartData}/>
                </div>
              </div>
            </div>
            <div className="row">
            
              <div className="col-md-6">
                {/* Espacio vacío, pero puedes agregar otra gráfica o contenido aquí si lo deseas. */}
              </div>
            </div>
          </div>
          
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;




