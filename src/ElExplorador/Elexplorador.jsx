import './Elexplorador.css'
import { Nav } from '../assets/Nav'
import './slider.css'
import React from 'react'
import Perfil from '../img/Nav/perfil.png'
import Carousel from './slider'
import { Encabezado } from '../El saber/elSaber'
import HeaderIMG from '../img/elsaber/Encabezado.jpg'



export const Elexplorador = () => {
  return (
    <>
    <Nav
    Logo={Perfil}
    Stilo={'red'}
    Stilo2={'red'}
    />
     <Encabezado
       ImgH={HeaderIMG}
       TituloH={'Un lugar donde aprenderas muchas cosas'}
       ParrafoH={'Te invitamos a compartir junto a nosostros mucho todo el conocimiento posible que se le pueda sacar a la biblia'}
       />
    <Carousel/>
    <Carousel/>
    <Carousel/>
    <Carousel/>
  
    </>
  )
}




