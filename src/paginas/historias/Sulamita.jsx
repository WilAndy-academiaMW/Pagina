import React from 'react';
import '../modelo.css';
import { Link } from 'react-router-dom';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import Sulamitaimg from '../../img/historias/La sulamita/1.webp'
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';

import { Helmet } from 'react-helmet';
export const Sulamita = () => {
  return (
    <>
     <Helmet>
        <title>la sulamita del cantar de los cantares</title>
        <meta name="description" content="La Sulamita: Un símbolo de belleza y amor eterno en el Cantar de los Cantares. Descubre el significado detrás de esta enigmática figura bíblica." />
      </Helmet>
      <Nav />
      <Cabeza img={Sulamitaimg} />
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
          h1={'la sulamita del cantar de los cantares'}
       />
          <ItemTEXT
          h3={'la sulamita en la biblia'}
     p={' La Sulamita es la protagonista femenina del Cantar de los Cantares, una joven de extremada belleza y muy apasionada, con una inocencia y gran atractivo, ella fue la inspiración de un libro poético del Antiguo Testamento que celebra el amor apasionado y fiel entre dos jóvenes. Es conocida por su rechazar los lujos y la vanidad que le ofrecía el rey Salomón y también por su devoción y amor hacia su amado pastor'}
     />
      <ItemTEXT
      h1={'historia de la sulamita'}
      />
      <ItemTEXT
      h3={'El cantar de los cantares'}
      p={'El cantar de los cantares es el libro que encierra La historia de la Sulamita, fue escrita por el rey Salomón, En ese libro se desarrolla en un contexto de corte real. En los viñedos de Sula, entre aromas de mirra y jazmín, se encontraba una llamativa y cautivadora Joven, una hermosa Sulamita florecía en la viña, su belleza era incomparable y única, pues era demasiada hermosa. Su piel, morena como el ámbar, brillaba bajo el sol de Galilea, y sus ojos, oscuros como el ébano, reflejaban la sabiduría y la dulzura de su alma.'}
      />
      <ItemTEXT
      h3={'La Sulamita y el pastor '}
      p={'Desde temprana edad, la Sulamita había entregado su corazón a un pastor humilde, un hombre sencillo y trabajador que cuidaba de su rebaño con amor y dedicación. En el cantar de los cantares vemos como la Sulamita susurra de amor por el joven pastor, pues le dedica muchas expresiones de amor a este humilde muchacho, Su amor era puro y sincero, como la fragancia de las rosas que adornaban su jardín.'}
      />
      <ItemTEXT
      h3={'La Sulamita y Salomón'}
      p={' La belleza de la Sulamita era tanto que no pasaba desapercibida. Su fama se extendió por toda la región, llegando incluso a los oídos del rey Salomón, Salomón era conocido por su opulencia y su búsqueda constante de placeres y como era de esperar nació en él un interés por tal cautivadora dama. Intrigado por las historias que contaban sobre ella, el rey decidió conocerla en persona, por lo tanto, mando a buscarla.'}
      />
      <ItemTEXT
      h3={'La invitación a Jerusalén'}
      p={' Salomón invitó a la Sulamita a visitar su corte en Jerusalén. La joven, con recelo pero también con cierta fascinación, ya que iba a ir a Jerusalén donde conocería el templo, aceptó la invitación.'}
      />
      <ItemTEXT
      h3={'En el esplendor de la corte real Al llegar a Jerusalén'}
      p={' la Sulamita quedó deslumbrada por la opulencia que la rodeaba. Quedo maravillada por las construcciones y todo lo linda que era la ciudad había Palacios de mármol, jardines exuberantes y el maravilloso templo. De seguro quedo muy emocionada por tanta belleza alrededor de ella, Sin embargo, en su corazón, la joven solo anhelaba regresar a su hogar y a su amado pastor.'}
      />
       <ItemTEXT
       h3={'El regreso a Sula:'}
       p={' Finalmente, comprendiendo que la Sulamita no podía ser comprada con oro ni riquezas, Salomón la dejó libre para regresar a su hogar. La joven maravillada por volver con su pastor a su amada tierra. La Sulamita no le importo las riquezas ni el ser una reina, simplemente su sencillez y amor por su pastor valió más para ella'}
      
      />
       <AdIframe/>
      <ItemTEXT
      h1={'Enseñanza de la mujer sulamita en la biblia'}
      h3={'1 El amor verdadero es incondicional: '}
      p={'La Sulamita no se dejó llevar por las riquezas o el poder, ni por el hecho de ser una reina en Israel, esas cosas vana no estaban en ella, sino que prefirió permanece fiel a su amor verdadero, incluso cuando enfrenta presiones y tentaciones'}
      />
      <ItemTEXT
      h3={'2 La belleza no lo es todo:'}
      p={' La Sulamita es hermosa, pero su belleza interior, era aún mayor, este tipo de mujer tan valiosa son muy pocas vista hoy en día, por lo tanto, toda mujer debería considerar ser como la Sulamita'}
      />
      <ItemTEXT
      h3={'3 La perseverancia del amor verdadero'}
      p={' A pesar de las dificultades, la Sulamita nunca renuncia a su amor por su pastor, ella en su corazón solo brotaba amor por su amado y ni siquiera la distancia ni el hecho de tener al rey en su frente fue suficiente para renunciar a su amado'}
      />
      <ItemTEXT
      h1={'Conclusión:'}
      p={'La Sunamita es un símbolo poderoso del amor apasionado y fiel. Su historia nos inspira a luchar por nuestros sueños de amor y a mantenernos firmes en nuestras convicciones, incluso cuando enfrentamos desafíos.'}
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