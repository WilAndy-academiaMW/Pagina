import React from 'react'
import { Nav } from './Nav/Nav'
import { Aticle,  Enseñanza, Footer, Intere, Mente, RedesS,} from '../index/indices'
import { Encabezado } from '../El saber/elSaber'
import hieder from '../img/elsaber/Encabezado.jpg'

export const Comienzo = () => {
  return (
    <>
     <Nav
     />
     <Encabezado
     ImgH={hieder}
     TituloH={'Bienvenido al Hombre y Dios'}
     ParrafoH={'Descubre la Palabra de Dios de una manera nueva. Sumérgete en estudios bíblicos y encuentra respuestas a tus preguntas.'}
     /> 
    <Aticle/>
    
    <Enseñanza/>
    <Mente/>
    <RedesS/>
    <Intere/>
    <Footer/>
    </>
  )
}
