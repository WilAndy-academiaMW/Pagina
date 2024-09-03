import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Comienzo } from './assets/Comienzo';
import { Explorador } from './assets/explorador/Explorador';

import { Adivinanza } from './juegos/adivinanza';
import { Historia } from './assets/Historias/historia';



function App() {
  return (
 <BrowserRouter>
     <Routes> 
       <Route path='/' element={<Comienzo/>} />
       <Route path='/explorador' element={<Explorador/>} />
       <Route path='/Adivinanza' element={<Adivinanza/> }/>
       <Route path='/Historia' element={<Historia/>} />
     </Routes>  
  </BrowserRouter>
   
  
  );
}

export default App