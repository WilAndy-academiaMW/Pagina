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
      TituloH={'Cosas que aprendemos hablame rata todo bien'}
      ParrafoH={'te quiero enseñar mis estudio para que compartamos mas nuestra experiencia'}
    />
    <Header2/>


    </>
  )
}
