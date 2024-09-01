

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Comienzo } from './assets/Comienzo';



function App() {
  return (
 <BrowserRouter>
     <Routes> 
      <Route path='/' element={<Comienzo/>} />
 
     </Routes>  
  </BrowserRouter>
   
  
  );
}

export default App