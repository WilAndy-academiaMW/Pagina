import React from 'react'
import { Link } from 'react-router-dom'
import './indexs.css'
import './seccion.css'
import './enseñanza.css'
import './mente.css'
import './foter.css'
import './Aticle.css'
import './interes.css'
import imgportada from '../img/index/reyes-israel.webp'
import imgseccion from  '../img/index/Elexplorador.png'
import Libro from '../img/index/libro.png'
import Disciplina from '../img/index/Disciplina.webp'
import Cualidades from '../img/index/cualidades.webp'
import Mentalidad from '../img/index/mentalidad.webp'
import foto from '../img/index/reyes-israel.webp'

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
        <section class="features">
        <div class="feature">
        <div class="feature-icon"><Link to='/elSaber'>📜</Link></div>

        <h3>Historias Biblicas</h3>
        <p>Muchas historia que nos invitan a imitar lo que hicieron los siervos de dios del pasado</p>
        </div>
        <div class="feature">
            <div class="feature-icon"><Link to="/Elexplorador">🚀</Link></div>
            <h3>Desarrollo Personal</h3>
            <p>Adsorviendo todo el conocimiento posible para nuestro desarrollo como persona</p>
        </div>
        <div class="feature">
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
            <img src={imgportada} alt="" />
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
                <img src={imgportada} alt="" />
              </div>
              <div className="h1-1">
                <h3>Salmos Proverbios y esclesiaste </h3>
              </div>
              <div className="boton-1">
              <button>ver mas</button>
              </div>
              </aside> 
              <aside> 
              <div className="img-1">
                <img src={imgportada} alt="" />
              </div>
              <div className="h1-1">
                <h3> las parabolas de jesus</h3>
              </div>
              <div className="boton-1">
              <button>ver mas</button>
              </div>
              </aside> 
              <aside> 
              <div className="img-1">
                <img src={imgportada} alt="" />
              </div>
              <div className="h1-1">
                <h3> las cartas del nuevo testamento</h3>
              </div>
              <div className="boton-1">
                <button>ver mas</button>
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
El hombre y Dios
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
    IMG={foto}
    Parrafo={'hello work'}
    />
    <Interes
    IMG={foto}
    Parrafo={'hello work'}
    />
    <Interes
    IMG={foto}
    Parrafo={'hello work'}
    />
   <Interes
    IMG={foto}
    Parrafo={'hello work'}
    />
      </div>
    </section>
    </>
    )

}

const Interes =({IMG,Parrafo})=>{
return(
   
 
       <div className="topic-card">
       <img
        src={IMG}
        alt="Familia estudiando junta"
        className="topic-image"
        style={{ width: "250px", height: "150px" }}
       />
       <div className="topic-content">
        <h3 className="topic-title">Vida Familiar</h3>
        <p className="topic-description">
          {Parrafo}
        </p>
        <a href="https://jw-inspired.org/temas/vida-familiar" className="topic-link">
          Leer más
        </a>
       </div>
      </div>
  


)
}