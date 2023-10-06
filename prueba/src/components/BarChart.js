import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function BarChart() {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas Mensuales',
        backgroundColor: ['rgba(75,192,192,0.4)', 'rgba(255,99,132,0.4)', 'rgba(255,206,86,0.4)', 'rgba(54,162,235,0.4)', 'rgba(153,102,255,0.4)'],
        borderColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)', 'rgba(255,206,86,1)', 'rgba(54,162,235,1)', 'rgba(153,102,255,1)'],
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(75,192,192,0.6)', 'rgba(255,99,132,0.6)', 'rgba(255,206,86,0.6)', 'rgba(54,162,235,0.6)', 'rgba(153,102,255,0.6)'],
        hoverBorderColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)', 'rgba(255,206,86,1)', 'rgba(54,162,235,1)', 'rgba(153,102,255,1)'],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        type: 'category', // Configurar la escala como 'category' para las etiquetas
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Actividades', // Aquí estableces el título
        position: 'top', // Puedes ajustar la posición: 'top', 'bottom', 'left', 'right'
      },
    },
  };

  return (
    <div className="BarChart" style={{ width: '80vw', height: '500px',backgroundColor:'WHITE' }}>
      {/* Renderizar la gráfica aquí */}
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;

















