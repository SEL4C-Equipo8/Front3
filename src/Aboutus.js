import React, { useState } from 'react';
import './Aboutus.css';  
import Header from './components/Header';
import Header2 from './components/Header2';

function Aboutus() {
  const [isLoggedIn] = useState(false);

  return (
    <div className="Aboutus"  >
      {isLoggedIn ? <Header /> : <Header2 />}
        <div className="container" style={{marginTop:'150px' }}>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus">
                        <h1 className="aboutus-title">Sobre Nosotros</h1>
                        
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="feature">
                        <div className="feature-box">
                            <div className="iconset">
                                <span className="glyphicon glyphicon-cog icon"></span>
                            </div>
                            <div className="feature-content">
                                <h2>Sobre el Emprendimiento Social</h2>
                                <p>El emprendimiento social se centra en empresas que añaden valor. Combina la producción de bienes y servicios con un propósito claramente social, enfatizando la gestión democrática, la autonomía y la transparencia en sus objetivos orientados hacia el bienestar de la sociedad.</p>
                            </div>
                        </div>
                        <div className="feature-box" style={{marginTop:'100px'}}>
                            <div className="iconset">
                                <span className="glyphicon glyphicon-cog icon"></span>
                            </div>
                            <div className="feature-content">
                                <h2>Sobre la importancia de generar valor social</h2>
                                <p>El emprendimiento social prioriza el valor social, abordando problemáticas no atendidas por el Estado y mejorando la vida de comunidades desfavorecidas. Su enfoque varía según el desarrollo del país, desde servicios básicos hasta temas ambientales y culturales. A diferencia de la innovación social, busca combinar impacto con estabilidad económica.</p>
                            </div>
                        </div>
                        <div className="feature-box" style={{marginTop:'100px'}}>
                            <div className="iconset">
                                <span className="glyphicon glyphicon-cog icon"></span>
                            </div>
                            <div className="feature-content">
                                <h2>Sobre la Metodología SEL4C</h2>
                                <p>La metodología SEL4C promueve la innovación educativa en emprendimiento social usando inteligencia artificial. Su meta es adaptar el aprendizaje a los estudiantes y formar agentes de cambio en educación superior. A diferencia de otros métodos, evalúa competencias al inicio y al final, centrándose más en el desarrollo personal que solo en proyectos. Es accesible para todos los estudiantes y se implementa en tres fases: diagnóstico, formación y evaluación. Además, hay una versión corta para intervenciones más rápidas o grupos pequeños.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Aboutus;
