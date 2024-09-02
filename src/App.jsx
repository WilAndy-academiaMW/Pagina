import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Comienzo } from './assets/Comienzo';
import { Explorador } from './assets/explorador/explorador';
import Paginas from './assets/paginas/paginas';



function App() {
  return (
 <BrowserRouter>
     <Routes> 
       <Route path='/' element={<Comienzo/>} />
       <Route path='/explorador' element={<Explorador/>} />
       <Route path='/Paginas' element={<Paginas/>} />
     </Routes>  
  </BrowserRouter>
   
  
  );
}

export default App