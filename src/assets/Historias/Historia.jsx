import React from 'react'
import { Nav } from '../Nav/Nav'
import './carrusel.css'
import { Encabezado } from '../../El saber/elSaber'
import Portada from '../../img/historias/portada.jpeg'
import EstherONE from '../../img/historias/Esther/Esther.jpeg'
import { HistoriasB } from './paginas'

export const Historia = () => {
  return (
    <> 
    <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Historias Biblicas '}
      ParrafoH={'¿Sabías que la Biblia está llena de historias increíbles? Sumérgete en ellas y descubre su mensaje.'}
   color={'blue'}
   colorp={'black'}
   fondo={'text-shadow: 2px 2px 4px white;'}
   fondop={'text-shadow: 2px 2px 4px white;'}
   />
    <HistoriasB/>
    
   
    </>
  )
}
