import './elsaber.css'


export const Encabezado =({ImgH,TituloH, ParrafoH,color,colorp,fondo,fondop})=>{
  return(
    <main className="content" >
    <div className="hero" id="hero">
     <img style={{width:'100%', height:'100%'}} src={ImgH} alt="IMAGEN DE PORTADA" />
<div className="hero-content">
<h1 style={{ color: color, boxShadow: fondo }}>{TituloH}</h1>
<h1>hello work</h1>
 <p style={{color:colorp,boxShadow:fondop}}>{ ParrafoH}</p>
 {/*<a href="#" className="btn btn-primary">Reproducir</a>
 <a href="#" className="btn">Más información</a>*/}
</div>
</div>
</main>
  )
}










