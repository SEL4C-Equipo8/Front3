import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './Aboutus.css';  
import Header from './components/Header';
import Header2 from './components/Header2';
import { loginUser } from './models/User';

// Función de inicio de sesión transferida de Inicio.js a Aboutus.js
function Login({ onSuccessfulLogin }) {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const result = await loginUser(email, contrasena);

    if (result.success) {
      alert('Inicio de sesión exitoso');
      setMessage('');
      onSuccessfulLogin();
    } else {
      alert('Error en el inicio de sesión');
      setMessage(result.message);
    }
  };

  return (
    <div>
      <form>
        <div className="mb-3" style={{marginTop: '60px'}}>
          <label htmlFor="email" className="form-label">Email address</label>
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
          <label htmlFor="contrasena" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            placeholder="Password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleLogin} variant="primary" 
        style={{
          backgroundColor: 'white',
          color: 'black',
          fontWeight: '500',
          borderRadius: '50px',
          borderColor: 'black',
          width: '150px',
          height: '40px',
        }}>Iniciar Sesión</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

function Aboutus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="Aboutus" style={{ backgroundColor: '#DFE0DA' }}>
      {isLoggedIn ? <Header /> : <Header2 />}
      
      <Container className="aboutus-container">
        <h1 className="main-title">Sobre Nosotros</h1>
        
        {/* Sobre el Emprendimiento Social */}
        <Card className="aboutus-card card-red fade-in">
          <Card.Title className="align-left">
            <div className="title-background-red">
              Sobre el Emprendimiento Social
            </div>
          </Card.Title>                       
          <Row>
            <Col md={6}>
              <Card.Text style={{marginLeft: '20px'}}>
                El emprendimiento social se centra en empresas que añaden valor.
                Combina la producción de bienes y servicios con un propósito claramente social, 
                enfatizando la gestión democrática, la autonomía y la transparencia en sus objetivos 
                orientados hacia el bienestar de la sociedad.
              </Card.Text>
            </Col>
            <Col md={6}>
              <Image className="carda-img" src="foto8.jpeg" alt="Imagen 1" fluid />
            </Col>
          </Row>
        </Card>

        {/* Sobre la importancia de generar valor social */}
        <Card className="aboutus-card card-blue fade-in">
          <Card.Title className="align-right">
            <div className="title-background-blue">
              Sobre la importancia de generar valor social
            </div>
          </Card.Title>
          <Row>
            <Col md={6}>
              <Card.Text style={{marginLeft: '20px'}}>
                La principal meta de cualquier emprendimiento social es...
                {/* Aquí continúa el resto del contenido */}
              </Card.Text>
            </Col>
            <Col md={6}>
              <Image className="carda-img" src="foto9.jpeg" alt="Imagen 2" fluid />
            </Col>
          </Row>
        </Card>

        {/* Sobre la Metodología SEL4C */}
        <Card className="aboutus-card card-green fade-in">
          <Card.Title className="align-left">
            <div className="title-background-green">
              Sobre la Metodología SEL4C
            </div>
          </Card.Title>
          <Row>
            <Col md={6}>
              <Card.Text style={{marginLeft: '20px'}}>
                Misión de la metodología SEL4C...
              </Card.Text>
            </Col>
            <Col md={6}>
              <Image className="carda-img" src="foto7.jpeg" alt="Imagen 3" fluid />
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Puedes agregar el componente Login aquí si quieres que los usuarios inicien sesión desde esta página también */}
      <Login onSuccessfulLogin={() => setIsLoggedIn(true)} />
    </div>
  );
}

export default Aboutus;
