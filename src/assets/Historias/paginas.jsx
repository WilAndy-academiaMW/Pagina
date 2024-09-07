import React from 'react';
import { Nav } from '../Nav/Nav';
import { Link } from 'react-router-dom'; // Importa Link
import './Portada.css';
import './carrusel.css';
import Imagen from '../../img/index/reyes-israel.webp';
import Imgportada from '../../img/historias/portada.jpeg';
import ElihúIMG from '../../img/historias/Elihú/1.jpeg';

import EstherONE from '../../img/historias/Esther/Esther.jpeg'
import SamaritanoIMG from '../../img/historias/Elbuensamaritano/1.webp';
export const HistoriasB = ({ img }) => {
  return (
    <div className="carousel">
      <h2>Historias Biblicas</h2>
      <div className="carousel-container">
        <Iten
          img={EstherONE}
          titulo={'Esther'}
          parrafo={'La historia de una reina que salvó su pueblo'}
          historys={'/Esther'}
        />
        <Iten
          img={SamaritanoIMG}
          titulo={'El buen samaritano'}
          parrafo={'Una historia para reflexionar'}
          historys={'/Elbuensamaritano'}
        />
        <Iten
          img={ElihúIMG}
          titulo={'Elihú'}
          parrafo={'Elihú Un Joven que Defendió a Dios'}
          historys={'/Elihú'}
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
