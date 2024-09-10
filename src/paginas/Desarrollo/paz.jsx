import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import PazIMG from '../../img/Desarrollo personal/disciplina/paz mental.webp' 

import { Helmet } from 'react-helmet';
export const Paz = () => {
  return (
    <>
     <Helmet>
        <title>Paz Mental</title>
        <meta name="description" content="¿Buscas paz mental y una mejor salud mental? Descubre cómo los principios bíblicos pueden transformar tu vida. Explora versículos clave, consejos prácticos y testimonios reales sobre cómo encontrar tranquilidad interior y superar la ansiedad y la depresión. Aprende a cultivar una relación más profunda con Dios y a encontrar el significado en tiempos difíciles. ¡Descubre el poder de la Palabra de Dios para tu bienestar emocional!" />
      </Helmet>
      <Nav />
      <Cabeza img={PazIMG} />
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
          h1={'La paz mental'}
       />
          <ItemTEXT
          h1={'¿Qué es la salud mental?'}
     p={' Podemos decir que una persona que tiene salud mental, es cuando realiza sus capacidades mentales y emocionales de forma excelente. Puede afrontar todo tipo de dificultad en la vida, trabaja de forma productiva y contribuye a su comunidad. Lo que nos da a entender es que cuando tenemos salud mental somos capaces de hacer las cosas de una manera muy tranquila, nuestro trabajo lo hacemos de forma excelente y tenemos buenas emociones, no pasamos por depresión y ansiedad ni estamos en ningún estado mal, sino que tenemos la mejor autoestima posible  '}
      />
      
      <ItemTEXT
      h1={'¿Que es la paz mental en la biblia?'}
      p={' Cuando hablamos en temas religiosos o en tema de nuestra espiritualidad, podemos dar a entender que la paz mental según la Biblia es cuando tenemos una buena relación con Dios cuando no estamos haciendo nada malo o realizando un pecado, a la vez cuando no hay principios bíblicos que nos señalen de ningún mal. Cuando una persona cumple con todo eso, entonces es una persona que tiene paz en sí misma, es una persona que tiene paz mental según la Biblia'}
      />
      
       <ItemTEXT
      h1={'¿Cómo es una persona con salud mental?'}
      h3={'Autoestima:'}
      p={'la persona con salud mental no suele afectarse y se valora a sí misma, no busca agradar a los demás simplemente por ser criticada, y tampoco juzga a nadie porque su autoestima le hace sentir muy bien y se da el valor que se merece a sí misma.'}/>
      
      <ItemTEXT
      h3={'Emociones:'}
      P={'La persona que maneja la salud mental tiene sus emociones de una forma sana, no se descontrola por cualquier cosa ni nada puedes estorbar su paz. Pues es una persona que tiene un autocontrol ante las dificultades que se afronta incluso cuando está pasando por una enfermedad crónica o está viviendo bajo una mala situación económica, independientemente del mal que esté pasando si tiene salud mental entonces las emociones no podrán afectarlos de una forma muy rígida.'}
      />
       
      <ItemTEXT
      h3={'Resiliencia:'}
      P={'Una de las cualidades más maravillosas que puede tener una persona es la resiliencia. La resiliencia es la capacidad de enfrentar las adversidades y adaptarse y superarla y para poder lograrlo tenemos que tener una paz mental muy excelente, ya que como controlamos las emociones no nos descontrolamos por cualquier cosa podemos enfrentar cualquier adversidad que no esté quitando la paz'}
      />
      <ItemTEXT
      h3={'Autoconciencia:'}
      P={'Conocen sus pensamientos, sentimientos y motivaciones, comprendiendo cómo estos influyen en su comportamiento.'}
      />
      <ItemTEXT
      h1={'Los enemigos de la salud mental'}
      h3={'¿Qué es un trastorno mental?'}
      p={'Un trastorno mental es una condición que afecta el pensamiento, el estado de ánimo o el comportamiento de una persona de manera significativa. Una persona con trastorno mental está en una condición que afecta su pensamiento, el estado de ánimo o el comportamiento de una manera muy relevante. Puede dificultar su vida y su capacidad de relacionarse con los demás, es una enfermedad mental muy trágica. Normalmente, las personas que tienen trastorno mental están en estado de ánimo muy triste, tiene irritabilidad, apatía baja autoestima o se confunden. No se concentran, tienen demasiadas cosas negativas, ya que es una enfermedad para nada querida Puede dificultarle la vida diaria y su capacidad para relacionarse con los demás.'}
      />
      <ItemTEXT
      h1={'La ansiedad: Un enemigo común de la paz mental'}
      h3={'Ansiedad'}
      p={'es una respuesta natural al estrés o al peligro.'}
      />
      <ItemTEXT
      
      h3={'Trastorno de ansiedad'}
      p={'Los trastornos de ansiedad son el problema de salud mental más común en el mundo. Las personas que tienen trastorno de ansiedad tiene mucha preocupación excesiva y persistente por diversas situaciones o eventos, incluso a veces son tus cosas tan sencillas y aun así le generan ansiedad. También tienen trastorno de pánico son personas que se asustan tienen un miedo intenso de cualquier cosa y fobia, pues son miedosos y persistente a un objeto o situación que le perturbe La Paz por lo visto la ansiedad y su trastorno de ansiedad son las peores enfermedades mentales'}
      />
      <ItemTEXT
      h3={'Estrés: '}
      p={'Y por último que hablaremos en este artículo estaremos hablando sobre el estrés, el estrés se puede considerar una carga invisible, el estrés es la respuesta natural del cuerpo a las demandas o desafíos de la vida, el estrés excesivo puede tener muchas consecuencias.'}
      />
      <ItemTEXT
      h1={'La paz mental: Un oasis de tranquilidad en medio del caos'}
      h3={'¿Qué es la paz mental?'}
      p={'la paz mental es el estado de calma interior y el bienestar caracterizado por la serenidad la persona que tiene en paz mentales tiene la capacidad de afrontar la situación con actitudes positivas y resilientes aún cuando están en medio de una situación muy crítica su tranquilidad generada por su paz mental hace que sea feliz y que afronte los problemas de una forma muy simple'}
      />
 <AdIframe/>
      <ItemTEXT
      h1={'¿Cómo la biblia puede ayudarnos a tener paz mental?'}
      h3={'Confía en Dios:'}
      p={'La Biblia enseña que Dios tiene el control total de todo y que su plan para nosotros es bueno (Romanos 8:28). Creer esto nos libera de la ansiedad y el miedo, permitiéndonos descansar en su paz.'}
      />
      <ItemTEXT
      h3={'Entrega tus cargas a Dios:'}
      p={'La Biblia nos anima a entregar nuestras preocupaciones y problemas a Dios, ya que él está dispuesto a cargar con ellas (1 Pedro 5:7). Por lo tanto cuando estemos bajo cualquier presión o dificultad simplemente entreguemos esa carga a Dios no nos preocupemos demasiado busquemos las salidas con ayuda de la oración y eso hará que tengamos paz mental'}
      /> <ItemTEXT
      h3={'Perdona a los demás:'}
      p={' los motivos que más causan todo lo contrario el aparamentar viene siendo problemas con personas el rencor y la amargura dañan la paz mental por lo tanto así como dijo Jesucristo perdonemos a las personas aún cuando somos nosotros los heridos pues eso hace que nos olvidemos de la persona o del problema y que no nos perturbe nuestra paz y conciencia(Mateo 6:14-15).'}
      />
      <ItemTEXT
      h3={'Practica el agradecimiento: '}
      p={'La gratitud nos ayuda a enfocarnos en las cosas buenas de nuestras vidas, incluso en medio de las dificultades. La Biblia nos anima a dar gracias a Dios por todo (1 Tesalonicenses 5:18).'}
      />
      <ItemTEXT
      h3={'Sé amable y compasivo: '}
      p={' Ayudar a los demás y mostrar compasión no solo beneficia a los demás, sino que también nos trae paz y alegría (Proverbios 11:25).'}
      />
       <AdIframe/>
      <ItemTEXT
      h3={'Cuida tu cuerpo y mente:'}
      p={'La Biblia nos enseña que nuestro cuerpo es el templo del Espíritu Santo (1 Corintios 6:19). Cuidar nuestra salud física y mental a través de una alimentación saludable, ejercicio y descanso adecuado contribuye a nuestro bienestar general y a la paz mental.'}
      />
      <ItemTEXT
      h3={'Evita las cosas que te dañan:'}
      p={'cuando la vi dice que limpiemosnos de contaminarnos en el cuerpo y espíritu no solo lo hace por el bienestar espiritual sino también con nuestro bienestar físico cuando dejamos de consumir o hacer cosas que la Biblia prohíbe nuestro cuerpo no recibe nada malo y por lo tanto hace que tengamos buena salud lo que significa que también tendríamos para aumentar o que estamos muy bien físicamente(1 Corintios 10:23).'}
      />
      <ItemTEXT
      h1={'En resumen'}
      p={'Para dar un resumen de todo lo que hemos hablado la paz mental con la ayuda de la Biblia podemos ser personas muy felices y tener una conciencia muy tranquila una de las felicidades más grandes del mundo he estado todo tranquilo y que nada te esté perturbando tú tranquilidad pues quien tiene una salud mental es una persona feliz porque nada lo está perturbando por lo tanto si ese no es tu caso buscar los consejos bíblicos y o lo que hemos hablado en este artículo la felicidad depende que tengamos una buena conciencia y por eso tenemos que tenerla'}
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