import React from 'react';
import '../modelo.css';
import {  Cabeza } from '../Modelo';
import { Nav } from '../../assets/Nav/Nav';
import SamaritanoIMG from '../../img/historias/Elbuensamaritano/1.webp';
import SamaritanoIMG3 from '../../img/historias/Elbuensamaritano/3.webp';
import { Footer } from '../../index/indices';
import AdIframe from '../../publicidad/AdScript';
import AdsterraAd from '../../publicidad/Baner';

export const Elbuensamaritano = () => {
  return (
    <>
      <Nav />
      <Cabeza img={SamaritanoIMG} />
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
          h1={'El buen samaritano'}
          h3={'El buen samaritano en la biblia'}
         p={'La parábola de Jesucristo que se narra en el Evangelio de Lucas (10:25-37) es una de las enseñanzas más conocidas y de jesus. En ella, cristo nos enseña una valiosa lección sobre el amor al prójimo y la importancia de actuar con compasión. Pero para que puedas entender un poco mejor el concepto que te queremos transmitir vamos hablar un poco sobre la historia'}
         />
          <ItemTEXT
         h3={'Historia de la biblia'}
         p={'La historia comienza con Jesucristo narrando una parábola para dejarle una lección a sus oyentes. Jesucristo les dice Que había un hombre que emprendió un viaje de Jerusalén a Jericó, pero mientras iba por el camino fue asaltado por ladrones, y por si fuera poco, los ladrones no solo lo asaltaron, sino que lo golpearon y lo maltrataron dejándolo medio muerto, al costado de la calle. El hombre quedo tan mal que no podía ni pararse para seguir su destino y se quedó tendido en el suelo, casi muerto. Cristo seguía diciendo que Un sacerdote paso por allí, los sacerdotes le daban servicio sagrado a dios, por lo tanto, era de esperarse que al ver al hombre lo fuera a ayudar, pero no fue así, cuando vio al hombre tirado, lo ignoró y siguió. También pasó un levita, pero al igual que el sacerdote lo vio lo ignoro y siguió su camino. Ambos ignoraron a ese pobre hombre que necesitaba ayuda y no le ayudaron. Sin embargo, cristo sigue narrando la historia y habla de un samaritano que también viajaba por el camino, y mientras lo hacía vio al hombre tirado en el suelo, al verlo se compadeció del hombre herido, Se acercó a él, le vendó las heridas, le echó aceite y vino, y por si fuera poco lo subió a su propio burro. Luego lo llevó a una posada y pagó por su alojamiento y cuidado. Al día siguiente, el samaritano le dio dinero al posadero para que cuidara del hombre herido y le prometió que regresaría para pagar cualquier costo adicional. Este samaritano que su raza era odiado por los judíos hizo lo que los mismos judíos como el sacerdote y el levita no hicieron '}/>
         <Item
            img={SamaritanoIMG3}
          />
          <ItemTEXT
          h3={'5 enseñanzas de la parábola del buen samaritano'}
         />

          <ItemTEXT
          h3={'El amor al prójimo:'}
          p={' Imagina al hombre tirado en el piso, esperando que alguien lo ayude a causa del mal estado que se encuentra él, y las personas que debería ayudarla quizás porque es un desconocido para ella lo ignora, una clara muestra del la falta de cariño natural. Por eso la parábola el buen samaritano nos enseña que el amor al prójimo no se limita a las personas que conocemos o que son de nuestro mismo grupo social. El verdadero amor al prójimo se extiende a todos, sin importar su raza, religión, nacionalidad o condición social. Jesús puso como ejemplo a un samaritano que ellos eran odiados por los judíos, por eso miren la escena, una persona detestada termina haciendo una obra de calidad que se espera que hiciera los habitantes de la ciudad santa y que no lo hicieron. Por eso estas parábolas nos desafía a que amemos a nuestro prójimo como a nosotros mismos, y a que actuemos con compasión y misericordia, especialmente hacia aquellos que más lo necesitan'}
          />
          <AdIframe/>
          
          <ItemTEXT
          h3={'La compasión:'}
          p={'La compasión es la capacidad de sentir empatía por el sufrimiento de los demás y de querer ayudarlos. El Buen Samaritano es un ejemplo de compasión, pues la ayuda que le mostró a este pobre hombre fue más allá de lo que se pudiera esperar. Porque no solo le cubrió las heridas, sino que lo monto en su propio burro y pago por su cuidado y atención, una obra que no se ve muy fácil hoy en día en acción. La compasión nos motiva a salir de nuestra zona de confort y a hacer algo para mejorar la vida de los demás. Y esa compasión hace que nosotros seamos felices, pues la felicidad proviene del dar, y más cuando se trata de hacer este tipo de ayuda'}
          />
          <ItemTEXT
          h3={'La acción:'}
          p={' El amor al prójimo y la compasión no son suficientes si no van acompañados de una acción. El Buen Samaritano no solo sintió compasión por el hombre herido, sino que también actuó para ayudarlo. A veces vemos una persona necesitando ayuda y nos da cierta lástima, pero no actuamos, ese tipo de lástima no es compasión, y no edifica a nadie. En cambio, el buen samaritano no solo sintió lástima, sino que actuó, Le vendó las heridas, lo llevó a una posada y pagó por su cuidado. La parábola nos enseña que no basta con sentir lástima por los demás, sino que debemos tomar medidas para ayudarlos'}

          />
          <ItemTEXT
          h3={'La superación de prejuicios:'}
          p={' En la época de Jesús, existía una gran enemistad entre judíos y samaritanos. El hecho de que el samaritano ayudara a un judío herido es un poderoso mensaje sobre la importancia de superar los prejuicios. Esto nos enseña actualmente a ayudar aún a una persona que no sea de nuestro agrado, o que en nuestra comunidad no sea de agrado por su raza o nacionalidad. El samaritano no le importo si era judío o no, simplemente lo ayudo porque empatía y cariño natural. La parábola nos enseña que no debemos juzgar a los demás por su raza, religión, nacionalidad o cualquier otra característica. Si puedes ayudar a alguien que nada te frene ni los comentarios innecesarios de la gente'}
          />
          <ItemTEXT
          h3={'La responsabilidad social:'}
          p={' Jesús lo que quiere es que sus seguidores entendieran que tenían que mostrarle compasión y ayudar a cualquiera por igual. Porque qué galardón puede tener que tú ayudes solo a tus familiares o amigos, eso cualquiera lo hace, pero ayudar a un desconocido que la requiere eso no tiene precio y si crees que hacer eso no te beneficia en nada, pues te equivocas, ya que las bendiciones espirituales suelen ser mejor que el dinero. La felicidad de ayudar a otro te hace sentir muy bien y te abre las puertas con el mundo, puesto que después quien necesite la ayuda eres tú y como obraste bien, te obraran bien'}
          />
          <ItemTEXT
          h1={'Reflexiona'}
          p={'Ya hablamos un poco de toda esta parábola maravillosa de Jesús, pero no basta con solo verla analizar en profundidad es lo que te hará entender que es lo que debe hacer, por eso te invito a meditar y siempre ayudar a tu prójimo'}
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