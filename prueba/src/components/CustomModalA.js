import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createActivity } from '../models/Activity';

function CustomModalA(props) {
  const { show, onHide, handleOpenModal } = props;
  console.log(show);

  const [titulo, setTitulo] = useState(''); 
  const [descripcion, setDescripcion] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const result = await createActivity(titulo, descripcion);

    if (result.success) {
      setMessage(result.message);
      // Puedes realizar otras acciones después de la creación exitosa
      // Por ejemplo, cerrar el modal o actualizar la lista de actividades
    } else {
      setMessage(result.message);
    }
  }

  return (
    <>
      <Modal size="lg" show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Actividad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Título de la actividad"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción de la actividad"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => {
            handleSubmit();
            onHide();
            handleOpenModal();
          }}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModalA;
