import React from 'react'
import { Nav } from '../assets/Nav/Nav'
import { Encabezado } from './elSaber'

import portada from '../img/elsaber/elSaber.jpg'
import { Parejas2 } from '../assets/Historias/paginas'

export const Saber = () => {
  return (
    <> 
    <Nav/>
    <Encabezado
      ImgH={portada}
      TituloH={'Cosas que aprendemos de algo bueno'}
      ParrafoH={'te quiero enseñar mis estudio para que compartamos mas nuestra experiencia'}
    />
    <div style={{maxWidth:'1200px',margin:'auto', display:'flex', alignItems:'center', justifyContent:'center', height:'500px'}}>
    <h1 style={ {}}>En proceso de creación</h1>
    </div> 
    </>
  )
}
