import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Header.css'; // Importa el archivo CSS

function Header() {
  const brandStyles = {
    color: 'black',
    fontWeight: 'bold', // Para hacer el texto en negritas
    fontSize: '30px',   // Para aumentar el tamaño de la letra
  };

  const navbarStyles = {
    borderBottom: '4px solid gray', // Línea de color gris debajo del encabezado
    backgroundColor: 'white', // Fondo blanco
  };

  return (
    <header>
      <Navbar style={navbarStyles} expand="lg">
        <Container>
          <Navbar.Brand to="/" style={brandStyles}>SEL4C</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard" className="nav-link">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/gestion" className="nav-link">
                Gestión
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus" className="nav-link">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/rutaDeTuEnlace" className="nav-link">
                <img src="usuario2.png" alt="imgU" style={{ width: '25px', height: '25px' }} />
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;





