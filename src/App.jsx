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
import { Elihú } from './paginas/historias/Elihú';
import { Lais } from './paginas/historias/Lais';
import { Sulamita } from './paginas/historias/Sulamita';
import { Autodisciplina } from './paginas/Desarrollo/Autodisciplina';
import { Paz } from './paginas/Desarrollo/paz';
import { Josue } from './paginas/historias/Josue';
import { Salmo1 } from './paginas/Desarrollo/Salmo1';
import { JovenI } from './paginas/Desarrollo/JovenInsensato';
import { Discernimiento } from './paginas/Desarrollo/Discernimiento';
import { Salmo27 } from './paginas/Desarrollo/salmo27';
import { AmistadV } from './paginas/Amigos/AmistadVerdadera';
import { Arcangel } from './paginas/historias/Arcangel';
import { David } from './paginas/historias/David';





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
        <Route path='/Elihú' element={<Elihú/>}/>
        <Route path='/Lais' element={<Lais/>}/>
        <Route path='/Sulamita' element={<Sulamita/>}/>
        <Route path='/Autodisciplina' element={<Autodisciplina/>}/>
        <Route path='/Paz' element={<Paz/>}/>
        <Route path='/Josue' element={<Josue/>}/>
        <Route path='/Salmo1' element={<Salmo1/>}/>
        <Route path='/joven' element={<JovenI/>}/>
        <Route path='/Discernimiento' element={<Discernimiento/>}/>
        <Route path='/Salmo27' element={<Salmo27/>}/>
        <Route path='/AmistadV' element={<AmistadV/>}/>
        <Route path='/ArcangelMiguel' element={<Arcangel/>}/>
        <Route path='/David' element={<David/>}/>
       

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
