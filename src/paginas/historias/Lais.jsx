import React from 'react';
import '../modelo.css';
import { Link } from 'react-router-dom';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import LaisIMG from '../../img/historias/lais/1.png'
import LaisIMG1 from '../../img/historias/lais/2.jpeg'
import LaisIMG2 from '../../img/historias/lais/3.jpeg'
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';

import { Helmet } from 'react-helmet';
export const Lais = () => {
  return (
    <>
     <Helmet>
        <title>No seamos Como los ciudadanos de Lais</title>
        <meta name="description" content="Descubre la fascinante historia de Ester, una joven judía que se convirtió en reina de Persia y usó su posición para proteger a su pueblo de una terrible masacre. " />
      </Helmet>
      <Nav />
      <Cabeza img={LaisIMG} />
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
          h1={'No seamos Como los ciudadanos de Lais'}
        p={'En la biblia hay muchísimas historias, y aunque muchos piensen que son solo eso, historias, no se dan de cuenta de lo enriquecido de sabiduría que traen ellas, en este caso nos iremos a la antigua ciudad de Lais una ciudad que fue destruida porque sus habitantes fueron muy Lais'}
        />
          <ItemTEXT
       h3={'¿Qué es una persona laiz?'}
       p={'¿Qué es una persona laiz? Pues es una persona que abusa de la tranquilidad, por así decirlo, vive sin preocuparse en el día a día y no le importa nada que robe su tranquilidad .Pero será que está bien, esté estilo de vida, pues claro que no. la prudencia, sagacidad, perspicacia son cualidades que van todo lo contrario a lo laiz. Y son cualidades que acompañan al desarrollo personal. Pero para poder entender bien el relato vamos a ver la historia para que podamos comprender por qué no podemos ser laiz en la vida'}
       />
       <ItemTEXT
       h3={'¿Una ciudad que no se preocupaba por nada?'}
       p={' Es normal que en una ciudad haya gente que no le importé nada, pero que la ciudad entera sea así, eso si es grave. Pues eso era la ciudad de lais registrada en el libro de los jueces 18. La ciudad estaba a lo aislado, no dependía de nadie, no tenían trato con ninguna otra ciudad, ni se preocupaban por nada, lo más probable es que ni murallas tuvieran para protegerse de un invasor. Pues ellos eran laiz. Quizás ellos pensaban que vivir la vida de esta manera era lo mejor, pero nunca se imaginaron que la muerte la tenían a la vuelta de la esquina. Los danitas estaban en busca de un lugar donde quedarse, pues ellos no habían recibido herencia todavía de la tierra prometida entonces cuando se enteraron de esta Ciudad se pusieron de acuerdo para conquistarla. 600 hombres armados para la guerra subieron, llegaron a la ciudad y fueron matando a espadazos a los habitantes y destruyeron la ciudad. '}

       />
         <Item
            img={LaisIMG1}
          />
          <ItemTEXT
          h3={'¿Qué lección le puede dejar esto a las mujeres de hoy en día?'}
          p={'Ya deben de saber que la belleza interior es la mejor belleza que se puede tener, claro no es que esté mal ser atractiva de físico, pero los que son hermosos por dentro llegan a ser mejor persona y eso genera beneficios, así mismo son muchos los que son más beneficiados por ser humilde y sencillo. Esther, gracias a eso fue que en realidad se casó con el rey asuero, claro tampoco queremos decir que vamos a ser así solo por conquistar a un hombre, pero si ponemos las cosas en contexto, cuantas puertas no sé abren al que tiene mejor personalidad, en todas partes donde llega es una persona que cae bien y le abren las puertas, ya sea para un trabajo, servicio o beneficios en general'}
          />
          <ItemTEXT
          h3={'La valentía de Esther'}
          p={'Y si pensaste que las lecciones que se acaban de Esther solo era su personalidad, te equivocaste, pues Esther también es recordada por ser una mujer muy valiente Como recordamos el pueblo de Esther que era la nación de Israel, corría con el peligro de ser aniquilado, ya que el malvado Hamán estaba planeando un ataque para matarlos solo porque les caía mal, un hombre muy despiadado. Esther al enterarse por su primo tenía que hacer algo al respecto, pues por ser judía ella también tendría que morir. Pero para que Esther pudiera hacer algo, tenía que hablar con el rey. Quizás suene tan fácil. Pero digamos que su matrimonio no es como los matrimonio que estamos acostumbrados a ver, Asuero tenía muchas esposas, pues esa era la cultura, y Esther no había sido llamada por un mes, ósea muchos días sin ver al rey, pero como tal ese tampoco era el problema, sino que ir a ver el rey sin ser invitado era sinónimo de muerte, al menos que el rey al ver levantara su cetro, que % de posibilidades de vida tan baja implicaba presentarse al rey Asuero, pero Esther eso no le importo y puso su vida a riesgo con tal de salvar a su pueblo y a su dios Esther, fue hacia donde el rey Asuero se presentó sin ser invitada, y el rey levantó su cetro, demostrando así que aprobaba su visita, Esther hizo un banquete donde puso al descubierto todos los planes malos de Haman, y gracias a su valentía, se salvó la nación de Israel'}
          />
          <Item
            img={LaisIMG2}
          />
          <AdIframe/>
          <ItemTEXT
          h3={'¿Qué se puede aprender de este acto tan valiente?'}
          p={'¿Cuáles son las lecciones que se traen de este relato? Cómo vemos a simple vista, las personas laiz no tienen un buen futuro. Claro no queremos decir que descansar o vivir sin preocupaciones sea malo, al contrario es un placer después de haber trabajado tanto. Pero cuando nuestra vida es así en todos los sentidos que no nos preocupa por trabajar por nuestro futuro allí si está lo malo. Al decir preocuparnos nos referimos a nuestro proyecto de vida a nuestras metas, Que toda persona debe tener. También se refiere a prevenir tragedia que pueda pasarnos, por ejemplo si la ciudad de lais fuera tenido murallas, quizás la historia fuera otra, Pero cómo no se preocuparon no la pusieron. Esto nos enseña a ver los problemas que puedan surgir en nuestro ámbito ya sea de vida o trabajo y buscar las soluciones de esa forma no pasamos por graves consecuencias. La sagacidad es una virtud muy poderosa que nos ayuda a evitar problemas, pero si somos laiz nos pasa todo lo contrario En conclusión, nunca seamos lais en la vida, al contrario, seamos perspicaz en todo momento y las bendiciones nos caerá del cielo.'}
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