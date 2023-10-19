import React from 'react';
import Modal from 'react-modal';
import BarChart from './BarChart';
import { Bar } from 'react-chartjs-2';

Modal.setAppElement('#root');

function ChartModal({ isOpen, onRequestClose, evaluationData }) {
  const progressChartData = {
    labels: ['Actividad 1', 'Actividad 2', 'Actividad 3', 'Actividad 4'],
    datasets: [
      {
        label: 'Progreso',
        data: [
          Math.floor(Math.random() * 101),
          Math.floor(Math.random() * 101),
          Math.floor(Math.random() * 101),
          Math.floor(Math.random() * 101)
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        borderWidth: 1
      }
    ]
  };

  const progressChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'PROGRESO ACTIVIDADES',
        font: {
          size: 20
        }
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Gráficas" 
    >
      <h2>Gráficas</h2>
      <BarChart evaluationData={evaluationData} />
      <Bar data={progressChartData} options={progressChartOptions} />
      <button  variant="primary" 
      style={{
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '500',
        borderRadius: '50px',
        borderColor: 'black',
        width: '120px', // Establece el ancho predeterminado en píxeles
        height: '40px', // Establece la altura predeterminada en píxeles
      }}onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
}

export default ChartModal;