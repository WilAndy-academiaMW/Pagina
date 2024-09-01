import React, { useState } from 'react';
import './adivinanzas.css';
import fondo from './fondo.png'
import { GrStatusGood } from "react-icons/gr";
import { MdErrorOutline } from "react-icons/md";
import { Nav } from '../assets/Nav';
import Perfil from '../img/Nav/perfil.png'

export const Adivinanza = () => {
  const adivinanzas = [
    { pregunta: 'Construyeron y construyeron hasta que los muchos idiomas los confundieron. ¿Qué es?', respuesta: 'La Torre de Babel' },
    { pregunta: 'Soy muy alto y soy muy fuerte. Ese pequeño joven, con su honda y sus piedras, me divierte. ¿Quién soy?', respuesta: 'Goliat' },
    { pregunta: 'A los leones me echaron para que fuera su comida, pero ellos no sospechaban, que Dios me protegería. ¿Quién soy?', respuesta: 'Daniel' },
    { pregunta: 'En Dios confié y al gigante le gané. Cuando menos lo esperaban, con una piedrecita, la pelea terminaba. ¿Quién soy?', respuesta: 'David' },
    { pregunta: 'De ser perseguidor, pasé a ser perseguido, porque Dios se me reveló, mientras iba a Damasco en camino. ¿Quién soy?', respuesta: 'Pablo' },
    { pregunta: 'Me quedé con mi suegra después de perder a mi marido, e hice de su Dios y de su pueblo, los míos. ¿Quién soy?', respuesta: 'Rut' },
    { pregunta: 'Por ser demasiado confiado y contar su secreto a quien no debía, se quedó sin pelo y sin poder ver la luz del día. ¿Quién es?', respuesta: 'Sansón' },
    { pregunta: 'Por no querer obedecer, en la panza de un gran pez me encontré. Después que me vomitó, me apresuré a predicar sobre Dios. ¿Quién soy?', respuesta: 'Jonás' },
    { pregunta: 'A un árbol me subí, porque a Jesús quería ver. Grande sorpresa me llevé cuando dijo que mi casa quería ver. ¿Quién soy?', respuesta: 'Zaqueo' },
    { pregunta: 'En reina me convertí, sin jamás haberlo soñado. Dios me usó para salvar a su pueblo, ya él lo había preparado. ¿Quién soy?', respuesta: 'Ester' },
    {pregunta:'Nombre de un escritor del libro de Proverbios' , respuesta: 'Agur'},
    {pregunta:'Nombre del último rey de Judá' , respuesta: 'Sedequías'},
    {pregunta:'Nombre del primer profeta de Israel' , respuesta: 'Moisés'},
    {pregunta:'Soy un hombre valiente, heredero al trono de Israel, maté a 20 hombres en una batalla pero no pude ser rey' , respuesta: 'Jonatán'},
    {pregunta:'Fui reprendido por mi madre después de llevar una vida desenfrenada. Escribí unas lindas palabras que destacan a las mujeres valerosas' , respuesta: 'Rey Lemuel'},
    {pregunta:'De lejos tu siervo fue a buscarme para casarme contigo. Cuando te vi, cubrí mi rostro' , respuesta: 'Rebeca'},
    {pregunta:'Ha llegado un Salvador a la tierra y tienes que llamarle Jesús ¿Quién soy?' , respuesta: 'el ángel Gabriel'},
    {pregunta:'Curamos a un paralítico, y me quisieron tratar como un dios, pero como no nos dejamos, quisieron apedrearnos. ¿Quiénes somos?' , respuesta: 'Pablo y Bernabé'},
    {pregunta:'Aparte de José y María, ¿qué otros seres humanos se enteraron del nacimiento de Jesucristo?' , respuesta: 'Los pastores'},
    {pregunta:'¿Qué tipo de planta fue la que se secó cuando Jesucristo la maldijo?' , respuesta: 'una higuera'},
    {pregunta:'Con una aguijada de un animal mató a 600 filisteos.' , respuesta: 'Samgar'},
    // Añade más adivinanzas aquí
  ];

  const [indice, setIndice] = useState(0);
  const [respuesta, setRespuesta] = useState('');
  const [resultado, setResultado] = useState('');
  const [color, setColor] = useState('black');

  const manejarCambio = (e) => {
    setRespuesta(e.target.value);
  };

  const manejarSubmit = () => {
    if (respuesta.toLowerCase() === adivinanzas[indice].respuesta.toLowerCase()) {
      setResultado(<GrStatusGood  className='icon' />);
      setColor('green');
      setTimeout(() => {
        setIndice((prevIndice) => (prevIndice + 1) % adivinanzas.length);
        setRespuesta('');
        setResultado('');
        setColor('black');
      }, 2000); // Espera 2 segundos antes de mostrar la siguiente adivinanza
    } else {
      setResultado(<MdErrorOutline />
);
      setColor('red');
    }
  };

  return (
    <>
     <Nav
    Logo={Perfil}
    Stilo={'red'}
    Stilo2={'red'}
    />
    <div className="adivina">
      <img className='img-adivinanzas' src={fondo} alt="" />
        <p className='adivinanza'>{adivinanzas[indice].pregunta}</p>
        <input className='input' type="text" value={respuesta} onChange={manejarCambio} />
        <button className='boton-adi' onClick={manejarSubmit}>Enviar</button>
      
      <p className='resultado' style={{ color }}>{resultado}</p>
    </div> </>
  );
};
