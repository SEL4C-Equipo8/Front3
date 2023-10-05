import {Row,Col, Card, Carousel,Form,Image} from "react-bootstrap";
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
      setMessage(result.message);
      // Redirige o realiza otras acciones después del inicio de sesión exitoso
    } else {
      setMessage(result.message);
    }
  }


return (
  <div>
    <h2>Iniciar Sesión</h2>
    <form>
      <div className="mb-3">
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
      <button type="submit" onClick={handleLogin} className="btn btn-primary">Iniciar Sesión</button>
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
                src="https://picsum.photos/320/200"
                alt="Imagen de la app"
                className="img-fluid"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            </div>
        </div>

        </Carousel.Item>
        </Carousel>



        <div style={{ marginTop: '90px', marginBottom: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#DCDCDC' }}>
        <Row>
            <Col style={{ margin: '70px' }}>
            <Card style={{ width: '18rem', border: '12px solid #A3A4A5', borderRadius: '15px', backgroundColor: '#A3A4A5' ,maxHeight: '400px', overflowY: 'auto' }}>
                <Card.Img variant="top" src="https://picsum.photos/320/200" />
                <Card.Body>
                <Card.Title style={{ backgroundColor: '#A3A4A5', color: 'white', textAlign: 'center' }}>
                Metodología<br />
                <span style={{ display: 'block' }}>SEL4C</span>
                </Card.Title>
                </Card.Body>
            </Card>
            </Col>

            <Col style={{ margin: '70px' }}>
            <Card style={{ width: '18rem', border: '12px solid #A3A4A5', borderRadius: '15px', backgroundColor: '#A3A4A5',maxHeight: '400px', overflowY: 'auto'  }}>
                <Card.Img variant="top" src="https://picsum.photos/320/200" />
                <Card.Body>
                <Card.Title style={{ backgroundColor: '#A3A4A5', color: 'white', textAlign: 'center' }}>
                Generar Valor<br />
                <span style={{ display: 'block' }}>social</span>
                </Card.Title>
                </Card.Body>
            </Card>
            </Col>

            <Col style={{ margin: '70px' }}>
            <Card style={{ width: '18rem', border: '12px solid #A3A4A5', borderRadius: '15px', backgroundColor: '#A3A4A5',maxHeight: '400px' , overflowY: 'auto' }}>
                <Card.Img variant="top" src="https://picsum.photos/320/200" />
                <Card.Body>
                <Card.Title style={{ backgroundColor: '#A3A4A5', color: 'white', textAlign: 'center' }}><h5>Emprendimiento Social</h5></Card.Title>
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
            <h1 style={{marginTop:'60px'}}>SEL4C</h1>
            <p style={{marginTop:'40px'}}>Social Entrepreneurship Learning 4 Complexity.</p>
            <div>
            {/* Otro contenido de tu componente Inicio */}
            <Login/>
            {/* Más contenido de tu componente Inicio */}
          </div>
            <CustomButton text="Comenzar" onClick={() => {/* Tu función onClick personalizada */}} />
            </div>
        </div>
        </Col>

   
      </Row>
    </div>




        <div style={{ backgroundColor: '#DCDCDC' }}>
  <Row>
    <Col style={{ backgroundColor: '#DCDCDC' }}>
      <Card className="text-center my-5 py-4" style={{ backgroundColor: '#DCDCDC' }}>
        <Card.Body>
          <Card style={{ backgroundColor: '#BFBFBF' }}>
            <Card.Body>
              <Row>
                <Col style={{ backgroundColor: '#BFBFBF' }}>
                  <img src="https://picsum.photos/320/200" alt="Imagen 1" className="img-fluid" />
                </Col>
                <Col style={{ backgroundColor: '#BFBFBF' }}>
                  <img src="https://picsum.photos/320/200" alt="Imagen 2" className="img-fluid" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</div>

    </main>
    <Footer></Footer>
    </div>
  );
}


export default Inicio;
