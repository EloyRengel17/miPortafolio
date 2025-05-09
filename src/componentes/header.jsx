import { useState } from "react";
import Icon from './iconos';
import imagenYo from "../assets/yo.png"
import '../App.css'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header(){
    function linkedin(){
        window.open("https://www.linkedin.com/in/eloy-rengel/", "_blank")
    }
    return(
        <>
            <header>
          
                <h1>Eloy A<span>.</span> Rengel</h1>
                <h3>Programador web tatatata </h3> 
                 <img src={imagenYo} alt="yo" /> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                     <p>repellat culpa? Officia perferendis iure aspernatur quam animi!</p>
                     <Icon name="email" className="iconos" /> 
                     <Icon name="linkedin" className="iconos" onClick={linkedin}/> 
                    
            </header>
        </>
    )
}
export default Header;