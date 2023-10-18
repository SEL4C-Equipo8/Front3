import { Row, Col, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "./components/CustomButton";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Footer from "./components/Footer";
import "./Inicio.css";
import React, { useState, useEffect } from "react";
import { loginUser } from "./models/User";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// FORMS
function Login({ onSuccessfulLogin }) {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await loginUser(email, contrasena);

    if (result.success) {
      alert("Inicio de sesión exitoso");
      setMessage("");
      onSuccessfulLogin();
    } else {
      alert("Error en el inicio de sesión");
      setMessage(result.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="mb-3" style={{ marginTop: "60px" }}>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            placeholder="Password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button
          type="submit"
          variant="primary"
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "500",
            borderRadius: "50px",
            borderColor: "black",
            width: "150px",
            height: "40px",
          }}
        >
          Iniciar Sesión
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
}
//FORMS////

//carusel fade -->efecto desvanecerdor
//////INICIO///////

//#2196F3, #FF5722

function Inicio() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.toastMessage) {
      toast.success(location.state.toastMessage);
    }
  }, [location.state]);

  return (
    <div className="App" style={{ backgroundColor: "#DCDCDC" }}>
      <ToastContainer />
      {isLoggedIn ? <Header /> : <Header2 />}
      <main>
        <Carousel>
          <Carousel.Item>
            <div
              style={{
                background: "linear-gradient(45deg, #003087, 	#DCDCDC)",
                height: "60vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Carousel.Caption
                className="text-center"
                style={{ marginBottom: "160px" }}
              >
                <h1
                  style={{
                    marginBottom: "30px",
                    fontSize: "55px",
                    fontWeight: "800",
                    WebkitTextStroke: "0.3px gray",
                    color: "white",
                  }}
                >
                  Bienvenido a SEL4C
                </h1>
                <p
                  style={{
                    margin: "20px",
                    marginBottom: "40px",
                    fontSize: "20px",
                  }}
                >
                  Social Entrepreneurship Learning 4 Complexity
                </p>
                <CustomButton
                  text="Comenzar"
                  onClick={() => {
                    /* Tu función onClick personalizada */
                  }}
                  style={{ marginBottom: "100%" }}
                />
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              style={{
                backgroundColor: "#6D8DA1",
                height: "60vh",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div style={{ flex: 1 }}>
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "55px",
                    fontWeight: "600",
                  }}
                >
                  Descarga la app
                </h1>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="celular.png"
                  alt="Imagen de la app"
                  className="img-fluidd"
                  style={{ maxWidth: "110%", maxHeight: "110%" }}
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div
          style={{
            marginTop: "50px", // Incrementado de 150px a 200px
            marginBottom: "10px", // Incrementado de 150px a 200px
            minHeight: "800px", // Incrementado de 600px a 800px
            padding: "100px 0", // Incrementado de 50px a 100px
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background:
              "linear-gradient(to right,  white,rgb(164, 164, 164)    ",
          }}
        >
          <h2
            className="title-hover-effect t-stroke t-shadow"
            style={{
              marginBottom: "70px",
              fontSize: "3.0em",
              fontWeight: "600",
              letterSpacing: "1px",
              display: "inline-block",
              textTransform: "uppercase",
            }}
          >
            Nuestras Características
          </h2>

          <Row>
            <Col style={{ margin: "40px" }}>
              <Card
                style={{ width: "22rem" }}
                className="card-fade-in-up custom-card-design"
              >
                <Card.Img variant="top" src="foto8.jpeg" />
                <Card.Body>
                  <Card.Title>Metodología SEL4C</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ margin: "40px" }}>
              <Card
                style={{ width: "22rem" }}
                className="card-fade-in-up custom-card-design"
              >
                <Card.Img variant="top" src="foto9.jpeg" />
                <Card.Body>
                  <Card.Title>Generar Valor</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ margin: "40px" }}>
              <Card
                style={{ width: "22rem" }}
                className="card-fade-in-up custom-card-design"
              >
                <Card.Img variant="top" src="foto7.jpeg" />
                <Card.Body>
                  <Card.Title>Emprendimiento Social</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div
          style={{
            marginTop: "150px",
            marginBottom: "150px",
            backgroundColor: "#789CEA",
            minHeight: "600px",
          }}
        >
          <Row>
            <Col
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundImage: 'url("/imagen.png")',
                backgroundSize: "cover",
              }}
            >
              <div style={{ marginTop: "100px", textAlign: "left" }}>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "3.0em",
                    marginTop: "50px",
                  }}
                >
                  Inicia Sesión
                </h1>
                <p style={{ fontSize: "1.6em", marginTop: "50px" }}>
                  Comienza a conocer
                  <br />
                  el desempeño de tus
                  <br />
                  estudiantes. Ingresa el
                  <br />
                  usuario y la contraseña
                  <br />
                  que se te ha designado
                  <br />
                  inicialmente.
                </p>
              </div>
            </Col>

            <Col className="text-center card-fade-in-up">
              {" "}
              {/* Agregada la clase card-fade-in-up para la animación */}
              <div
                className="position-relative"
                style={{ marginLeft: "100px" }}
              >
                <div className="blue-background"></div>
                <div className="gray-background">
                  <h1 style={{ marginTop: "60px" }}>Inicio de Sesión</h1>
                  <h2 style={{ marginTop: "0px" }}>SEL4C</h2>
                  <p style={{ marginTop: "0px" }}>
                    Social Entrepreneurship Learning 4 Complexity.
                  </p>
                  <div>
                    {/* Otro contenido de tu componente Inicio */}
                    <Login onSuccessfulLogin={() => setIsLoggedIn(true)} />
                    {/* Más contenido de tu componente Inicio */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="logo-section">
          <h2 className="section-title">Socios Formadores</h2>
          <Row className="justify-content-center">
            <Col xs={4} md={3} className="logo-container mx-3">
              <img src="logo2.png" alt="Imagen 1" className="logo-image" />
            </Col>

            <Col xs={4} md={3} className="logo-container mx-3">
              <img src="logo3.png" alt="Imagen 2" className="logo-image" />
            </Col>
          </Row>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Inicio;
