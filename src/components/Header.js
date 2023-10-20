import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const navigate = useNavigate();
  const brandStyles = {
    color: "black",
    fontWeight: "bold",
    fontSize: "30px",
  };

  const navbarStyles = {
    borderBottom: "4px solid gray",
    backgroundColor: "white",
  };

  // Datos predeterminados
  const defaultAdminData = {
    correo: "jroberto.gc@gmail.com",
    username: "JoseRobertoGC"
  };

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [adminData, setAdminData] = useState(defaultAdminData);
  const [ setIsLoading] = useState(false); // Nuevo estado para controlar la carga
  const id_admin = localStorage.getItem("id_admin");

  const handleLogout = () => {
    axios
      .get("/api/admin/logout/")
      .then((response) => {
        if (response === 200 || 304) {
          localStorage.removeItem("id_admin");
          console.log(id_admin);
          navigate("/", { state: { toastMessage: "Sesiòn cerrada exitòsamente" } });
        } else {
          // Handle any other responses here
        }
      })
      .catch((error) => {
        console.error("Error with the request:", error);
        toast.error("An error occurred while logging out.");
      });
  };

  useEffect(() => {
    if (showProfileModal && id_admin) {
      setIsLoading(true); // Indicar que está cargando
      axios
        .get(`/api/admin/${id_admin}/`)
        .then((response) => {
          setAdminData(response.data);
          setIsLoading(false); // Indicar que ha terminado de cargar
        })
        .catch((error) => {
          console.error("Error al obtener los datos del administrador:", error);
          setIsLoading(false); // Indicar que ha terminado de cargar
        });
    }
  }, [showProfileModal, id_admin,setIsLoading]);
  

  return (
    <header>
      <Navbar style={navbarStyles} expand="lg">
        <Container>
          <Navbar.Brand to="/" style={brandStyles}>
            SEL4C
          </Navbar.Brand>
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
              <Nav.Link
                as={Link}
                to="#"
                className="nav-link"
                onClick={() => setShowProfileModal(true)}
              >
                <img
                  src="usuario2.png"
                  alt="imgU"
                  style={{ width: "25px", height: "25px" }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Añadimos el componente Modal aquí */}
      <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Perfil del Administrador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {adminData ? (
            <>
              <p>
                <strong>Correo:</strong> {adminData.correo}
              </p>
              <p>
                <strong>Username:</strong> {adminData.username}
              </p>
            </>
          ) : (
            <p>Cargando datos del perfil...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </header>
  );
}

export default Header;
