import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Comienzo } from './assets/Comienzo';
import { Explorador } from './assets/explorador/Explorador';
import { Adivinanza } from './juegos/adivinanza';
import { Historia } from './assets/Historias/Historia';
import { Saber } from './El saber/Saber';
import { Amigos } from './Temas de interes/Amigos';
import { CrecimientoPersonal } from './Temas de interes/CrecimientoPersonal';
import { VidaFamiliar } from './Temas de interes/VidaFamiliar';
import { Parejas } from './Temas de interes/Parejas';
import { Esther } from './paginas/historias/Esther';
import { Elbuensamaritano } from './paginas/historias/Elbuensamaritano';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Comienzo />} />
        <Route path='/Explorador' element={<Explorador />} />
        <Route path='/Adivinanza' element={<Adivinanza />} />
        <Route path='/Historia' element={<Historia />} />
        <Route path='/Saber' element={<Saber />} />
        <Route path='/Amigo' element={<Amigos />} />
        <Route path='/Crecimiento' element={<CrecimientoPersonal />} />
        <Route path='/Vidafamiliar' element={<VidaFamiliar />} />
        <Route path='/Parejas' element={<Parejas />} />
        <Route path='/Esther' element={<Esther/>}/>
        <Route path='/Elbuensamaritano' element={<Elbuensamaritano/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
