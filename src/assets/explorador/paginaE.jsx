import '../Historias/carrusel.css';
import '../Historias/Portada.css';
import DiciplinaIMG from '../../img/Desarrollo personal/disciplina/autodisciplina.webp' 
import { Link } from 'react-router-dom';
import PazIMG from '../../img/Desarrollo personal/disciplina/paz mental.webp' 
import DiscernimientoIMG from '../../img/Elexplorador/discernimiento.webp'
import Salmo1 from '../../img/Desarrollo personal/salmos/1.png' 
import joven from '../../img/Desarrollo personal/joven.jpeg'
import Salmo27 from '../../img/Elexplorador/salmo27.webp'

export const DesarrolloP = ({ img }) => {
    return (
      <div className="carousel">
        <h2>Desarrollo Personal</h2>
        <div className="carousel-container">
          <Iten
           img={DiciplinaIMG}
            titulo={'Autodisciplina'}
            parrafo={'Autodisciplina: La clave del éxito'}
            historys={'/Autodisciplina'}
          />
           <Iten
           img={PazIMG}
            titulo={'Paz mental'}
            parrafo={'Paz mental:la felicidad que proviene de la tranquilidad'}
            historys={'/Paz'}
          />
           <Iten
           img={Salmo1}
            titulo={'Salmo 1'}
            parrafo={' la felicidad de los consejos'}
            historys={'/Salmo1'}
          />
           <Iten
           img={joven}
            titulo={'El joven insensato del proverbios'}
            parrafo={'La muerte detrás de una seducción'}
            historys={'/Joven'}
          />
          <Iten
           img={DiscernimientoIMG}
            titulo={'El Discernimiento'}
            parrafo={'"El arte de discernir: Tu brújula en un mundo de opciones"'}
            historys={'/Discernimiento'}
          />
         <Iten
           img={Salmo27}
            titulo={'Salmo 27'}
            parrafo={'Un refugio de ezperanza'}
            historys={'/Salmo27'}
          />
         
         
         
        </div>
      </div>
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
  