import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(BarElement, CategoryScale, LinearScale);

function BarChart({ evaluationData }) {
  if (!evaluationData || !evaluationData.resultado_evaluacion_inicial || !evaluationData.resultado_evaluacion_final) {
    return <p>Esperando datos...</p>;
  }

  const data = {
    labels: ['Competencia 1', 'Competencia 2', 'Competencia 3', 'Competencia 4', 'Competencia 5'],
    datasets: [
      {
        label: 'Evaluación Inicial',
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderColor: 'rgba(0, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
        hoverBorderColor: 'rgba(0, 99, 132, 1)',
        data: [
          evaluationData.resultado_evaluacion_inicial.competencia1 ,
          evaluationData.resultado_evaluacion_inicial.competencia2 ,
          evaluationData.resultado_evaluacion_inicial.competencia3 ,
          evaluationData.resultado_evaluacion_inicial.competencia4 ,
          evaluationData.resultado_evaluacion_inicial.competencia5 ,
          evaluationData.resultado_evaluacion_inicial.competencia6 ,
          evaluationData.resultado_evaluacion_inicial.competencia7 ,
          evaluationData.resultado_evaluacion_inicial.competencia8 ,
        ],
      },
      {
        label: 'Evaluación Final',
        backgroundColor: 'rgba(255, 215, 00)',
        borderColor: 'rgba(255, 215, 00)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 215, 00)',
        hoverBorderColor: 'rgba(255, 215, 00)',
        data: [
          evaluationData.resultado_evaluacion_final.competencia1 ,
          evaluationData.resultado_evaluacion_final.competencia2 ,
          evaluationData.resultado_evaluacion_final.competencia3 ,
          evaluationData.resultado_evaluacion_final.competencia4 ,
          evaluationData.resultado_evaluacion_final.competencia5 ,
          evaluationData.resultado_evaluacion_final.competencia6 ,
          evaluationData.resultado_evaluacion_final.competencia7 ,
          evaluationData.resultado_evaluacion_final.competencia8 ,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        ticks: {
          min: 0,
          max: 100,
          stepSize: 10,
          callback: function(value, index, values) {
            return value + '%';
          }
        }
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    layout: {
      padding: 10, // Ajusta el espaciado alrededor del gráfico
    }
  }



  return (
    <div className="home-card" style={{ width: '90%', maxWidth: '900px', height: '600px', padding: '20px', margin: '10px', backgroundColor: 'white' }}>
      <h3>Evaluaciones</h3>
      <p>
        <span style={{color: 'rgba(0, 99, 132, 1)'}}>■</span> Evaluación Inicial
        <span style={{color: 'rgba(255, 215, 00)', marginLeft: '20px'}}>■</span> Evaluación Final
      </p>
      <div style={{ backgroundColor: 'white', padding: '20px', height: '700px' }}>
  <Bar data={data} options={options} />
</div>
    </div>
  );
}

export default BarChart;
























