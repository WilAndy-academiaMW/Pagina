import React from 'react';
import '../modelo.css';
import { Helmet } from 'react-helmet';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import ElihúIMG from '../../img/historias/Elihú/1.jpeg';


import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';

export const Elihú = () => {
  return (
    <>
    <Helmet>
        <title>Elihú Un Joven que Defendió a Dios</title>
        <meta name="description" content="¿Quién fue Elihu? Descubre al enigmático personaje bíblico que, con su sabiduría y valentía, se convirtió en una voz clave en el Libro de Job. A pesar de su juventud, Elihu desafió a los sabios y defendió la justicia divina." />
      </Helmet>
      <Nav />
      <Cabeza img={ElihúIMG} />
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
          h1={'Elihú un ejemplo para los jóvenes'}
          h3={'¿Quien fue Elihú?'}
         p={'Si alguna vez llegaste a leer la historia de Job, de seguro quedaste impactado ante un hombre que sufrió mucho, pero que fue bendecido por su aguante e integridad. ¿Pero sabías que no solo Job deja enseñanza en este libro? sino que hay otro personaje que también se destaca en esta historia por su humildad y sabiduría, y que todos los jóvenes que deseamos ser mejores en la vida debemos de ser. Pues si estamos hablando de Elihú un joven que aconsejo a dios y aquí te cuento la historia'}/>
          <ItemTEXT
         h3={'La sabiduría puede venir de los jóvenes:'}
        p={'Elihú intervino en la discusión entre Job y sus tres amigos. Él defendió la justicia de dios y trató de consolar a Job, aunque también lo acusó de algunas faltas. Si lees el relato de Elihú verás como este joven es un ejemplo a seguir. Su humildad, respeto a las personas mayores, prudencia y sensatez a la hora de hablar, y muchas otras cosas que nos deja mucha sabiduría que podemos copiar a en nuestro desarrollo como persona'}
        /> 
        
          <ItemTEXT
          p={'3 amigos de Job ya maduros, que deberían de tener perspicacia y sabiduría para entender, por la edad de ellos y la experiencia de vida. Pero el relato demostró lo contrario, estos hombres solo acusaron a Job de forma injusta. Aun así, Elihú era un joven que estaba observando, como era solo un muchacho, no podía interrumpir a los 3 amigos de Job, pues ellos eran mayores, los valores y el respeto hacia las personas adultas siempre debe de existir, aun cuando una persona adulta no lo merezca todos los jóvenes deben respetar a los mayores. Esta es la primera enseñanza que extraemos de Elihú'}
         />

          <ItemTEXT
          h3={'Lección de humildad'}
          p={'En un momento, Job se llegó a considerar superior a dios. Pero Elihú lo hizo rectificar su error, diciendo que nadie es más justo que el todopoderoso. Dos lecciones sacamos de aquí. '}
          />
          <AdIframe/>
          <ItemTEXT
          h3={'El valor de la humildad:'}
          p={'nunca lo sabremos todo, y tampoco debemos considerarnos superior a alguien, y mucho menos de dios. Pero si en algún caso si fuéramos superior a una persona, ya sea que tengamos más habilidad en algo específico, el humilde no se vanagloria de eso, más bien, se hace más humilde'}
          />
          <ItemTEXT
          h3={'Ayudar a otro a reconocer un error:'}
          p={' Elihú no la pensó dos veces para decirle a Job que lo que estaba diciendo no tenía sentido y es que quien se le ocurre decir que es superior a dios. Nuestros amigos quizás tengan cosas que deben corregir, cosas que quizás le cierran las puertas en muchos sentidos, por eso debemos hacérselo saber por si nos escucha trate de cambiar de aptitud'}
          
          />
          <ItemTEXT
          h3={'La empatía'}
          p={' De seguro Job decía cosas sin sentido en vista de todo el sufrimiento por el cual estaba pasando y no es para menos, Casi todo lo había perdido, solo su vida le quedo y con ese estado seguro quiso estar muerto. Elihú fue compresivo a la hora de rectificar a Job por haberse creído más justo que dios. En un estado de emociones y sentimientos negativos es normal que una persona diga cosas sin sentido e incoherente. Pues en ese momento no está bajo su juicio sano. Por eso si somos buenos amigos pensaríamos muy bien en como no herir a una persona a la hora de hacerle una corrección'}
             />
          <ItemTEXT
          h3={'El saber escuchar y hablar:'}
          p={' Elihú fue muy sensato al esperar su turno para hablar, espero que los demás dieran sus opiniones sin interrumpirlos, y se quedó callado para hasta que le llegara su turno. Presto en cuanto escuchar y lento para hablar (santiago 1.19) Saber escuchar y esperar para hablar es una virtud que te ayuda a no caer en conflicto y ayudar a los demás, aparte que eso también hace que seas más útil para resolver problemas en todos los sentidos. Por eso cuando estemos en una situación donde haga falta esperar nuestro turno, seamos como Elihu, esperemos que los demás hablen y mientras eso pasa observemos y pensemos en como ir perfeccionando nuestras ideas'}
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