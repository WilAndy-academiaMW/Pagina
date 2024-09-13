import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import joven from '../../img/Desarrollo personal/joven.jpeg' 

import { Helmet } from 'react-helmet';
export const JovenI = () => {
  return (
    <>
     <Helmet>
        <title>El joven insensato del proverbios</title>
        <meta name="description" content="El joven insesato del proverbios, capitulo 7 sa proverbios nos habla de un joven insestato que su insentazates lo llevaria a la perdicion" />
      </Helmet>
      <Nav />
      <Cabeza img={joven} />
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
          h1={'El joven insensato del proverbios'}
       />
          <ItemTEXT
          h1={'Proverbios 7'}
     p={'El proverbio 7, también conocido como "El joven insensato", es un pasaje bíblico lleno de sabiduría y advertencias para los jóvenes. En esta historia narrada por el rey Salomón, vemos como un joven insensato por su falta de sensatez, es llevado a muchas consecuencias a causa de la mujer inmoral, es un pasaje donde verás representadas a gran parte de la juventud hoy en día y que lastimosamente son conducidos a muchas consecuencias '}
         />
      
      <ItemTEXT
      h1={'Historia de Salomón'}
      p={'El rey Salomón estaba en su palacio mirando hacia la ciudad, y mientras lo hacía el mismo cuenta que estaba observando a los insensatos, y en su observación, vio a uno de ellos, en lo cual le faltaba mucha sensatez, el rey empieza A escribir diciendo. "Desde la ventana de mi casa, a través de la celosía, miré para abajo y, mientras observaba a los ingenuos, distinguí entre los jóvenes a uno al que le faltaba sensatez. Pasaba por la calle cerca de la esquina de aquella mujer y caminaba en dirección a la casa de ella con las últimas luces del día, al anochecer, al acercarse la noche y la oscuridad. Entonces vi que una mujer salía a su encuentro, vestida como una prostituta y con astucia en el corazón" (Proverbio 7:6.). '}
      />
      
       <ItemTEXT
      p={'Como vemos, el rey Salomón estaba observando a los ingenuos, habla que distinguió a un joven de entre ellos y dijo que le faltaba sensatez, ya que estaba pasando por la calle donde se encontraba una mujer, y él estaba caminando en dirección hacia ella, con las últimas luces del día, donde la mujer salió a su encuentro vestida Como una prostituta. Ya nos imaginamos la escena al decir un joven que le faltaba sensatez, da a entender que era un joven sin experiencia de vida y que no tenía discernimiento para distinguir el peligro, pues iba para la casa de una mujer a unas horas de noche, que el peligro siempre está al acecho.'}
      />
      <ItemTEXT
      P={'El rey Salomón continúa diciendo.` “Entonces vi que una mujer salía a su encuentro, vestida como una prostituta y con astucia en el corazón. Es escandalosa y desafiante. Nunca está en su casa. Ahora está en la calle, después en las plazas; se pone al acecho en cada esquina. Lo agarra y lo besa; mirándolo con descaro, le dice: “Tenía que ofrecer sacrificios de paz. Hoy cumplí mis votos. Por eso salí a tu encuentro, para buscarte, ¡y te encontré! He arreglado mi cama con colchas delicadas, lino de Egipto de vivos colores. Con mirra, áloes y canela he rociado mi cama. Ven, embriaguémonos de amor hasta el amanecer; gocemos juntos de los placeres de la pasión. Es que mi esposo no está en casa; se ha ido de viaje muy lejos. Se llevó una bolsa de dinero, y no va a volver hasta el día de la luna llena”. Ella lo descarría con gran persuasión. Lo seduce con palabras melosas. ” (Proverbio 6:17-21 ).'}
       />
     <ItemTEXT
     
     h3={'La mujer inmoral'}
     p={'El rey Salomón continúa diciendo. “Entonces vi que una mujer salía a su encuentro, vestida como una prostituta y con astucia en el corazón. Es escandalosa y desafiante. Nunca está en su casa. Ahora está en la calle, después en las plazas; se pone al acecho en cada esquina. Lo agarra y lo besa; mirándolo con descaro, le dice: “Tenía que ofrecer sacrificios de paz. Hoy cumplí mis votos. Por eso salí a tu encuentro, para buscarte, ¡y te encontré! He arreglado mi cama con colchas delicadas, lino de Egipto de vivos colores. Con mirra, áloes y canela he rociado mi cama. Ven, embriaguémonos de amor hasta el amanecer; gocemos juntos de los placeres de la pasión. Es que mi esposo no está en casa; se ha ido de viaje muy lejos. Se llevó una bolsa de dinero, y no va a volver hasta el día de la luna llena”. Ella lo descarría con gran persuasión. Lo seduce con palabras melosas. ” (Proverbio 6:17-21 ). Ya observamos que la mujer al ver al joven sale al encuentro de él, y utiliza todas las técnicas de seducción para persuadirlo. La mujer era muy seductora, pues Salomón la describe como una mujer inmoral y en vista de su vestimenta podemos darnos de cuenta que ya tenía experiencia seduciendo a los jóvenes ingenuos que se cruzaban por su camino, pero veamos que le paso al joven.'}
     />
    <ItemTEXT
    h3={'La insensatez del joven'}
    p={'De repente él va tras ella, como toro al matadero, como un tonto que va a ser castigado en el cepo, hasta que una flecha le atraviesa el hígado. Tal como el pájaro que se precipita en la trampa, él no tiene ni idea de que esto le costará la vida (proverbios 7:22-23). Así culmina las palabras de Salomón referente al joven insensato, pues su destino fue una herida al hígado, con exactitud Salomón no describió a que se refería, pero bien pudo aver sido una trampa de la mujer referente a que su esposo en realidad si estaba y lo hirió o fue una enfermedad de transmisión sexual, lo cierto es que el joven tuvo que pagar las consecuencias de su mal proceder.'}
    />
     <ItemTEXT
     h1={'5 lecciones que aprendemos del joven insensato'}
     h3={' 1. Los peligros de la tentación'}
     p={'La historia del joven insensato es un claro ejemplo del peligro de las tentaciones poderosa y engañosa. La mujer era de gran atractivo y experta en seducción, actualmente esa historia se repite ves tras vez, con muchos jóvenes que caen en esa trampa y terminan con graves consecuencias. El joven se vio atraído por la mujer seductora y no pudo resistir sus avances, por lo tanto, sufrió la consecuencia y si nosotros nos pasa algo igual y sedemos pasaremos por lo mismo. Esta lección nos recuerda que debemos estar atentos a las tentaciones que nos rodean y tener la fuerza para decir no.'}
     
     />
     <ItemTEXT
     h3={'2. La importancia de la sabiduría:'}
     p={'El joven insensato carecía de sabiduría, lo que lo hizo vulnerable a la tentación, Salomón lo describió a un toro al matadero o un pájaro que va en camino a una red. La sabiduría nos ayuda a discernir lo bueno de lo malo y a tomar decisiones correctas. Debemos buscar la sabiduría en la Biblia, en la oración y en el consejo de personas sabias, el discernimiento es un poder que nos puede ayudar a evitar muchas tragedias en la vida, por eso es muy importante que lo adquiramos'}

     />
     <ItemTEXT
     h3={'3. Las consecuencias del pecado: '}
     p={' El pecado del joven insensato tuvo graves consecuencias. La mujer con su arte de seducción lo logró llevar a su casa, donde probablemente cometió adulterio y su fruto fue terminar herido. El pecado siempre tiene consecuencias negativas, aun cuando veamos a los pecadores o las personas inmorales que no les suceda nada, si vemos las estadísticas a nivel mundial observamos a millones de personas que contrae sida y otras enfermedades, o muchos que han muerto por mujeres, por lo que debemos evitarlo a toda costa.'}

     />
     <ItemTEXT
     h3={'4. La protección de Dios:'}
     p={'Dios promete proteger a aquellos que lo buscan y obedecen sus mandamientos. Muchos creen que la biblia solo es un libro de historias antigua nada más, pero si tan solo supieran todos esos consejos que hacen que los jóvenes vallan por buen camino, Si el joven insensato hubiera seguido la sabiduría de Dios, no habría caído en la tentación y, por lo tanto, no hubiera pasado por todas esas consecuencias. Debemos confiar en Dios y buscar su protección en todo momento.'}
     />
     <ItemTEXT
     h3={'5. La importancia de la autodisciplina:'}
     p={'La autodisciplina es esencial para resistir la tentación. Cuando podemos controlar nuestros impulsos y tendencias logramos tener mucha resistencia a cualquier cosa mala, El joven insensato no tenía autodisciplina, lo que lo llevó a ceder ante sus deseos. Debemos cultivar la autodisciplina en nuestras vidas, eso nos ayudará a pensar primero en lo que vamos a hacer antes de tomar cualquier decisión para poder tomar decisiones sabias y evitar el pecado'}
     />
     
    
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