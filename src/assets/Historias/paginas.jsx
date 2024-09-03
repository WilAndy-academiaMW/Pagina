import React from 'react'
import { Nav } from '../Nav/Nav'
import './Portada.css'
import './carrusel.css'
import Imagen from '../../img/index/reyes-israel.webp'
import Imgportada from '../../img/historias/portada.jpeg'
export const Paginas = () => {
  return (
    <>
  <header className="header">
    <img src={Imgportada} alt="" style={{width:'100%', height:'100%'}} />
  
  </header>
   </>
  )
}

export const Header =({img})=>{
  return(
    
    
    <div className="carousel">
     <h2>familia</h2>
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
        <Iten
        img={Imagen}
        titulo={'Acción Extrema'}
        parrafo={'Una serie llena de adrenalina y suspense'} 
        />
        
      </div>
      
    </div>
  
  )
}

const Iten =({img,titulo,parrafo})=>{
  return(
<div className="carousel-item">
          <img src={img} alt="Poster de una serie de acción, estilo cinematográfico" />
          <div class="item-info">
            <h3>{titulo}</h3>
            <p>{parrafo}</p>
            <button className="info-button">Ver más</button>
          </div>
        </div>
  )
}
