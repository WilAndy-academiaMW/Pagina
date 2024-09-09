import React from 'react'
import { Nav } from '../Nav/Nav'
import { Encabezado } from '../../El saber/elSaber'

import Portada from '../../img/Elexplorador/portada.jpeg'
import { DesarrolloP } from './paginaE'

export const Explorador = () => {
  return (
    <>
    <Nav/>
    <Encabezado
      ImgH={Portada}
      TituloH={'Desarrollo personal'}
      ParrafoH={' Crecimiento personal a través de la sabiduría de la Biblia. Herramientas y consejos para transformar tu vida'}
    />
    <DesarrolloP/>
    </>
  )
}
