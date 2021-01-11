/* import logo from './logo.svg'; */
/* import './App.css'; */
//import {Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './curso.jsx';

const cursos = [
  {
    title: "React desde cero",
    image: "https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png",
    price: 30
  },
  {
    title: "HTML desde cero",
    image: "https://www.caracteristicas.co/wp-content/uploads/2017/03/ciudad-3-e1565900111723.jpg",
    price: 50
  },
  {
    title: "Go desde cero",
    image: "https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg",
    price: 20
  },
]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img alt="img" className="main-banner__img" src="https://i.pinimg.com/originals/76/f2/3e/76f23ef08dc1ebabf4589ca0daa1fc14.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="/" className="button">Aceptar</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      {/* <Curso
        title="React desde cero" 
        image="https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png" 
        price="20 USD"
      /> */}
      {
        /** Por cada curso voy a devolver un elemento Curso */
        cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} /> )
      }
    </div>
  </>
) 

export default App;
