import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Popup() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleModalOpen}>
        Abrir Modal
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Título del Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contenido del modal...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Popup;
