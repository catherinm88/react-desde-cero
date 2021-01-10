/* import logo from './logo.svg'; */
/* import './App.css'; */
//import {Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './curso.jsx';

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
      <Curso />
      <Curso />
    </div>
  </>
) 

export default App;
