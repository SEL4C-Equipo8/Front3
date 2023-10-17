import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CustomModal(props) {
  const { show, onHide, moduleData, onSave } = props;
  const [titulo, setTitulo] = useState(moduleData ? moduleData.titulo_mod : '');
  const [descripcion, setDescripcion] = useState(moduleData ? moduleData.instrucciones : '');
  const [imagen] = useState(moduleData ? moduleData.imagen_mod : null);
  const [tipoMultimedia, setTipoMultimedia] = useState(moduleData ? moduleData.tipo_multimedia : '');

  // Función para manejar los cambios en el contenido HTML de CKEditor
  const handleCKEditorChange = (event, editor) => {
    const data = editor.getData(); // Obtener el contenido HTML enriquecido
    setDescripcion(data); // Actualizar el estado con el contenido HTML
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Identificación - Act 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Reflexión Inicial"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Imágenes</Form.Label>
              <Form.Control type="file" accept="image/*" multiple />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tipo de archivo multimedia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Video / Imagen / Audio"
                value={tipoMultimedia}
                onChange={(e) => setTipoMultimedia(e.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <CKEditor
                editor={ClassicEditor}
                data={descripcion} // Inicializar CKEditor con el contenido HTML enriquecido
                onChange={handleCKEditorChange} // Manejar cambios en CKEditor
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onSave(titulo, descripcion, imagen, tipoMultimedia);
              onHide();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;