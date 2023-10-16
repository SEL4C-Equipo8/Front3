import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Header2.css'; // Importa el archivo CSS

function Header2() {
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
              <Nav.Link as={Link} to="/aboutus" className="nav-link">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header2;
