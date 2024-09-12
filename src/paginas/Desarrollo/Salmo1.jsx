import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import salmoIMG from '../../img/Desarrollo personal/salmos/1.png'

import { Helmet } from 'react-helmet';
export const Salmo1 = () => {
  return (
    <>
     <Helmet>
        <title>Salmos 1</title>
        <meta name="description" content="¿Buscas paz mental y una mejor salud mental? Descubre cómo los principios bíblicos pueden transformar tu vida. Explora versículos clave, consejos prácticos y testimonios reales sobre cómo encontrar tranquilidad interior y superar la ansiedad y la depresión. Aprende a cultivar una relación más profunda con Dios y a encontrar el significado en tiempos difíciles. ¡Descubre el poder de la Palabra de Dios para tu bienestar emocional!" />
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
          h1={'Salmos 1 la felicidad de los consejos'}
       />
          <ItemTEXT
          h3={'Feliz el que no anda en consejo de los malvados'}
     p={'Cuando empezamos a leer el primer versículo de los salmos 1 nos encontramos con 2 palabras claves, feliz y consejos, dando a entender que un consejo puede llegar a ser un camino a la felicidad, Pero a la vez puede llegar a ser un camino a la destrucción. Por eso el salmo 1 comienza diciendo feliz el que no anda en los consejos de los malvados (salmos 1:1). Después la siguiente línea dice que no se detiene en el camino de los pecadores. Al decir el camino de los pecadores da entender hacer lo que hacen los pecadores, o sea hacer cosas malas Y la última línea del versículo dice que no se sienta en el camino de los burlones. Los burlones bien se pudiera entender que son personas que se burlan de algo, y al tratarse de un principio bíblico podemos decir que habla de los que no siguen la ley de dios, o se burlan de dicha ley. Significa que los que son selectivos con sus compañías y eligen bien sus amistades son personas felices'}
      />
      <AdIframe/>
      <ItemTEXT
      h3={'¿Por qué no son felices las personas que hacen esto?'}
      p={' Como vimos al comienzo, un consejo es un camino, un camino que nos lleva a dos direcciones, por el camino del bien o por el camino del mal. El ser humano por naturaleza siempre requiere de consejos, en vista de que cuando llegamos al mundo venimos con la mente en blanco y a medidas que vamos creciendo vamos llenando esos espacios, si llenamos los espacio con consejos malos. La lógica apunta que haremos tales cosas que solo nos perjudicaría. El camino del mal es un camino que deja muchos dolores de cabeza y si me pongo a especificar ahora mismo no me alcanzará el tiempo par decir todas las cosas malas que existen, pero si puedo decir que todas llevan por el mismo camino: deshonra, cárcel o muerte'}
      />
      
       <ItemTEXT
      
      h3={'¿Qué es lo que hacen los sabios?'}
      p={'Ya vimos hacia donde lleva el camino de los malos consejos, ahora veamos cuál es el camino que nos da los primeros consejos. La ley de Jehová, ese es el camino contrario a los consejos anteriores. Quien medita en esa ley es feliz, y eso se debe a que la biblia está llena de consejos que nos lleva por el buen camino, los salmos como tal es una riqueza de sabiduría muy grande, y quienes siguen esos consejos son felices. Por ejemplo, el no sentarse ni andar con burlones, ósea el tener buenas amistades. Las buenas amistades nos pueden incitar hacer cosas buenas, de provecho, y edificantes. Sus recreaciones y modo de actuar es ejemplar a la vez, son diversiones sanas que hacen feliz. Compartir entre amigo que se quieren de verdad, genera un sentimiento de alegría que no se tiene con personas opuestas. Por cosas como elegir bien las amistades, la biblia es el mejor libro para ser feliz, porque a pesar de que es muy antiguo, sus escrituras nunca han de ser inservible'}
      />
      
      <ItemTEXT
      h3={'Todo lo que haga tendrá exito'}
      P={'El versículo 3 es una maravilla, ya que describe como será la persona que sigue estos consejos. Lo simboliza como un árbol plantado junto a corrientes de aguas o riachuelo. Todo árbol que las raíces están bajo agua siempre mantiene sus hojas verdes y son árboles fuertes, pues el agua que los alimenta lo tienen siempre. De la misma manera puede ser una persona que sigue los consejos de la biblia, será una muralla todo el tiempo fuerte como el roble y nada lo derribara, será un árbol que de muchos frutos, pues su reputación tan excelente que se crea hace que todos hablen bien de él, y todo lo que llegue hacer tendrá éxito'}
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