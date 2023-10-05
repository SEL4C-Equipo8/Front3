import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'; // Importa Routes desde react-router-dom
import Inicio from './Inicio';
import Graficas from './Graficas';
import Gestion from './Gestion';
import Modulos from './Modulos';
import Dashboard from './Dashboard';
import BarChart from './components/BarChart';
import TableList from './components/TableList';

function App() {
  return (
    <Router>
      <Routes> {/* Utiliza Routes en lugar de Switch */}
        <Route path="/" element={<Inicio />} /> {/* Ruta predeterminada */}
        <Route path="/graficas" element= {<Graficas />} />
        <Route path="/gestion" element= {<Gestion />} />
        <Route path="/modulos" element= {<Modulos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/tablas" element={<TableList />} />


      </Routes>
    </Router>
  );
}

export default App;


