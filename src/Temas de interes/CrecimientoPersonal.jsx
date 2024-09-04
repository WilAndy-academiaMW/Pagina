import React from 'react'
import { Nav } from '../assets/Nav/Nav'
import { Encabezado } from '../El saber/elSaber'
import Portada from '../img/Elexplorador/portada.jpeg'
import { Parejas2 } from '../assets/Historias/paginas'

export const CrecimientoPersonal = () => {
  return (
    <>
     <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Cosas que aprendemos hablame rata todo bien'}
      ParrafoH={'te quiero enseñar mis estudio para que compartamos mas nuestra experiencia'}
    />    
      <div style={{maxWidth:'1200px',margin:'auto', display:'flex', alignItems:'center', justifyContent:'center', height:'500px'}}>
    <h1 style={ {}}>En proceso de creación</h1>
    </div> 
    </>
  )
}
