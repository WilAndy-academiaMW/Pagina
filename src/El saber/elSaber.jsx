import './elsaber.css'


export const Encabezado =({ImgH,TituloH, ParrafoH})=>{
  return(
    <main className="content" >
    <div className="hero" id="hero">
     <img style={{width:'100%', height:'100%'}} src={ImgH} alt="IMAGEN DE PORTADA" />
<div className="hero-content">
 <h1>{TituloH}</h1>
 <p>{ ParrafoH}</p>
 {/*<a href="#" className="btn btn-primary">Reproducir</a>
 <a href="#" className="btn">Más información</a>*/}
</div>
</div>
</main>
  )
}










