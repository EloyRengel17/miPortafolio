import { useState } from "react";
import Icon from './iconos';
import '../App.css'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header(){
   
    function irlink(link){
        window.open(link,"_blank")
    }
    return(
        <>
            <header>
          
                <h1>Eloy A<span>.</span> Rengel</h1>
                <h3>Programador web tatatata </h3> 
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                     <p>repellat culpa? Officia perferendis iure aspernatur quam animi!</p>
                     <Icon name="email" className="iconos"   onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=eloypanita@gmail.com")} /> 
                     <Icon name="linkedin" className="iconos" onClick={()=> irlink("https://www.linkedin.com/in/eloy-rengel/")}/> 
                     <Icon name="github" className="iconos" onClick={()=> irlink("https://github.com/EloyRengel17")}/> 
                    
            </header>
        </>
    )
}
export default Header;