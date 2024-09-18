import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import salmoIMG from '../../img/Elexplorador/salmo27.webp'

import { Helmet } from 'react-helmet';
export const Salmo27 = () => {
  return (
    <>
     <Helmet>
        <title>Salmo 27</title>
        <meta name="description" content="Veamos que aprendemos del salmos 27" />
      </Helmet>
      <Nav />
      <Cabeza img={salmoIMG} />
      <ArticleComponent />
      
    </>
  );
};

const ArticleComponent = () => {
  return (
    <div className='body'>
      <main className='.Amain'>
        <article>
         
          <ItemTEXT
          h1={'Salmo 27'}
       />
          <ItemTEXT
          h1={'Salmo 27: Un Refugio de Esperanza en Tiempos Difíciles'}
          p={'En estos tiempos tan turbulento que vivimos, donde en cada esquina de la vida existen tribulación y problemas, el salmo 27 nos da refugio con sus palabras animadoras, tal como un faro que guiaba a los barcos en la antigüedad, así es ese salmo que guías a las personas. Pero porque el salmo 27 es un salmo tan consolador, pues veamos su desenlace'}
        />
        <ItemTEXT
        h1={'Salmo 27:1 "Jehová: Luz y Salvación"'}
        p={'El salmo comienza con una declaración contundente: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?". Recordemos quién es el escritor de este salmo, el rey David. Uno de los personajes de la biblia más perseguido que su vida, llegó a esta en peligro varias veces, por ese motivo y peso de sobre cuenta para decir que Jehová es su salvación, pues le salvó la vida un montón de veces. Estas palabras inspiradas, llena de confianza y seguridad, establecen el tono para el resto del salmo. David reconoce que fue dios la fuente de su luz, el que le iluminaba el camino.'}
        
        
        />
        <AdIframe/>
        <ItemTEXT
        h3={'Enseñanza para nosotros'}
        p={'Confía en Dios como la fuente de tu luz y salvación: Cuando estés pasando por problemas recuerda que tienes a dios como tu ayuda, así que no dudes en buscarla. No temas a los desafíos que la vida te presente: No hay obstáculo que no tenga salida, por eso no le temas a ningún problema que te da la vida, sino que más bien afróntalo pidiéndole ayuda adiós.'}
        />
        <ItemTEXT
        h1={'Salmos 27 12-12 "La Petición de Dirección y Enseñanza'}
        p={'David reconoce que necesita la guía de dios, si leemos su historia en la biblia vemos que literalmente la necesitaba, por eso siempre se mantuvo en buscarla y dejaba que fuera el quién dirigiera sus caminos'}
        />
        <ItemTEXT
        h3={'Enseñanza para nosotros'}
        p={'Busca la sabiduría de Dios en todas las áreas de tu vida Cuando estés pasando por problemas recuerda que tienes a dios como tu ayuda, así que no dudes en buscarla. Sé humilde y dispuesto a aprender. Nunca sabrás todo y normalmente quienes fracasan son personas que no buscan ayuda ni están dispuestos a recibirla, por eso no seas así y busca la guía de Dios.'}
        />
        <ItemTEXT
        h1={'Salmo 27:13-14 "La Esperanza en Tiempos Difíciles'}
        p={'A pesar de las dificultades que enfrenta, el salmista mantiene una esperanza inquebrantable en Dios. Está seguro de que Dios lo librará y le permitirá ver su bondad en la tierra de los vivientes. En un mundo como este es normal estar angustiando o pasar pro problemas muy duraderos, pero el que mantiene su espera y genera gran paciencia, espera con fe la salvación de su problema'}
        />
        <ItemTEXT
        h3={'Enseñanza para nosotros'}
        p={'No pierdas la esperanza en los momentos difíciles.Recuerda que Dios está contigo y te ayudará a superar cualquier obstáculo. Mantén una actitud positiva y enfocada en la fe muéstrate siempre positivo aun cuando no haya motivo recordar que todo obstáculo tiene su salida, por eso mantén una aptitud y mente positiva'}
        />
        <ItemTEXT
        h1={'Conclusión'}
        p={'El Salmo 27 es un tesoro invaluable para aquellos que buscan encontrar esperanza y fortaleza en tiempos difíciles. Es un recordatorio constante del amor inagotable de Dios, su protección infalible y su guía infalible. Al meditar en sus palabras y ponerlas en práctica, podemos encontrar la paz interior, la valentía para enfrentar los desafíos y la seguridad de que Dios siempre estará con nosotros.'}
        />
        
      
     <AdsterraAd/>
          </article>
      </main>
      
    </div>
  );
};

const Item = ({ img }) => {
  return (
    <>
      <img className='img' src={img} alt="Hermosa playa tropical con palmeras y aguas turquesas" style={{ width: "800px", height: "300px" }} />
      
    </>
  );
};
const ItemTEXT =({ h1, h3, p })=>{
  return(
<>
<h1 className='HModelo'>{h1}</h1>
      <h3 className='h3Modelo'>{h3}</h3>
      <p className='pmodelo'>{p}</p>
      
</>
  )
}