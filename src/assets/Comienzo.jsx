import React from 'react'
import { Nav } from './Nav/Nav'
import { Articulos, Aticle, Desarrollop, Enseñanza, Footer, Intere, RedesS, Seccion } from '../index/indices'
import { Encabezado } from '../El saber/elSaber'
import hieder from '../img/elsaber/Encabezado.jpg'

export const Comienzo = () => {
  return (
    <>
     <Nav
     />
     <Encabezado
     ImgH={hieder}
     TituloH={'Cosas que aprendemos'}
     ParrafoH={'te quiero enseñar mis estudio para que compartamos mas nuestra experiencia'}
     /> 
    <Aticle/>
    
    <Enseñanza/>
   
    <RedesS/>
    <Intere/>
    <Footer/>
    </>
  )
}
