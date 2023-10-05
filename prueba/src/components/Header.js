import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function Header() {
  return (
    <header>
      <Navbar style={{ backgroundColor: 'white' }} expand="lg">
        <Container>
          <Navbar.Brand to="/" style={{ color: 'black' }}>SEL4C</Navbar.Brand> {/* Usa "to" en lugar de "href" */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={{ color: 'black' }}>Inicio Sesión</Nav.Link>
              <Nav.Link as={Link} to="/dashboard" style={{ color: 'black' }}>Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/gestion" style={{ color: 'black' }}>Gestión</Nav.Link>
              <Nav.Link as={Link} to="/aboutus" style={{ color: 'black' }}>About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;


