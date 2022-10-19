import React from 'react'
import background2 from "../images/aryan.jpg"
import logoIronhack from "../images/logo-ironhack.png"

function SobreMi() {
  return (
    <div className='container'>

      <div className='container-about-me'>
       
        <img className='img-about-me' src={background2} alt="" />
      
        <p className='paragraph-about-me'>Soy desarrolladora web recién graduada en Ironhack. Mi misión es encontrar un rol como Frontend o Fullstack que maximice mis oportunidades de crecimiento y desarrollo de habilidades a través del trabajo con un equipo excepcional.</p>
      </div>

      <div className='container-studies'>
        <p className='paragraph-studies' >Realice un bootcamp intensivo de desarrollo Web de 9 semanas <br/> Front end technologies : HTML | CSS | JavaScript(ES6) | React | Handlebars <br/>
        Back end technologies : NodeJS | ExpressJS | MongoDB | Axios <br/>  Version Control : Git | GitHub9 </p>
        
        <img className='logo-ironhack' src={logoIronhack} alt="" />
      </div>
  
      
     
    </div>
  )
}

export default SobreMi