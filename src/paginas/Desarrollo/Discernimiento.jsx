import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import DiscernimientoIMG from '../../img/Elexplorador/discernimiento.webp'
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import DiciplinaIMG from '../../img/Desarrollo personal/disciplina/autodisciplina.webp' 

import { Helmet } from 'react-helmet';
export const Discernimiento = () => {
  return (
    <>
     <Helmet>
        <title>Discernimiento</title>
        <meta name="description" content="¿Quieres tomar mejores decisiones y vivir una vida más plena? Descubre el poder del discernimiento. Aprende a desarrollar tu intuición, a identificar tus valores y a tomar decisiones alineadas con tu verdadero ser. Explora cómo el discernimiento puede transformar tus relaciones personales, tu carrera profesional y tu vida espiritual. ¡Descubre las claves para una vida más consciente y satisfactoria!" />
      </Helmet>
      <Nav />
      <Cabeza img={DiscernimientoIMG} />
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
          h1={'El discernimiento'}
       />
          <ItemTEXT
          h3={'El arte de discernir: Tu brújula en un mundo de opciones'}
     p={'Imagina a un navegante de la antigüedad que no tuviera una brújula. Viajando en su barco, seguramente iría de un rumbo a otro sin tener un destino específico en alta mar, donde no se ve nada más que agua. No sabría en qué dirección ir. Ahora, ¿qué tiene que ver este ejemplo con el discernimiento? Cuando una persona no tiene discernimiento, es como ese navegante que viaja de un lado a otro sin un fin específico. El discernimiento es un arte muy necesario para que las personas puedan tener éxito en todo lo que hagan en esta vida. Por eso, en este artículo veremos cómo puedes desarrollar el discernimiento y en qué te va a beneficiar en la vida.'}
     />
      
      <ItemTEXT
      h1={'¿Qué es el discernimiento?'}
      p={'El discernimiento es esa capacidad innata que todos poseemos para distinguir entre lo verdadero y lo falso, lo bueno y lo malo, lo esencial y lo superficial. Es como un radar interno que nos permite navegar por las complejidades de la vida, tomar decisiones acertadas y encontrar nuestro propio camino.'}
      />
      <ItemTEXT
      h3={'El discernimiento en la Biblia'}
      p={'La Biblia nos enseña que el discernimiento no es solo una habilidad intelectual, sino también un don espiritual que se cultiva a través de la oración, el estudio de las Escrituras y la comunión con otros creyentes. Al desarrollar nuestro discernimiento, nos volvemos más conscientes de las influencias que nos rodean y podemos tomar decisiones alineadas con nuestros valores más profundos.'}
      />
      <ItemTEXT
      h1={'Ámbitos en los que podemos aplicar el discernimiento:'}
      
      />  
      <ItemTEXT
      h1={'El Discernimiento en las Relaciones Personales: '}
      p={'¿Por qué es tan importante tener discernimiento en nuestras relaciones personales? Toda persona en esta vida llega a tener amistades que pueden durar para siempre, pero para eso es necesario saber que esas amistades deben tener concordancia contigo. Las personas que nos rodean pueden llenarnos de muchos beneficios, pero también pueden convertirse en un dolor de cabeza. Las personas que nos rodean nos pueden traer muchas ventajas, así como desventajas; pueden hacernos felices o infelices.'}
      />
      <ItemTEXT
      p={'Cuando logramos conseguir un buen amigo, quizás en el momento más difícil de nuestra vida, podemos superar muchos obstáculos. Pero cuando tenemos malas amistades, lo más probable es que hagamos cosas malas, y esas cosas malas pueden tener muchas consecuencias. De allí la importancia de tener discernimiento a la hora de escoger nuestras relaciones personales, para que sean nuestros amigos y compañeros.'}
      
     />
      <ItemTEXT
      h3={'¿Por qué es tan importante el discernimiento en las relaciones?'}
       p={'En un mundo lleno de conexiones superficiales, el discernimiento nos permite:'}
      />
      <ItemTEXT
      h3={'Evitar relaciones tóxicas:'}
      p={'Como ya se mencionó antes, las relaciones tóxicas pueden perjudicarnos de muchas maneras y en muchos sentidos. Sin embargo, cuando evitamos este tipo de relaciones, somos personas más felices porque no tenemos amistades que nos lleven por un mal camino. El discernimiento nos ayudará a identificar los comportamientos de este tipo de personas; nos permitirá ver quiénes son los manipuladores, los abusivos o los despectivos. De esa manera, nos será más fácil evitar a esas personas y cortar ese tipo de relación si es que la tenemos.'}
      />
      <ItemTEXT
      h3={'Fomentar relaciones saludables:'}
      p={'Pero así como el discernimiento nos ayuda a evitar relaciones tóxicas, también nos ayuda a fomentar relaciones saludables. Las relaciones saludables construyen vínculos basados en la confianza y la reciprocidad, y nos dejan muchas ventajas en el camino. Estas relaciones nos permiten compartir un vínculo de amistad sano con quienes nos rodean, lo que nos genera muchos beneficios.'}
      />
      <AdIframe/>
      <ItemTEXT
      h1={'El Discernimiento en la Vida Laboral: La Brújula para el Éxito Profesional'}
      p={'Como ya vimos, el discernimiento en las relaciones personales nos deja muchos beneficios. Ahora es el turno de hablar sobre la vida laboral. Cuando una persona tiene la capacidad de tomar decisiones conscientes en su carrera profesional, es como tener un mapa que la guía hacia oportunidades muy buenas. Esto la ayuda a establecer metas a largo plazo.'}
      />
      <ItemTEXT
      h3={'Encontrar nuestra vocación'}
      p={'Una de las cosas más difíciles para muchos adolescentes es decidir qué harán cuando sean mayores de edad. Muchas personas van a la universidad o a academias sin saber si lo que están estudiando realmente les gusta. Sin embargo, cuando tienen discernimiento, pueden distinguir entre sus gustos, lo que les lleva a encontrar su verdadera vocación. Una persona con discernimiento identifica aquello que le apasiona y en lo que es realmente buena. Por lo tanto, cuando tenemos discernimiento en el ámbito laboral, sabemos qué es lo que nos gusta y qué trabajo nos hace más felices.'}
      />
      <ItemTEXT
      h3={'Tomar decisiones acertadas: '}
      p={'Una vez que sabemos qué es lo que nos gusta, llega el momento de tomar la decisión acertada. Esto se aplica a elegir el camino profesional adecuado para nosotros y saber hacia dónde queremos ir para ejercer nuestra vocación. Muchas personas logran descubrir su vocación no necesariamente en una universidad o academia, sino por sí mismas. Aunque esto puede llevar más tiempo, cuando tienes discernimiento, sabrás qué camino seguir y en qué enfocarte. Por lo tanto, tener discernimiento te ayudará en ese camino.'}
      />
      <ItemTEXT
      h3={'Aumentar nuestra satisfacción laboral:'}
      p={'Y una vez que ya tenemos nuestra vocación y sabemos cuál es el camino que debemos tomar, es hora de aumentar nuestra satisfacción laboral. Como estamos haciendo lo que nos gusta y hemos tomado el camino acertado, es el momento de sentirnos realizados y motivados a hacer nuestro trabajo. Al hacer lo que nos gusta, seremos felices, y nuestra felicidad se reflejará en nuestro desempeño laboral y en el beneficio económico que esto nos genera. Por lo tanto, tener discernimiento nos ayuda enormemente en el ámbito laboral.'}
      />
      <ItemTEXT
      h1={'El discernimiento espiritual: El camino a la felicidad '}
      p={'El discernimiento espiritual es la capacidad de distinguir entre lo divino y lo mundano, entre las cosas de Dios y las cosas de este mundo. Es cuando escuchamos esa voz interior basada en principios y tomamos decisiones alineadas con esos mismos principios. El discernimiento espiritual es como una brújula que nos guía hacia un camino de crecimiento y conexión con lo sagrado, lo cual nos deja muchos beneficios. Nos ayuda a evitar muchos dolores de cabeza y a ser felices.'}
      />
      <ItemTEXT
      h3={'Profundizar nuestra fe:'}
      p={'Cuando fortalecemos nuestra fe en Dios, nos lleva a creer en Él, lo cual nos trae muchos beneficios. Esto nos motiva a leer la Biblia, y al hacerlo, encontramos grandes respuestas en todos los aspectos de la vida. Estas respuestas nos generan muchos beneficios, ya que muchas de ellas son guías para tener una familia feliz, ser felices individualmente, en el trabajo y en todos los sentidos. Por eso, cuando profundizamos nuestra fe y oramos a Dios, también somos más felices.'}
      />
       <ItemTEXT
      h3={'Encontrar nuestro propósito:'}
      p={'Muchas personas en este mundo se preguntan para qué vinieron al mundo y buscan su propósito. Uno de los beneficios de profundizar nuestra fe es que encontramos nuestro propósito y descubrimos el significado de nuestra vida. Cuando una persona no tiene una meta o algo por lo cual vivir, simplemente será una persona vacía e infeliz, ya que no hará nada con su vida. Vivirá, pero a la vez no. Gracias al discernimiento espiritual, logramos saber el significado de nuestras vidas, ya que la Biblia nos ayuda mucho a entender quiénes somos y lo que podemos hacer.'}
      />
       <ItemTEXT
      h3={'Tomar decisiones alineadas con nuestros valores:'}
      p={'Una de las cosas que podemos hacer gracias al discernimiento espiritual es tomar decisiones alineadas con nuestros valores. ¿Qué significa esto? Pues, al aprender cuáles son los valores de la Biblia y todos esos proverbios y salmos que nos enseñan, nos guiarán por un camino de paz y satisfacción. Al hacer todas las cosas bien y apartarnos del mal, evitamos lo que hace que muchas personas sean infelices. Por lo tanto, si tomamos decisiones alineadas con valores bíblicos, seremos felices.'}
      />
       <ItemTEXT
      h3={'Superar los desafíos: '}
      p={'Por último, el discernimiento espiritual nos ayuda a superar los desafíos. Con el discernimiento, encontramos fuerza y esperanza en momentos difíciles. En este mundo tan torcido, con principios y moral, logramos ser felices en medio de las dificultades, encontrando la salida a todos los momentos que nos causan mucha dificultad.'}
      />
       <ItemTEXT
      h1={'Conclusión'}
      p={'En conclusión, tanto el discernimiento espiritual como el discernimiento en relaciones personales y vida laboral nos ayudan a ser felices y a tener sentido y propósito en la vida. El discernimiento es una herramienta muy valiosa, una cualidad emocionante que nos ayuda a superar obstáculos. Por lo tanto, leamos la Biblia para lograr tener ese discernimiento que nos ayudará a superarnos a nosotros mismos.'}
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