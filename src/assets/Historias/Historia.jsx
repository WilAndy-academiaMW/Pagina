import React from 'react'
import { Nav } from '../Nav/Nav'
import './carrusel.css'
import { Header } from './paginas'
import { Encabezado } from '../../El saber/elSaber'
import Portada from '../../img/Elexplorador/Portada.jpeg'

export const Historia = () => {
  return (
    <> 
    <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Cosas que aprendemos hablame rata todo bien'}
      ParrafoH={'te quiero enseñar mis estudio para que compartamos mas nuestra experiencia'}
    />
    <Header
    />
    
   
    </>
  )
}
