import '../Historias/carrusel.css';
import '../Historias/Portada.css';
import DiciplinaIMG from '../../img/Desarrollo personal/disciplina/autodisciplina.webp' 
import { Link } from 'react-router-dom';


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
  