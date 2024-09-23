import React from 'react';
import '../modelo.css';
import { Helmet } from 'react-helmet';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import david from '../../img/historias/david.webp'
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';

export const David = () => {
  return (
    <>
    <Helmet>
        <title>El Arcángel Miguel</title>
        <meta name="description" content="Descubre la fascinante historia del Rey David, uno de los personajes más destacados y ejemplares de la Biblia. Desde sus humildes comienzos como campesino hasta convertirse en el Rey de Israel, David es un símbolo de fe y amor por Dios. Conoce cómo su fe inquebrantable lo llevó a superar pruebas y dificultades, incluyendo su famosa batalla contra Goliat, el gigante filisteo. Aprende sobre sus numerosas batallas y cómo, con el favor de Dios, David ganó cada una de ellas, a pesar de los celos del Rey Saúl. Este artículo te llevará a través de los momentos más decisivos de la vida de David, su relación con Jehová, y cómo finalmente se convirtió en el rey amado por todo Israel. No te pierdas esta inspiradora historia de fe, coraje y liderazgo" />
      </Helmet>
      <Nav />
      <Cabeza img={david} />
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
          h1={'La historia de David'}
        p={'Uno de los personajes más destacados en la Biblia es el rey David, uno de los personajes más ejemplares que podemos encontrar en los escritos sagrados. Toda la grandeza que llegó a tener se debió a un solo motivo: la fe y el amor que tenía por Dios. David comenzó como un simple campesino y llegó a ser el rey de Israel, pero para ello pasó por muchas pruebas y dificultades. Gracias a su fe, David logró superar todos los retos. Te invito a que sigas leyendo este artículo donde verás la historia del rey David.'}
        />
         
          <ItemTEXT
          h3={'David y Goliat:'}
          p={'Cuando hablamos sobre los comienzos de David, la primera historia impactante que llega a la memoria de un lector bíblico es la historia de David y Goliat. ¿Por qué esta historia es tan llamativa? Pues no es normal que un niño o un joven de aproximadamente 15 años se enfrente a un gigante que probablemente medía más de 3 metros. En ese momento, el pueblo de Israel estaba peleando contra los filisteos, quienes tenían un gran luchador acostumbrado a la guerra, un hombre de batalla con una fuerza increíble y un gran tamaño. Este hombre estaba retando a las líneas de batalla de Israel, y los israelitas tenían demasiado miedo a causa del gigante Goliat.'}
          pp={'En medio de la batalla de Israel se encontraba un joven llamado David, quien no tenía miedo del gigante y pidió al rey Saúl combatir contra él. La fe que demostraba este joven hizo que el rey le permitiera bajar para enfrentarse al gigante filisteo. El gigante filisteo no hacía más que burlarse de aquel joven, pues lo lógico sería que el filisteo lo destrozara. Pero eso no fue lo que ocurrió, porque gracias a la fe de aquel joven judío, que tomó cuatro piedras y las lanzó al gigante, logró matarlo y cortarle la cabeza. Desde ese momento, David empezó a ser nombrado en todo Israel. Siendo muy joven, demostró una fe inquebrantable en Dios.'}

        
          />
          <ItemTEXT
          h3={'David y sus batallas:'}
          p={'A medida que David iba creciendo, el rey Saúl lo utilizaba para que estuviera en las líneas de batalla. Por increíble que pareciera, ninguna batalla en la que estaba David era sinónimo de derrota, pues todas las ganaba. El favor de Dios estaba con David, y él ganaba cada batalla. Pero esto hizo que el rey Saúl se sintiera demasiado celoso, ya que David se estaba haciendo más famoso que él en todo Israel. Las mujeres cantaban y decían: “Saúl ha matado a miles, pero David a decenas de miles”. Esto no agradó en absoluto al rey de Israel. Poco a poco, el rey permitió que los celos lo invadieran y quiso acabar con la vida de David. David estaba en peligro a causa de Saúl, quien lo perseguía por todas partes, mientras que David no tenía otra opción que estar fuera de Israel.'}
         
          />
          <ItemTEXT
          h3={'David rey:'}
          pp={'Pero Jehová, el Dios de Israel, nunca dejó solo al joven David. Siempre estuvo con él, y por eso David siempre prosperó dondequiera que estuviera. En una de las batallas más decisivas entre Israel y los filisteos, lamentablemente Israel perdió, y Saúl terminó muerto junto a su hijo, el heredero Jonatán. Con el paso del tiempo, David fue ganando el favor de los ancianos de Israel y, unos años después, se convirtió en el rey de Israel.'}
          
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