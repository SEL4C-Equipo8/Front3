import {Row,Col, Card, Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from './components/CustomButton';
import Header from './components/Header';
import Footer from './components/Footer';
import './Inicio.css';
import React, { useState } from 'react';
import { loginUser } from './models/User';

function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const result = await loginUser(email, contrasena);

    if (result.success) {
      // Si el inicio de sesión es exitoso, muestra una alerta de éxito
      //No se ha podido iniciar sesión
      alert('Inicio de sesión exitoso');
      setMessage('');
      // Puedes redirigir o realizar otras acciones después del inicio de sesión exitoso aquí
    } else {
      // Si el inicio de sesión falla, muestra una alerta de error
      alert('No se ha podido iniciar sesión, verifique su correo o contraseña.');
      setMessage(result.message); // Esto es opcional, puedes usar setMessage para mostrar el mensaje en el componente
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
          onChange={(e) => {
            setEmail(e.target.value); // Llama a setEmail en el componente Inicio
            console.log (e.target.value)
          }}
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
          onChange={(e) => {
            setContrasena(e.target.value); // Llama a setContrasena en el componente Inicio
          }}
        />
      </div>
      <button type="submit" onClick={handleLogin} variant="primary" 
      style={{
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '500',
        borderRadius: '50px',
        borderColor: 'black',
        width: '150px', // Establece el ancho predeterminado en píxeles
        height: '40px', // Establece la altura predeterminada en píxeles
      }} >Iniciar Sesión</button>
      <p>{message}</p>
    </form>
  </div>
);
}






function Inicio() {
  return (
    <div className="App" style={{ backgroundColor: '#DCDCDC' }}>
    <Header></Header>
    <main>
        <Carousel>
          <Carousel.Item>
            <div style={{ backgroundColor: '#003087', height: '50vh', width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Carousel.Caption className="text-center" style={{ marginBottom: '110px' }}>
                <h1>Bienvenido a SEL4C</h1>
                <p>Social Entrepreneurship Learning 4 Complexity</p>
                <CustomButton text="Comenzar" onClick={() => {/* Tu función onClick personalizada */}} />
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
          <div
            style={{
                backgroundColor: '#6D8DA1',
                height: '50vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
            }}
            >
            <div style={{ flex: 1 }}>
                <h1 style={{ textAlign: 'center' }}>Descarga la app</h1>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                src="celular.png"
                alt="Imagen de la app"
                className="img-fluidd"
                style={{ maxWidth: '90%', maxHeight: '90%' }}
                />
            </div>
        </div>

        </Carousel.Item>
        </Carousel>



        <div style={{ marginTop: '90px', marginBottom: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#DCDCDC' }}>
        <Row>
            <Col style={{ margin: '70px' }}>
            <Card style={{ width: '18rem', border: '12px solid #A3A4A5', borderRadius: '15px', backgroundColor: '#A3A4A5' ,maxHeight: '400px',}}>
                <Card.Img variant="top" src="foto8.jpeg" />
                <Card.Body>
                <Card.Title style={{ backgroundColor: '#A3A4A5', color: 'white', textAlign: 'center' }}>
                Metodología SEL4C
                </Card.Title>
                </Card.Body>
            </Card>
            </Col>

            <Col style={{ margin: '70px' }}>
            <Card style={{ width: '18rem', border: '12px solid #A3A4A5', borderRadius: '15px', backgroundColor: '#A3A4A5',maxHeight: '400px',  }}>
                <Card.Img variant="top" src="foto9.jpeg" />
                <Card.Body>
                <Card.Title style={{ backgroundColor: '#A3A4A5', color: 'white', textAlign: 'center' }}>
                Generar Valor
                </Card.Title>
                </Card.Body>
            </Card>
            </Col>

            <Col style={{ margin: '70px' }}>
            <Card style={{ width: '18rem', border: '12px solid #A3A4A5', borderRadius: '15px', backgroundColor: '#A3A4A5',maxHeight: '400px' , }}>
                <Card.Img variant="top" src="foto7.jpeg" />
                <Card.Body>
                <Card.Title style={{ backgroundColor: '#A3A4A5', color: 'white', textAlign: 'center' }}>
                  Emprendimiento Socia</Card.Title>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </div>



          

 <div style={{ marginTop: '150px', marginBottom: '150px', backgroundColor: '#789CEA', minHeight: '500px' }}>
      <Row>
         <Col style={{ 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' ,
            backgroundImage: 'url("/imagen.png")', // Reemplaza con la ruta de tu imagen
            backgroundSize: 'cover',}}>
          <div
            style={{
           // Ajusta la altura según tus necesidades
            marginTop: '200px',
            textAlign: 'left', // Para centrar el contenido horizontalmente en la columna
            }}>
            <h1 style={{ fontWeight: 'bold' }}>Inicia Sesión</h1>
            <p>
            Comienza a conocer el desempeño de tus estudiantes.
            </p>
            <p>
            Ingresa el usuario y la contraseña que se te ha designado inicialmente.
            </p>
          </div>
        </Col>

        
        <Col className="text-center">
        <div className="position-relative" style={{ marginLeft: '100px' }}>
            <div className="blue-background" ></div>
            <div className="gray-background">
            <h1 style={{marginTop:'60px'}}>Inicio de Sesión</h1>
            <h2 style={{marginTop:'0px'}}>SEL4C</h2>
            <p style={{marginTop:'0px'}}>Social Entrepreneurship Learning 4 Complexity.</p>
            <div>
            {/* Otro contenido de tu componente Inicio */}
            <Login/>
            {/* Más contenido de tu componente Inicio */}
          </div>
            </div>
        </div>
        </Col>

   
      </Row>
    </div>




    <div style={{ backgroundColor: '#DCDCDC' }}>
        <Row>
          <Col style={{ backgroundColor: '#DCDCDC' }}>
            <Card.Body>
                <Card.Body>
                <Row className="mb-4 justify-content-center">
          <Col style={{ backgroundColor: '#BFBFBF' }} className="mx-2">
            <div className="text-center"> {/* Envuelve la imagen en un div centrado */}
              <img src="logo2.png" alt="Imagen 1" className="img-fluid" />
            </div>
          </Col>
          
          <Col style={{ backgroundColor: '#BFBFBF' }} className="mx-4">
            <div className="text-center"> {/* Envuelve la imagen en un div centrado */}
              <img src="logo3.png" alt="Imagen 2" className="img-fluid2" />
            </div>
          </Col>
        </Row>
                </Card.Body>
            </Card.Body>
          </Col>
        </Row>
      </div>

    </main>
    <Footer></Footer>
    </div>
  );
}


export default Inicio;
