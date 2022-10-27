
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-bar' >
     
        
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sobreMi">Sobre mi</NavLink>
        <NavLink to="/Proyectos">Proyectos</NavLink>
        
       
    </div>
  )
    
}


export default Navbar