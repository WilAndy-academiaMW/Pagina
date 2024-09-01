import React, { useState, useEffect } from 'react';
import './elSaber.css'
import { Nav } from '../assets/Nav';
import Logo from '../img/Nav/perfil.png'

import { Link } from 'react-router-dom';
import HeaderIMG from '../img/elsaber/Encabezado.jpg'
export const ElSaber = () => {
  return (
    <>
     <Nav
     Logo={Logo}
     Stilo={'red'}
       Stilo2={'red'}
     />
    <Encabezado
       ImgH={HeaderIMG}
       TituloH={'Un lugar donde aprenderas muchas cosas'}
       ParrafoH={'Te invitamos a compartir junto a nosostros mucho todo el conocimiento posible que se le pueda sacar a la biblia'}
       />

    </>
  )
}


  

export const Encabezado =({ImgH,TituloH, ParrafoH})=>{
  return(
    <main className="content">
    <div className="hero" id="hero">
     <img style={{width:'100%', height:'100%'}} src={ImgH} alt="IMAGEN DE PORTADA" />
<div className="hero-content">
 <h1>{TituloH}</h1>
 <p>{ ParrafoH}</p>
 {/*<a href="#" className="btn btn-primary">Reproducir</a>
 <a href="#" className="btn">Más información</a>*/}
</div>
</div>



</main>
  )
}










