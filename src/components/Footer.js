import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer class="py-5 my-0" style={{backgroundColor: '#214E7F'}}>
      <Container className="px-4">
        <Row>
          <Col>
            <div>
              <h2 class="text-white">Descarga la app</h2>
              <p class="text-white">La app solo esta disponible en iOS</p>
            </div>
          </Col>
          <Col>
            <div>
            <img src="appleDownload.png" alt="Imagen" className="img2-fluid" style={{ width: "30%" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
