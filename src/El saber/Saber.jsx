import React from 'react'
import { Nav } from '../assets/Nav/Nav'
import { Encabezado } from './elSaber'
import Portada from '../img/Elexplorador/portada.jpeg'
import { Parejas2 } from '../assets/Historias/paginas'

export const Saber = () => {
  return (
    <> 
    <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Cosas que aprendemos de algo bueno'}
      ParrafoH={'te quiero enseñar mis estudio para que compartamos mas nuestra experiencia'}
    />
    <Parejas2/>
    </>
  )
}
