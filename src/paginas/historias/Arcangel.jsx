import React from 'react';
import '../modelo.css';
import { Helmet } from 'react-helmet';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import arcangel from '../../img/historias/arcangel.webp'
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';

export const Arcangel = () => {
  return (
    <>
    <Helmet>
        <title>El Arcángel Miguel</title>
        <meta name="description" content="El Arcángel Miguel es una figura central en la Biblia, conocido por sus tres títulos: Arcángel, gran príncipe y jefe de los ángeles. En el libro de Daniel, se le menciona como el gran príncipe que defiende al pueblo de Dios. En la carta de Judá, se le otorga el título de Arcángel, siendo el único en recibir este título en las escrituras. En el Apocalipsis, Miguel lidera a los ejércitos celestiales en la batalla contra el dragón, identificado como el diablo y sus demonios." />
      </Helmet>
      <Nav />
      <Cabeza img={arcangel} />
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
          h1={'El Arcángel Miguel: Un Ser Supremo y Poderoso'}
         p={'Entre las historias bíblicas, uno de los personajes más destacados es el Arcángel Miguel. Este ser supremo y poderoso es mencionado en la Biblia y ha tenido una rica historia, aunque no todas las narraciones sobre él son completamente ciertas. En este artículo, exploraremos todo lo relacionado con el Arcángel Miguel, incluyendo quién es, cuál es su papel y qué rol cumple con la humanidad.'}
         />
          <ItemTEXT
         h3={'¿Quien es el arcangel Miguel'}
         p={'Para entender quién es el Arcángel Miguel, es importante señalar que la Biblia lo menciona en tres ocasiones. La primera mención se encuentra en el libro de Daniel, capítulo 12, donde el profeta menciona que Miguel, el gran príncipe, se pondrá de pie. Este título de “gran príncipe” sugiere que Miguel es un ángel muy poderoso. En un reino, hay muchos príncipes, pero solo un rey. Por lo tanto, el término “gran príncipe” indica que Miguel es el príncipe más importante del reino celestial, siendo la segunda persona más relevante después del rey que sería Dios.'}
         pp={'En la carta de Judá, se le otorga el título de Arcángel, lo que implica que es el único en recibir este título, ya que en ninguna otra parte de la Biblia se menciona la palabra “Arcángel” aplicada a otro ser. Esto nos lleva a creer que Miguel es el único Arcángel existente en los cielos.'}
        ppp={'En el libro del Apocalipsis, capítulo 12, se describe una gran guerra en el cielo, donde Miguel es el comandante de las legiones de ángeles que combaten contra el dragón y su ejército de ángeles caídos. Este dragón es identificado como el diablo y sus demonios. La descripción de Miguel como comandante de los ángeles del bando de Dios nos indica que él es el jefe de los ángeles, ostentando el título de comandante.'}
        pppp={'En resumen, el Arcángel Miguel tiene tres títulos importantes: Arcángel, jefe de los ángeles y gran príncipe. Estos títulos reflejan su posición y poder en el reino celestial.'}
        />
        
          <ItemTEXT
          h3={'El Arcángel Miguel y Sus Tres Títuloss'}
          p={'Hemos visto que el Arcángel Miguel posee tres títulos que lo convierten en una figura extremadamente poderosa. Lo sorprendente es que, a pesar de ser un ángel, se le menciona relativamente poco en la Biblia. Sin embargo, su papel es de gran importancia y tiene un diálogo bastante interesante. Es considerado la segunda persona más importante en el reino celestial.'}
         />

          <ItemTEXT
          h3={'¿Son Miguel y Jesúscristo la misma persona?'}
          p={'Para aquellos que creen en la Trinidad, donde Dios, Jesucristo y el Espíritu Santo son uno solo, Jesús no es visto como la segunda persona más importante. El concepto de la Trinidad es bastante cuestionado y no es del todo aceptado, ya que muchos principios bíblicos desmienten esta idea. Por lo tanto, se puede argumentar que la Trinidad no es completamente cierta. Algunos estudiosos de la Biblia sugieren que Jesucristo y Miguel son la misma persona. '}
          pp={'Al analizar la Biblia, vemos que Jesucristo tiene la responsabilidad de derrotar al diablo, y sabemos que Miguel es quien luchará contra el diablo en la batalla del Apocalipsis. Esto podría indicar que probablemente sean la misma persona. Otro punto que apoya esta idea es el título de “gran príncipe”. Cuando la Biblia habla del gran príncipe, se refiere a un tiempo antes de que Jesucristo llegara a la Tierra como humano. Cristo vivió aproximadamente 600 años antes de Cristo, por lo que en ese momento Jesús estaba en el cielo y probablemente desempeñaba el papel de jefe de los ángeles, es decir, Arcángel.'} 
          ppp={'Aunque muchas personas pueden no creer que sean la misma persona, la Biblia misma lo confirma. Por lo tanto, podemos entender que Miguel es la figura más poderosa después de Dios.'} 
           />
          <AdIframe/>
          
         
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
const ItemTEXT =({ h1, h3, p,pp,ppp,pppp })=>{
  return(
<>
<h1 className='HModelo'>{h1}</h1>
      <h3 className='h3Modelo'>{h3}</h3>
      <p className='pmodelo'>{p}</p>
      <p className='pmodelo'>{pp}</p>
      <p className='pmodelo'>{ppp}</p>
      <p className='pmodelo'>{pppp}</p>
      
</>
  )
}