import React from 'react';
import { Nav } from '../Nav/Nav';
import { Link } from 'react-router-dom'; // Importa Link
import './Portada.css';
import './carrusel.css';
import Imagen from '../../img/index/reyes-israel.webp';
import Imgportada from '../../img/historias/portada.jpeg';

export const HistoriasB = ({ img }) => {
  return (
    <div className="carousel">
      <h2>Historias Biblicas</h2>
      <div className="carousel-container">
        <Iten
          img={Imagen}
          titulo={'Esther'}
          parrafo={'La historia de una reina que salvó su pueblo'}
          historys={'/Esther'}
        />
      </div>
    </div>
  );
};

export const Header2 = ({ img }) => {
  return (
    <div className="carousel">
      <h2>Desarrollo personal</h2>
      <div className="carousel-container">
        <Iten
          img={Imagen}
          titulo={'Acción Extrema'}
          parrafo={'Una serie llena de adrenalina y suspense'}
        />
        <Iten
          img={Imagen}
          titulo={'Acción Extrema'}
          parrafo={'Una serie llena de adrenalina y suspense'}
        />
        <Iten
          img={Imagen}
          titulo={'Acción Extrema'}
          parrafo={'Una serie llena de adrenalina y suspense'}
        />
      </div>
    </div>
  );
};

export const Parejas2 = ({ img }) => {
  return (
    <>
      <div className="carousel">
        <h2>Salmos Proverbios y esclesiaste</h2>
        <div className="carousel-container">
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'as cartas del nuevo testamento'}
          />
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'Una serie llena de adrenalina y suspense'}
          />
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'Una serie llena de adrenalina y suspense'}
          />
        </div>
      </div>
      <div className="carousel">
        <h2>Noviazgo y matrimonio</h2>
        <div className="carousel-container">
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'Una serie llena de adrenalina y suspense'}
          />
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'Una serie llena de adrenalina y suspense'}
          />
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'Una serie llena de adrenalina y suspense'}
          />
        </div>
      </div>
      <div className="carousel">
        <h2>Noviazgo y matrimonio</h2>
        <div className="carousel-container">
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'Una serie llena de adrenalina y suspense'}
          />
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'Una serie llena de adrenalina y suspense'}
          />
          <Iten
            img={Imagen}
            titulo={'Acción Extrema'}
            parrafo={'Una serie llena de adrenalina y suspense'}
          />
        </div>
      </div>
    </>
  );
};

const Iten = ({ img, titulo, parrafo, historys }) => {
  return (
    <div className="carousel-item">
      <img src={img} alt="Poster de una serie de acción, estilo cinematográfico" />
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
