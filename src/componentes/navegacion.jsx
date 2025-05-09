import { useState } from "react";
import curriculum from '../assets/curriculum.pdf'
import '../App.css'

function Navegacion(){
    function verCurriculum() {
        window.open(curriculum,"_blank")
    }
    return(
        <>  
        <nav>
            <a href="#">incio</a>
            <a href="#">Sobre mi</a>
            <a href="#">Proyectos</a>
            <a href=""> Contacto</a>
           <button onClick={verCurriculum}>CV</button>
        </nav>
        </>
    )
}
export default Navegacion;