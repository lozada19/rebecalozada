
import { Routes, Route} from 'react-router';
import './App.css';

import Navbar from './components/Navbar';
import Curriculum from './pages/Curriculum';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import SobreMi from './pages/SobreMi';



function App() {
  return (
    <div className="App">

    
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/sobreMi" element={<SobreMi/>}/> 
        <Route path='/curriculum' element={<Curriculum/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
       </Routes>
        
    
    </div>
  );
}

export default App;
