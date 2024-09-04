import React from 'react'
import { Nav } from '../Nav/Nav'
import './carrusel.css'

import { Encabezado } from '../../El saber/elSaber'
import Portada from '../../img/historias/portada.jpeg'
import { HistoriasB } from './paginas'

export const Historia = () => {
  return (
    <> 
    <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Historias Biblicas '}
      ParrafoH={'¿Sabías que la Biblia está llena de historias increíbles? Sumérgete en ellas y descubre su mensaje.'}
    />
    <HistoriasB/>
    
   
    </>
  )
}
