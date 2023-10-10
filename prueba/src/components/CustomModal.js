import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';


function CustomModal(props) {
  const { show, onHide, handleOpenModal, idActividad } = props;
  const [apiContent, setApiContent] = useState(""); 

  useEffect(() => {
    if (show) {
      // Construye la URL de la solicitud GET usando idActividad
      const apiUrl = `http://localhost:8000/api/admin/activity/7/module/create/`;
      console.log(apiUrl)
      // Realiza la solicitud HTTP GET
      fetch(apiUrl)
        .then((response) => response.text())
        .then((data) => {
          setApiContent(data);
        })
        .catch((error) => {
          console.error('Error al cargar la vista API:', error);
        });
    }
  }, [show, idActividad]);

  return (
    <>
      <Modal size="lg" show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Identificación - Act {idActividad}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" placeholder="Reflexión Inicial" autoFocus />
            </Form.Group>

            {/* Campo para imágenes */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Imágenes</Form.Label>
              <Form.Control type="file" accept="image/*" multiple />
            </Form.Group>

            {/* Campo para archivos multimedia */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tipo de archivo multimedia</Form.Label>
              <Form.Control type="text" placeholder="Reflexión Inicial" autoFocus />
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
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default CustomModal;
