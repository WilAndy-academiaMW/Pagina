import React from 'react'
import { Nav } from '../assets/Nav/Nav'
import { Encabezado } from '../El saber/elSaber'
import Portada from '../img/interes/amigos.jpg'
import { Parejas2 } from '../assets/Historias/paginas'
export const Amigos = () => {
  return (
    <>
     <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Amigos'}
      ParrafoH={'¿Qué dice la Biblia sobre la amistad? Explora versículos y historias que te inspirarán a construir conexiones más profundas.'}
    />   
    <div style={{maxWidth:'1200px',margin:'auto', display:'flex', alignItems:'center', justifyContent:'center', height:'500px'}}>
    <h1 style={ {}}>En proceso de creación</h1>
    </div> 
    </>
  )
}
