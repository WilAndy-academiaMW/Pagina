import React from 'react'
import { Link } from 'react-router-dom'
import './indexs.css'
import './seccion.css'
import './enseñanza.css'
import './mente.css'
import './foter.css'
import './Aticle.css'
import './interes.css'
import './Redes.css'
import './Desarrollo.css'
import imgportada from '../img/index/reyes-israel.webp'
import imgseccion from  '../img/index/Elexplorador.png'
import Libro from '../img/index/libro.png'
import Disciplina from '../img/index/Disciplina.webp'
import Cualidades from '../img/index/cualidades.webp'
import Mentalidad from '../img/index/mentalidad.webp'
import foto from '../img/index/reyes-israel.webp'
import parabola from '../img/historias/portada.jpeg'
import nuevoT from '../img/historias/nuevoT.jpg'
import salmo from '../img/historias/salmo.jpg'
import matrimonio from '../img/interes/matriminio.jpg'
import familia from '../img/interes/familia.jpg'
import crecimiento from '../img/interes/crecimiento.jpg'
import amigos from '../img/interes/amigos.jpg'
import { Parejas } from '../Temas de interes/Parejas'

export const Header = ({wirh}) => {
  return (
    <header className='header' style={{width:{wirh}}}>
        <img className='portada' src={imgportada} alt="" />
    {/*     <aside>
        <h3>El hombre y dios</h3>
        <h1 >En el hombre y dios nos dedicamos a sacar {<br/>} <b style={{color:'orange'}}> la mayor enseñanza posble</b></h1>
        <p></p>    
        </aside>  */}   
    </header>
 )
}
export const Seccion =()=>{
    return(
        <>
        <div className="seccion">
            <div className="titulo-seccion">          
           El camino al desarrollo personal         
            </div>     
            <div className="img-seccion">
            <img className='img-seccion-img' src={imgseccion} alt="" />
            </div>    
        </div>
        </>
    )
}
export const Aticle =()=>{
    return(
        <>
        <section className="features">
        <div className="feature">
        <div className="feature-icon"><Link to='/Historia'>📜</Link></div>
        <h3>Historias Biblicas</h3>
        <p>Muchas historia que nos invitan a imitar lo que hicieron los siervos de dios del pasado</p>
        </div>
        <div className="feature">
            <div class="feature-icon"><Link to="/Explorador">🚀</Link></div>
            <h3>Desarrollo Personal</h3>
            <p>Adsorviendo todo el conocimiento posible para nuestro desarrollo como persona</p>
        </div>
        <div className="feature">
            <div class="feature-icon"><Link to="/Adivinanza">🧩</Link></div>
            <h3>Juegos dinamicos</h3>
            <p>diviertete con juegos interactivos donde aumentaras tu conocimiento</p>     
        </div>
    </section>
        </>
    )
}
 const Aside =({Titulo,Parrafo,img})=>{
   const darClick=()=>{
    console.log('hello word')
   }  
    return(
        <>
         <aside>
                <img src={img} alt="" />
                <h3>{Titulo}</h3>
                <p>{Parrafo}</p>
                <button style={{cursor:'pointer'}} onClick={darClick}>ver mas</button>
            </aside>
        </>
    )
}
export const Articulos =()=>{
    return(     
       <div className="articulos">
          <div className="articulosONE">
            <Aside
            img={Disciplina}
            Titulo={'Disciplina'}
            Parrafo={' ¿Quieres transformar tus sueños en realidad? La disciplina es la clave para el éxito en cualquier ámbito de la vida. '}
            />
            <Aside
            img={Cualidades}
            Titulo={'Cualidades cristianas'}
            Parrafo={'Al igual que un jardinero cuida y cultiva sus plantas, tú puedes cultivar las cualidades que deseas ver florecer en tu interior.'}
            />
            <Aside
            img={Mentalidad}
            Titulo={'Buena Mentalidad'}
            Parrafo={'Una mente fértil es aquella que se abre a nuevas posibilidades, que se adapta al cambio y que encuentra soluciones creativas a los problemas.'}
            />   
           </div>      
       </div>    
    )
}
export const Enseñanza =()=>{
    return(
        <div className='enseñanza'> 
         <div className='img-enseñanza'>
            <img src={Mentalidad} alt="" />
         </div>
         <div className="aside-enseñanza">
            <div className="titulos-ens">
                <h2>El saber</h2>
                <h1>Los mejores consejos {<br/>}que la biblia nos puedes dar</h1>
                <p>Veamos que podemos aprender de todas las enseñanzas que nos deja el nuevo
                    antiguo testamento, asi como los proverbios, las parabolas de jesuscristo, y las cartas de los apostoles
                </p>
            </div>
            <div className="menu-ens">
               <aside> 
              <div className="img-1">
                <img src={salmo} alt="" />
              </div>
              <div className="h1-1">
                <h3>Salmos Proverbios y esclesiaste </h3>
              </div>
              <div className="boton-1">
              <button><Link to='/Saber'>ver mas</Link></button>
              </div>
              </aside> 
              <aside> 
              <div className="img-1">
                <img src={parabola} alt="" />
              </div>
              <div className="h1-1">
                <h3> las parabolas de jesus</h3>
              </div>
              <div className="boton-1">
              <button><Link to='/Saber'>ver mas</Link></button>
              </div>
              </aside> 
              <aside> 
              <div className="img-1">
                <img src={nuevoT} alt="" />
              </div>
              <div className="h1-1">
                <h3> las cartas del nuevo testamento</h3>
              </div>
              <div className="boton-1">
              <button><Link to='/Saber'>ver mas</Link></button>
              </div>
              </aside> 
            </div>
         </div>
        </div>
    )
}
export const Mente =()=>{
    return(
        <div className="mentalidad">
            <div className="mente-title">
                <h3>La mente de un discernidor</h3>
                <h1 style={{color:'white'}}>Libro inspirado en proverbios <b style={{color:'orange'}}>para tener discernimeinto</b> </h1>
            </div>
            <div className="mente-tema">
                <div className="mente-img"><img src={Libro} alt="" /></div>
                <div className="mente-text">
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at qui repudiandae vitae sed eum dicta, officia amet suscipit vel. Voluptas earum reprehenderit dolorem rem, ullam exercitationem neque? Quae, cumque?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at qui repudiandae vitae sed eum dicta, officia amet suscipit vel. Voluptas earum reprehenderit dolorem rem, ullam exercitationem neque? Quae, cumque?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at qui repudiandae vitae sed eum dicta, officia amet suscipit vel. Voluptas earum reprehenderit dolorem rem, ullam exercitationem neque? Quae, cumque?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at qui repudiandae vitae sed eum dicta, officia amet suscipit vel. Voluptas earum reprehenderit dolorem rem, ullam exercitationem neque? Quae, cumque?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at qui repudiandae vitae sed eum dicta, officia amet suscipit vel. Voluptas earum reprehenderit dolorem rem, ullam exercitationem neque? Quae, cumque?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at qui repudiandae vitae sed eum dicta, officia amet suscipit vel. Voluptas earum reprehenderit dolorem rem, ullam exercitationem neque? Quae, cumque?      
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at qui repudiandae vitae sed eum dicta, officia amet suscipit vel. Voluptas earum reprehenderit dolorem rem, ullam exercitationem neque? Quae, cumque?       
                    </p>
                    <button>ver en amazon</button>
                </div>
            </div>
        </div>
    )
}
export const Footer =()=>{
    return(
        <footer>
        <p>&copy; 2023 Inspiración Espiritual. Todos los derechos reservados.</p>
      </footer>
    )
}
export const Intere =()=>{
    return( 
    <> 
     <section className="topics-section">
     <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Temas de Interés</h2>
     <div className="topics-container">
     <Interes
    IMG={familia}
    Parrafo={''}
    Titulo={'Vida familiar'}
    Tema={'/Vidafamiliar'}
    
    />
    <Interes
    IMG={crecimiento}
    Titulo={'Crecimiento Personal'}
    Parrafo={''}
    Tema={'/Crecimiento'}
    />
    <Interes
    IMG={amigos}
    Titulo={'Amigos'}
    Parrafo={''}
    Tema={'/Amigo'}
    />
   <Interes
    IMG={matrimonio}
    Titulo={'Parejas'}
    Parrafo={''}
    Tema={'/Parejas'}
    />
      </div>
    </section>
    </>
    )
}
const Interes =({IMG,Parrafo,Titulo,Tema})=>{
return(
       <div className="topic-card">
       <img
        src={IMG}
        alt="Familia estudiando junta"
        className="topic-image"
        style={{ width: "100%", height: "150px" }}
       />
       <div className="topic-content">
        <h3 className="topic-title">{Titulo}</h3>
        <p className="topic-description">
          {Parrafo}
        </p>
        <Link to={Tema} className="topic-link">
          Leer más
        </Link>
       </div>
      </div>
)
}
export const RedesS =()=>{
    return(
        <section className="social-media-section">
          <h2>Síguenos en Redes Sociales</h2>
          <div className="social-media-container">
            <div className="social-media-item">
              <div className="social-media-icon tiktok">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </div>
              <a href="https://www.tiktok.com/@elhombre_dios.99" className="social-media-link" style={{color:'white'}}>@elhombre_dios.99</a>
            </div>
            <div className="social-media-item">
              <div className="social-media-icon instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
               <a href="" style={{color:'white'}} className="social-media-link">@inspiracion_espiritual</a> 
          </div>
          </div>
        </section>
    )
}
export const Desarrollop =()=>{
    return(
        <main>
            <div className="grid">
          <Camino
          IMG={Disciplina}
          Titulo={'HOLA'}
          Parrafo={'QUE TAL TODO'}
          />
            <Camino
          IMG={Cualidades}
          Titulo={'HOLA'}
          Parrafo={'QUE TAL TODO'}
          />
            <Camino
          IMG={Mentalidad}
          Titulo={'HOLA'}
          Parrafo={'QUE TAL TODO'}
          />
           </div>
        </main>   
    )
}
 const Camino =({IMG,Titulo,Parrafo})=>{
    return(   
          <div className="card">
                 <img src={IMG} alt="Personas estudiando la Biblia juntas" style={{ width:'200', height:'300'}}/>
             <div className="card-content">
              <h3>{Titulo}</h3>
              <p>{Parrafo}</p>
             </div>      
          </div>
    )
}