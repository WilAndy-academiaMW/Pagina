
import './slider.css'
import img1 from '../img/index/reyes-israel.webp'
import { useState } from 'react';
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const articles = [
    {
      img:img1,
      alt: 'Paisaje montañoso con lago, estilo fotográfico vibrante',
      title: 'Explorando las Montañas',
      description: 'Descubre los secretos de las cumbres más altas del mundo.'
    },
    {
      img:img1,
      alt: 'Paisaje montañoso con lago, estilo fotográfico vibrante',
      title: 'Explorando las Montañas',
      description: 'Descubre los secretos de las cumbres más altas del mundo.'
    },
    {
      img:img1,
      alt: 'Paisaje montañoso con lago, estilo fotográfico vibrante',
      title: 'Explorando las Montañas',
      description: 'Descubre los secretos de las cumbres más altas del mundo.'
    },
    {
      img:img1,
      alt: 'Paisaje montañoso con lago, estilo fotográfico vibrante',
      title: 'Explorando las Montañas',
      description: 'Descubre los secretos de las cumbres más altas del mundo.'
    },
  
  
  ];
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === articles.length - 1 ? 0 : prevIndex + 1));
  };


  return(
    <>
      <div className="carrusel">
        <div className="text-title"><h1 style={{color:'red'}}>Desarrollo</h1></div>
        <div className="carrusel-iten">
          <div className="iten-carrusel">
          
              {articles.map((article, index) => (
                <div key={index} className="article-card">
                  <img src={article.img}  style={{width:'100%',height:'50%'}} />
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <button className="read-more-btn" onClick={() => alert(`Has hecho clic en "Leer más" para el artículo: ${article.title}`)}>Leer más</button>
                </div>
              ))}
           
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Carousel;


