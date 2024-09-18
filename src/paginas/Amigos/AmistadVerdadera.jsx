import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';
import Amistad from '../../img/amigos/amistad verdadera.jpg'

import { Helmet } from 'react-helmet';
export const AmistadV = () => {
  return (
    <>
     <Helmet>
        <title>Amistad Verdadera</title>
        <meta name="description" content="En este artículo, exploramos los principios fundamentales que definen una amistad verdadera y bíblica. Aprende sobre la importancia del amor desinteresado, la fidelidad, la honestidad y el perdón en las relaciones de amistad. Descubre cómo estos valores pueden fortalecer tus amistades y llevarlas a un nivel más profundo y significativo. Desde la importancia de compartir secretos y apoyarse mutuamente, hasta la necesidad de perdonar y ser honestos, este artículo te guiará en el camino hacia relaciones más auténticas y satisfactorias. ¡No te pierdas esta guía esencial para cultivar amistades verdaderas y duraderas!" />
      </Helmet>
      <Nav />
      <Cabeza img={Amistad} />
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
          h1={'Amistad Verdadera'}
       />
          <ItemTEXT
          h1={'Los secretos de una amistad bíblica:'}
          p={'Cuando hablamos de amistades, nos referimos a esas personas que llegan a conocerse y, una vez que se conocen, comparten cosas en común que las hacen más allegadas. A esto se le conoce como amigos. Sin embargo, cuando esa amistad se basa en muchos principios bíblicos, se le puede considerar una amistad bíblica. Pero, ¿exactamente a qué nos referimos con todo esto que hemos de mencionar?'}
          pp={'En el mundo, muchas personas no tienen mucho conocimiento sobre qué es realmente tener un amigo. A veces, muchos dicen que los amigos no existen, pero ¿es eso cierto? ¿Se puede realmente llegar a tener una amistad verdadera con una persona? ¿Podemos confiar en alguien todos nuestros secretos, nuestros problemas o estar en momentos felices de verdad con una persona?'} 
          ppp={'Pensemos en algo: ¿qué es una amistad verdadera? ¿Es un amigo aquel que me acompaña a fiestas todos los fines de semana, o una persona que trabaja conmigo toda la semana, 40 horas y todo el mes? ¿Es realmente eso un amigo? Puede que muchas personas no sepan diferenciar entre una amistad y el compañerismo. Son dos cosas que pueden parecer similares, pero que son muy diferentes. Un compañero es el que pasa tiempo contigo, pero un amigo es el que está contigo aun cuando no están cerca.'}
          pppp={'Muchas personas quizás no le den mucha importancia a una amistad, sean tan egoístas que no les interese el mundo. Pero, en realidad, tener amigos es algo que le causa satisfacción a una persona y la hace realmente feliz, ya que con los amigos se comparte tiempo de calidad. Pero, ¿cómo puede uno llegar a tener una amistad? O mejor dicho, ¿cómo sabemos quién es realmente nuestro amigo? ¿Cómo nos puede ayudar la Biblia en eso?'} 
           
           />
       <ItemTEXT
        h3={'Amor Desinteresado'}
       p={'Cuando la Biblia dice que una persona debe amar a su prójimo como a sí misma, habla sobre la simbología de que, si una persona se ama a sí misma, de esa misma manera debería amar a otra. Pero, ¿cómo podemos entender esto? Piensa en que necesitas conseguir una medicina urgentemente porque padeces de una enfermedad crónica o has pasado por un problema que requiere dinero. Como te amas a ti mismo, harías lo posible por conseguir ese dinero para ti. Eso es lo más lógico, pues es algo que es para ti, por lo tanto, tienes que hacerlo.'}
       pp={'De la misma manera, cuando la Biblia habla sobre amar al prójimo como a uno mismo, se refiere a que, cuando una persona necesita de nosotros, ya sea un bien material o emocional, debemos estar ahí para apoyarla. Esto puede significar ofrecer compañía, apoyo, o consejo. Eso es amar a nuestro prójimo. Cuando sacrificamos nuestro dinero, que seguramente necesitamos para otra cosa, pero decidimos dárselo a alguien porque lo consideramos más importante, eso se llama amor desinteresado. Este amor desinteresado hace que entre amigos surja un amor de amistad, lo cual nos hace felices. Siempre recordando que, si una vez ayudaste a alguien, mañana esa persona u otra puede ayudarte a ti. De esta manera, una amistad se fortalece y se confía aún más en el futuro.'}
        
        />
        <AdIframe/>
        <ItemTEXT
        h3={'Fidelidad'}
        p={'¿Qué es para ti la fidelidad? Piensa en un momento en que tienes un secreto que solo tú conoces porque es algo tan vergonzoso que no te gustaría que otra persona lo supiera. ¿Verdad que no contarías ese problema a otro? Porque eres fiel a tu propia persona y no harías algo que te avergüence a ti mismo.'}
        pp={'De la misma manera, cuando un amigo te cuenta algo personal que lo atormenta y necesita expresar lo que siente, un amigo verdadero es fiel y no va a contar a otra persona su dificultad. Más bien, guarda ese secreto, y eso también fortalece la amistad. Cuando los amigos se confían entre sí, se ven como una fuente de ayuda, una muralla para sus problemas. De esta manera, los problemas más graves y vergonzosos son más fáciles de resolver, ya que tuvieron a alguien a quien contárselo, alguien que seguramente sabía la solución.'}
        />
        <ItemTEXT
        h3={'Honestidad'}
        p={'¿Será que la honestidad es una pieza clave y fundamental para tener una relación de amistad verdadera? He escuchado el dicho que dice que a veces es mejor callar para evitar dolor ajeno, pero lo que quizás no sepan es que cuando uno calla, lo que hace es agravar más un problema, y ese problema en el futuro se puede convertir en algo mucho más doloroso. Es verdad que guardar silencio en algunos momentos puede ser lo más sensato, pero no siempre se debe esconder una verdad. Los amigos que son honestos se confiesan a sí mismos sus secretos, y mucho más si ese secreto va a afectar a su amigo.'}
        pp={'Pensemos por un momento que cometimos un error en un proyecto de un amigo nuestro, pero en vez de contárselo, preferimos callarnos para que nuestro amigo no sepa que fuimos nosotros. Ese proyecto que estaba realizando nuestro compañero era un proyecto que le iba a servir para presentárselo a una empresa y, de esa manera, conseguir un buen trabajo. ¿Qué pasaría si nosotros lo hubiéramos contado antes de presentárselo? Probablemente hubiera logrado repararlo y no hubiera fracasado. Pero lo mismo habría pasado si se hubiera presentado tal cual. Sin embargo, quizás en ese corto tiempo nuestro amigo pudo haber conseguido una solución al respecto, o bien podría haber conseguido un plazo adicional para presentarlo. Ese plazo no lo hubiera conseguido si nosotros no hubiéramos sido honestos en el momento.'}
        ppp={'Ser honesto no siempre es fácil, mucho más cuando nosotros podemos salir perjudicados, pero la honestidad entre los amigos es algo que siempre debe estar presente. Los amigos no se engañan y siempre se contarán algo, aun cuando perjudique a uno de ellos.'}  
          />
        <ItemTEXT
        h3={'Perdón'}
        p={'Las cualidades mencionadas hasta ahora son necesarias para que una amistad llegue a ser verdadera. Pero todas esas cualidades de nada sirven si no hay perdón entre los amigos. ¿Por qué es tan importante el perdón? Lo más normal que puede pasar en una relación, ya sea de amistad, amorosa, laboral, o cualquier otra, es la necesidad de perdonar. Esto se debe a que siempre habrá problemas entre las personas; toda persona es imperfecta y pecadora, por lo tanto, es probable que siempre cometan errores.'}
        pp={'Cuando no hay perdón entre amigos, eso separa una relación de amistad, una relación que más adelante pudo haber sido de gran ayuda, pero que no lo fue por no haber perdonado. El perdón entre las personas es algo muy necesario. Por eso, mis amigos, si queremos ser felices, tenemos que perdonar a nuestro prójimo. Siempre debemos recordar que a nosotros se nos perdonaron nuestros errores mediante el sacrificio de Cristo, por lo tanto, ningún error que cometan hacia nosotros es comparable a los errores que siempre cometemos contra Dios.'}
        />
         <ItemTEXT
         h1={'Conclusión'}
         p={'Cuando ponemos todos estos principios en práctica, seguramente logramos tener buenas amistades muy fortalecedoras. Para concluir con este artículo, quiero recalcar que la felicidad entre amigos es una felicidad sumamente satisfactoria. Tener un compañero de amistad es un regalo de Dios, ya que con ellos se pasan momentos muy agradables. Desde aquella persona que te acompaña al gimnasio a entrenar, hasta quien está contigo creando un proyecto a largo plazo, son momentos muy satisfactorios que solo se pueden disfrutar si son amigos de verdad.'}
         pp={'Por eso, mis amigos, nunca tratemos de estar solos. A pesar de que la soledad puede ser agradable en algunos momentos, no hay nada mejor que tener una amistad verdadera. Por lo tanto, busquemos amigos de verdad y seamos felices en esta vida con ellos.'}
         />       
      
     <AdsterraAd/>
          </article>
      </main>
      
    </div>
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