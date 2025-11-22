import {useState} from 'react';
import curriculum from '../assets/CvEloyRengelultimo2025.pdf';
import imagen from '../assets/miFoto.jpg'

import { useTranslation } from 'react-i18next'; //libreria para traducir la pagina

import '../App.css';
import { div } from 'three/tsl';

function Navegacion() {
    const { t, i18n } = useTranslation(); //const para el uso de la libreria de traduccion

     
    
    const verCurriculum = () => {
        window.open(curriculum, "_blank");
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    
    //funcion para el uso de la libreria para trudir la pagina
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
    
    

    return (
    <>
       
        <nav>
          
       
            <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>Inicio</a>
            <a href="#sobre-mi" onClick={(e) => handleNavClick(e, 'sobre-mi')}>Sobre mi</a>
            <a href="#proyectos" onClick={(e) => handleNavClick(e, 'proyectos')}>Proyectos</a>
            <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contacto</a>
            <button className='verCurriculum' onClick={verCurriculum}>CV</button>
            
            
        </nav>
        
    </>

    );
}

export default Navegacion;
