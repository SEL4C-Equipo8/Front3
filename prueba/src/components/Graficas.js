import React from 'react';
import { Row } from 'react-bootstrap';
import BarChart from './BarChart';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
function Graficas() {
  return (
    <Row className="cards justify-content-center" style={{ }}>
      <BarChart /> {/* Coloca BarChart en la columna izquierda */}
      <LineChart /> {/* Coloca LineChart en la columna derecha */}
      <DoughnutChart/>
      

    </Row>
  );
}

export default Graficas;

  
  
  
  




