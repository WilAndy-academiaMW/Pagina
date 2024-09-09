import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import Sulamitaimg from '../../img/historias/La sulamita/1.webp'
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import DiciplinaIMG from '../../img/Desarrollo personal/disciplina/autodisciplina.webp' 

import { Helmet } from 'react-helmet';
export const Autodisciplina = () => {
  return (
    <>
     <Helmet>
        <title>Autodisciplina</title>
        <meta name="description" content="La autodiciplina te ayuda en todos los ambitos de la vida, para tener una mejor salud, un emprendieminto, una superacion personal. por eso en este articulos veremos como podremos lograr disciplina" />
      </Helmet>
      <Nav />
      <Cabeza img={DiciplinaIMG} />
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
          h1={'Autodisciplina'}
       />
          <ItemTEXT
          h3={'Autodisciplina: La clave del éxito'}
     p={'  En el camino del éxito en todos los sentido, la autodisciplina juega un papel importante, ya que ella es indispensable para superar cualquier obstáculo, para alcanzar metas, la autodisciplina es una cualidad, es una habilidad hasta también se le puede considerar un poder, que se cultiva con esfuerzo y dedicación, y sus beneficios se extiende a todos los aspecto '}
      />
      
      <ItemTEXT
      h1={'¿Qué es la autodisciplina?'}
      p={'La autodisciplina es la capacidad de controlar nuestros impulsos y comportamientos para lograr objetivos a largo plazo. Se trata de una habilidad esencial para el éxito personal y profesional, ya que nos permite:'}/>
      <ItemTEXT
      h3={'Establecer metas claras y alcanzables:'}
      p={' La autodisciplina nos ayuda a definir lo que queremos lograr y nos da la fuerza de voluntad para perseguirlo'}/>
      <ItemTEXT
      h3={'Mantener el enfoque y la motivación: '}
     p={'Mantener el enfoque y la motivación: En el camino hacia el éxito, inevitablemente enfrentaremos desafíos y momentos de desánimo. La autodisciplina nos permite mantenernos enfocados en nuestros objetivos y superar las dificultades.'}
     />
      <ItemTEXT
     h3={'Desarrollar hábitos positivos:'}
     p={'Desarrollar hábitos positivos: La autodisciplina es fundamental para crear y mantener hábitos saludables, como hacer ejercicio, comer sano y dormir lo suficiente.'}
     />
      <ItemTEXT
      h3={'Resistir las tentaciones:'}
      p={' Todos enfrentamos tentaciones que pueden alejarnos de nuestros objetivos. La autodisciplina nos da la fuerza para resistirlas y tomar decisiones acertadas.'}
      />
       <ItemTEXT
     h3={'Tomar decisiones responsables:'}
     p={'La autodisciplina nos permite evaluar las consecuencias de nuestras acciones y tomar decisiones responsables que nos acerquen a nuestros objetivos.'}
      />
      <ItemTEXT
      h1={'¿Cómo tener autodisciplina?'}
      p={'Que gran pregunta es preguntarse como tener autodisciplina que Desarrollarla no es un proceso fácil, pero con esfuerzo y dedicación es posible lograrlo. Aquí podemos ver unas series de característica que nos puede ayudar a adquirirla'}
    />
     <AdIframe/>
      <ItemTEXT
      h1={'Establece metas claras y alcanzables:'}
      p={'Define lo que quieres lograr y divídelo en metas más pequeñas y manejables. Para poder lograr tener una cualidad tan extensa hay que empezar por lo mas básico por lo tanto hay que iniciar con algo que este a nuestro alcance de una forma no tan complicada, Esto te ayudará a mantenerte motivado y enfocado.'}
      />
      <ItemTEXT
      h3={'Crea un plan de acción:'}
      p={'Una vez ya definida la meta que te propones a cumplir Determina qué pasos debes seguir para alcanzarla. Esto te dará una hoja de ruta clara y te ayudará a mantenerte organizado.'}
      />
      <ItemTEXT
      h3={'Elimina las distracciones:'}
     p={' Las distracciones son las principales enemigas de la autodisciplina por eso Identifica los factores que te distraen y elimínalos o redúcelos al mínimo. Esto te permitirá concentrarte en tus tareas y avanzar hacia tus metas.'}
     />
     <ItemTEXT
     h3={'Recompénsate por tus logros:'}
     p={'Celebra tus avances, sin importar cuán pequeños sean. Aun cuando solo sea un 10% el hecho que hayas tenido un avance demuestras que estas avanzado. Esto te ayudará a mantenerte motivado y te dará la energía para seguir adelante.'}
     />
     <ItemTEXT
     h3={'Rodéate de personas disciplinadas: '}
     p={'Pasar tiempo con personas que comparten tus valores y objetivos puede ayudarte a mantenerte motivado e inspirado.'}
     />
     <ItemTEXT
     h3={'Practica la gratitud:'}
     p={'Agradecer las cosas buenas de tu vida te ayudará a mantener una actitud positiva y enfocada.'}
     />
     <ItemTEXT
     h3={'Perdónate por tus errores:'}
     p={'Todos cometemos errores, así que si te equivocas no importa levántate de tu caída y sigue adelante'}
     />
     <ItemTEXT
     h3={'No te rindas: '}
     p={'El camino hacia el éxito no siempre es fácil. Habrá momentos en los que querrás rendirte, pero es importante perseverar y seguir luchando por tus sueños.'}
     />
     <AdIframe/>
     <ItemTEXT
     h1={'¿Hábitos para ser una persona Autodisciplina?'}
     p={'Convertirse en una persona autodisciplina da requiere un compromiso constante. Aquí te presento algunos hábitos que puedes incorporar a tu vida para desarrollar esta habilidad:'}
     />
     <ItemTEXT
     h3={'Levántate temprano:'}
     p={' Comenzar el día temprano te dará más tiempo para ser productivo y alcanzar tus metas.'}
     />
     <ItemTEXT
     h3={'Haz ejercicio regularmente:'}
     p={'La actividad física te ayudará a mejorar tu estado físico y mental, lo que te dará más energía y enfoque para alcanzar tus objetivos.'}
     />
     <ItemTEXT
     h3={'Come alimentos saludables:'}
     p={'Una dieta saludable te dará la energía que necesitas para rendir al máximo.'}
     />
     <ItemTEXT
     h3={'Duerme lo suficiente:'}
     p={'Dormir lo suficiente te ayudará a mejorar tu concentración, memoria y estado de ánimo.'}
     />
     <ItemTEXT
     h3={'Meditación:'}
     p={'La meditación te puede ayudar a reducir el estrés, la ansiedad y mejorar tu enfoque.'}
     />
     <ItemTEXT
     h3={'Lee libros inspiradores:'}
     p={'Leer sobre las historias de éxito de otras personas puede motivarte a alcanzar tus propios objetivos.'}
     />
     <ItemTEXT
     h3={'Establece límites:'}
     p={'Aprende a decir no a las cosas que te alejan de tus objetivos.'}
     />
     <ItemTEXT
     h1={'Conclusión'}
     p={'La autodisciplina es una virtud esencial para alcanzar el éxito en todos los aspectos de nuestra vida. La Biblia nos ofrece una guía valiosa para cultivarla, a través de principios como el temor a Dios, la sumisión a su Palabra y la confianza en el Espíritu Santo. Los ejemplos de personajes bíblicos como José, Daniel y Pablo nos inspiran a perseverar en nuestro camino hacia una vida disciplinada y alineada con la voluntad de Dios.'}
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