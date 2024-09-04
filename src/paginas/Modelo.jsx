import { Link } from 'react-router-dom'
import './modelo.css'


export const Cabeza =({img})=>{
    return(
        <>
         <header className='HeaderModelo'>
      
        <img style={{width:'100%',height:'100%'}} src={img} alt="" />
    </header>
        </>
    )
}
export const Article =({img,h1,h3,p})=>{
    return(
        <>
        <body className='body'>
    <main>
        <article>
           <Item/>
        </article>
    </main>
    <aside className='aside'>
        <h3>Artículos Populares</h3>
        <ul>
            <li><Link>10 Playas Secretas que Debes Visitar</Link></li>
            <li><Link>Guía Definitiva para el Mochilero Moderno</Link></li>
            <li><Link>Sabores del Mundo: Un Viaje Culinario</Link></li>
        </ul>
        <h3 className='h3Modelo'>Sobre el Autor</h3>
        <p className='pmodelo'>Soy un apasionado viajero y escritor que ha recorrido más de 50 países. Mi misión es inspirar a otros a explorar el mundo y vivir aventuras inolvidables.</p>
    </aside>
    </body>
        </>
    )
}

const Item =({img,h1,h3,p})=>{
    return(
        <>
         <img className='img' src={img} alt="Hermosa playa tropical con palmeras y aguas turquesas" style={{width:"800", height:"300"}} />
            <h1 className='HModelo'>{h1}</h1>
            <h3 className='h3Modelo'>{h3}</h3>
            <p className='pmodelo'>{p}</p>
            <p className='pmodelo'>{p}</p>
        </>
    )
}
