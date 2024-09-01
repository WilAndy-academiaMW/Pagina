import './App.css';
import { Nav } from './assets/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Adivinanza } from './juegos/adivinanza';
import { Elexplorador } from './ElExplorador/Elexplorador';
import { ElSaber } from './El saber/elSaber';
import { Inicio } from './index/Inicio';



function App() {
  return (
 <BrowserRouter>
     <Routes> 
      <Route path='/' element={<Inicio/>} />
  {/*     <Route path='/Nav' element={<Nav/>}/>
      <Route path='/Elexplorador' element={<Elexplorador/>}/>
      <Route path='/Adivinanza' element={<Adivinanza/>}/>
      <Route path='/elSaber' element={<ElSaber/>}/>
      */}
     </Routes>  
  </BrowserRouter>
   
  
  );
}

export default App