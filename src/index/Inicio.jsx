import React from 'react'
import { Nav } from '../assets/Nav'
import Logo from '../img/Nav/perfil.png'
import { Articulos, Enseñanza, Footer, Header,Mente,Seccion,Aticle } from './indices'
import { Encabezado } from '../El saber/elSaber'
import HeaderIMG from '../img/elsaber/Encabezado.jpg'


export const Inicio = () => {
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
        <Aticle/>
        <Seccion/>
        <Articulos
        
        />
      {/*
     
      
       
       <Enseñanza/>
       <Mente/>*/}
       
    </>
  )
}

