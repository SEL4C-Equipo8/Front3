import React from 'react';
import Modal from 'react-modal';
import BarChart from './BarChart';

Modal.setAppElement('#root');

function ChartModal({ isOpen, onRequestClose, evaluationData }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Gráficas" 
    >
      <h2>Gráficas</h2>
      <BarChart evaluationData={evaluationData} />
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

