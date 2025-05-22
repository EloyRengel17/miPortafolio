import React from 'react';
import curriculum from '../assets/curriculum.pdf';
import '../App.css';

function Navegacion() {
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

    return (
        <nav>
            <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>Inicio</a>
            <a href="#sobre-mi" onClick={(e) => handleNavClick(e, 'sobre-mi')}>Sobre mi</a>
            <a href="#proyectos" onClick={(e) => handleNavClick(e, 'proyectos')}>Proyectos</a>
            <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contacto</a>
            <button onClick={verCurriculum}>CV</button>
        </nav>
    );
}

export default Navegacion;