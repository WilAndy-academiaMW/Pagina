import React from 'react'
import { Nav } from '../assets/Nav/Nav'
import { Encabezado } from '../El saber/elSaber'
import Portada from '../img/interes/amigos.jpg'
import { Link } from 'react-router-dom'

export const Amigos = ({ img }) => {
  return (
     <>
      <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Amigos'}
      ParrafoH={'Los mejores amigos provienen de los que siguen los principios de la biblia'} /> 
    
    <div className="carousel">
      <h2>Amigos</h2>
      <div className="carousel-container">
        <Iten
         img={Portada}
          titulo={'Amistades Verdaderas'}
          parrafo={'Los secretos de una amistad bíblica'}
          historys={'/AmistadV'}
        />
      </div>
    </div>
    </>
  );
};


const Iten = ({ img, titulo, parrafo, historys }) => {
  return (
    <div className="carousel-item">
      <img style={{height:'200px'}} src={img} alt="Poster de una serie de acción, estilo cinematográfico" />
      <div className="item-info"> {/* Cambiado a className */}
        <h3>{titulo}</h3>
        <p>{parrafo}</p>
        <button className="info-button">
          <Link to={historys}>Ver más</Link>
        </button>
      </div>
    </div>
  );
};