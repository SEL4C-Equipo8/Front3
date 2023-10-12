import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createActivity, editActivity } from '../models/Activity';

function CustomModalA(props) {
  const { show, onClose, mode, activityToEdit } = props;

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [, setMessage] = useState('');
  const [activityId, setActivityId] = useState(null);

  useEffect(() => {
    if (mode === 'edit' && activityToEdit) {
      setTitulo(activityToEdit.titulo);
      setDescripcion(activityToEdit.descripcion);
      setActivityId(activityToEdit.id_actividad);
    } else {
      setTitulo('');
      setDescripcion('');
      setActivityId(null);
    }
  }, [mode, activityToEdit]);

  const handleCreateActivity = async () => {
    const result = await createActivity(titulo, descripcion);
  
    if (result.success) {
      alert('Se ha creado la actividad');
      window.location.reload();
      setMessage('');
      onClose();
    } else {
      alert('Se ha creado la actividad');
      window.location.reload();
      setMessage(result.message);
    }
  };
  
  const handleEditActivity = async () => {
    if (activityId) {
      const result = await editActivity(activityId, titulo, descripcion);
  
      if (result.success) {
        alert('Se ha modificado la actividad');
        window.location.reload();
        setMessage('');
        onClose();
      } else {
        alert('No se ha podido modificar la actividad');
        window.location.reload();
        setMessage(result.message);
      }
    }
  };
  

  return (
    <>
      <Modal size="lg" show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mode === 'edit' ? 'Editar Actividad' : 'Crear Actividad'}</Modal.Title>
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
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
          {mode === 'edit' ? (
            // Botón para editar una actividad existente
            <Button variant="primary" onClick={handleEditActivity}>
              Guardar Cambios
            </Button>
          ) : (
            // Botón para crear una nueva actividad
            <Button variant="primary" onClick={handleCreateActivity}>
              Crear
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModalA;




