import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Comienzo } from './assets/Comienzo';
import { Explorador } from './assets/explorador/explorador';



function App() {
  return (
 <BrowserRouter>
     <Routes> 
      <Route path='/' element={<Comienzo/>} />
      <Route path='/explorador' element={<Explorador/>} />
     </Routes>  
  </BrowserRouter>
   
  
  );
}

export default App