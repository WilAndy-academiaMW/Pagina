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
      ParrafoH={'nos dedicamos a explorar y compartir los principios fundamentales que fortalecen las relaciones humanas desde una perspectiva bíblica. Aquí encontrarás una amplia variedad de artículos que abordan temas como la amistad verdadera, el amor desinteresado, la fidelidad, la honestidad y el perdón. Nuestro objetivo es proporcionar contenido enriquecedor que te ayude a cultivar relaciones más auténticas y satisfactorias. Descubre cómo los valores bíblicos pueden transformar tus amistades y llevarlas a un nivel más profundo y significativo. Desde consejos prácticos para mejorar la comunicación y la confianza, hasta reflexiones sobre la importancia del perdón y la honestidad, nuestros artículos están diseñados para inspirarte y guiarte en tu camino hacia relaciones más fuertes y duraderas.'}
    /> 
    
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