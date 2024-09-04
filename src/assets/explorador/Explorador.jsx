import React from 'react'
import { Nav } from '../Nav/Nav'
import { Encabezado } from '../../El saber/elSaber'
import { Header2 } from '../Historias/paginas'
import Portada from '../../img/Elexplorador/portada.jpeg'

export const Explorador = () => {
  return (
    <>
    <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Desarrollo personal '}
      ParrafoH={' Crecimiento personal a través de la sabiduría de la Biblia. Herramientas y consejos para transformar tu vida'}
    />
    <div style={{maxWidth:'1200px',margin:'auto', display:'flex', alignItems:'center', justifyContent:'center', height:'500px'}}>
    <h1 style={ {}}>En proceso de creación</h1>
    </div> 
    </>
  )
}
