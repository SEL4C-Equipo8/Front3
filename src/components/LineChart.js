import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas Mensuales',
        data: [65, 59, 80, 81, 56],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        type: 'category',
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Final',
        position: 'top',
      },
    },
  };
  return (
    <div className="home-card" style={{ width: '90%', maxWidth: '600px', height: 'auto', padding: '20px', margin: '10px', backgroundColor: 'white' }}>
      <h3>Evalución Final</h3>
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
