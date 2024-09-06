import React from 'react';
import '../modelo.css';
import { Link } from 'react-router-dom';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import EstherIMG from '../../img/historias/Esther/EstherONE.webp';
import { Footer } from '../../index/indices';
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import { Helmet } from 'react-helmet';
export const Esther = () => {
  return (
    <>
     <Helmet>
        <title>La Reina Ester: La valiente judía que salvó a su pueblo.</title>
        <meta name="description" content="Descubre la fascinante historia de Ester, una joven judía que se convirtió en reina de Persia y usó su posición para proteger a su pueblo de una terrible masacre. " />
      </Helmet>
      <Nav />
      <Cabeza img={EstherIMG} />
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
          h1={'Lecciones de Esther'}
          h3={'¿Quién fue Esther?'}
          p={'Esther es unos de los personajes bíblicos más mencionado, se han hecho muchas películas hablando de ella pues era un joven judía llena de mucha inocencia, y también era del agrado de todo aquel que llegara a conocerla. Esther se casó con el rey Asuero, también conocido como jerje 1, después que vemos su historia nos deja muchas enseñanzas que aquí te contaremos.'}
          />
          <ItemTEXT
         h3={'¿Por qué fue Esther elegida entre todas las vírgenes?'}
          p={'Si es verdad que la Biblia habla que Esther era una joven muy atractiva, pues se describe de esa forma, pero de seguro entre todo el imperio persa había más mujeres probablemente más hermosa que ella, si usamos nuestra imaginación y vemos que el Imperio persa era muy grande y tenían que buscar a muchas vírgenes por todo el Imperio, obviamente vírgenes muy atractivas. Pero Esther tenía algo en especial que sobre salía más que todas aquellas mujeres, algo que hizo que su belleza fuera sin igual hablamos de las cualidades y virtudes de Estherun rostro bonito lo puede tener cualquier mujer, y mucho más cuando iban a tener todo ese tratamiento de belleza y joyas que recibieron las vírgenes de aquel tiempo. Pero para ser tan agradable como lo fue Esther, no bastaba con solo tener una cara bonita, se requiere de una personalidad, y cualidades sobresalientes para ser como fue Esther'}
          />
         <Item
            img={EstherIMG}
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
            img={EstherIMG}
          />
          <AdIframe/>
          <ItemTEXT
          h3={'¿Qué se puede aprender de este acto tan valiente?'}
          p={'La valentía siempre va acompañado de hacer lo que es correcto en momentos dificultosos. El sentido de justicia Que todos debemos de tener y que no importa lo que pase, no salimos de nuestros principios. Si hacemos lo que es correcto siempre sin importar las condiciones de seguro muchas recompensas se recibe Esther logró muchas cosas, su primo fue primer ministro, y junto recibieron más autoridad y riquezas en el imperio persa, de la misma forma no duden que si hacen lo que es correcto siempre recompensas tendrán'}
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