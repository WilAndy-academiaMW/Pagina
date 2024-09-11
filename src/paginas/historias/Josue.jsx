import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import EstherIMG from '../../img/historias/Esther/EstherONE.webp';
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import { Helmet } from 'react-helmet';
import AdComponent from '../../publicidad/Baner2';


export const Josue = () => {
  return (
    <>
     <Helmet>
        <title>Josué:
        El valiente líder que conquistó la Tierra Prometida</title>
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
          h1={'Josué:El valiente líder que conquistó la Tierra Prometida'}
          h3={'¿Quién fue Josué ?'}
          p={'En el Antiguo Testamento, la figura de Josué se destaca como un líder de Israel cuya fe y valentía fueron ejemplares. Su historia está plasmada en el libro que lleva su nombre, escrito por él mismo, donde se relata un tiempo en el que los israelitas enfrentaron grandes desafíos y lograron extraordinarias victorias gracias a la mano de Dios.'} 
          />
          <ItemTEXT
         h3={'¿Cuál es el significado del nombre Josué?'}
          p={'El significado del nombre Josué es "Yahvé es salvación". Josué inició su camino como asistente de Moisés, acompañándolo en travesías por el desierto y siendo testigo de las maravillas que Dios realizaba en favor de Israel. Durante una batalla contra los amalecitas, Josué demostró su liderazgo al tomar el mando del ejército israelita y conducirlo a la victoria.'} 
          />
         <ItemTEXT
         h1={'Fe inquebrantable:'}
         p={'Una de las características más destacadas de Josué fue su firme fe en Dios, desde el momento en que recibió la misión de guiar al pueblo hacia la tierra prometida. Pero'}
         />
        <ItemTEXT
        h3={'¿Cuál es la tierra prometida? '}
        p={'Era el territorio que Dios quería darles a los israelitas, y Josué era el encargado de conducir al pueblo hacia ese lugar. Por lo tanto, era crucial que Josué tuviera una fe firme para poder atravesar todas las naciones donde tendrían que luchar. Josué confiaba plenamente en todas las instrucciones divinas que recibía, y a pesar de las dificultades y obstáculos que se presentaban, nunca dudaba del poder y la fidelidad de Dios.'}
        />
        <ItemTEXT
        h1={'Esfuérzate y sé valiente:'}
        p={'Esfuérzate y sé valiente, qué sabias palabras para Josué ya que tenía que seguir durante la conquista de la tierra prometida. Enfrentándose a ciudades fortificadas y ejércitos poderosos, donde numerosos enemigos hostiles lo desafiaban, Josué se mantuvo firme en su fe y obediencia a Dios. Su valentía y determinación lo llevaron a lograr hazañas como la caída milagrosa de Jericó, la victoria sobre los cananeos en Hai y la conquista de otras importantes ciudades. Aunque conquistar tales lugares hubiera sido complicado para cualquier ejército ordinario, la fe inquebrantable de Josué en Dios le permitió que estas ciudades cayeran en sus manos. Con la ayuda de Dios y su poder infinito manifestándose a través de un líder valiente y obediente, la victoria de los israelitas estaba asegurada.'}

        />
        <ItemTEXT
        h1={'Obediencia ejemplar:'}
        p={'Josué no solo fue un líder militar victorioso, sino también un guía espiritual y motivador para el pueblo de Israel. Su liderazgo inspiró confianza, unidad y compromiso entre los israelitas, permitiéndoles enfrentar los desafíos que se presentaban en el camino hacia la conquista de la Tierra Prometida.'}
        />
        <AdComponent/>
        <ItemTEXT
        h1={'Liderazgo inspirador'}
        p={'Josué no solo fue un líder militar victorioso, sino también un guía espiritual y motivador para el pueblo de Israel. Su liderazgo inspiró confianza, unidad y compromiso entre los israelitas, permitiéndoles enfrentar los desafíos que se presentaban en el camino hacia la conquista de la Tierra Prometida.'}

        />
        <ItemTEXT
        h1={'Lecciones'}
        p={'Cuando leemos la historia de Josué escrita en su propio libro, vemos un gran ejemplo de líder. Ya que Josué no solo fue un líder militar victorioso, sino que también fue un guía espiritual para el pueblo de Israel, su liderazgo inspiró confianza unidad y compromiso entre los israelitas y eso le permitió a muchos de ellos tener fe y enfrentar a los desafíos que se presentaban en el camino hacia la tierra prometida. Obviamente, fue gracias a Dios que José tuvo esa cualidad tan maravillosa como el liderazgo y esa virtud le trajo muchos beneficios a la nación de Israel Por lo tanto, la lección más importante que aprendemos y que nos lleva a tener las demás es la fe inquebrantable en Jehová Dios. Esta fe nos permitirá desarrollar las demás cualidades y virtudes que nos convertirán en grandes líderes.'}
        />
        <ItemTEXT/>

        <ItemTEXT/>
        <ItemTEXT/>
        <ItemTEXT/>
        <ItemTEXT/><ItemTEXT/>






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