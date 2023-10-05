import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CustomModalA(props) {
  const { show, onHide, handleOpenModal } = props;

  return (
    <>
      <Modal size="lg" show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Actividad 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reflexión Inicial"
                autoFocus
              />
            </Form.Group>

            {/* Campo para imágenes */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Imágenes</Form.Label>
              <Form.Control type="file" accept="image/*" multiple />
            </Form.Group>

            

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            onHide();
            handleOpenModal();
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModalA;
