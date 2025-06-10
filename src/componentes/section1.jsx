import { useState } from "react";
import '../App.css'
import Icon from "./iconos";

function Section1 ({id}){
    return(
        <>
        <main>
            <section className="Section1" id={id} >

                <div className="contenedorSobreMi">
                    <h2>Sobre mi</h2>
                    <p>Soy estudiante de Ingeniería en Informática, apasionado por la tecnología y su constante evolución. Me encanta aprender sobre las herramientas y lenguajes más recientes, siempre buscando cómo aplicarlos en proyectos reales. A lo largo de mi formación, he trabajado en varios proyectos, tanto individuales como en equipo, lo que me ha permitido desarrollar habilidades técnicas y de colaboración.</p>
                    <p>Aunque me inclino más hacia el desarrollo backend, entiendo que una aplicación o página web debe ser funcional y fácil de usar, por lo que también valoro un buen frontend. He trabajado con diferentes tecnologías, algunas de las cuales he aprendido mediante cursos, y en varios de mis proyectos he incluido documentación detallada para asegurar su claridad y mantenimiento.</p>
                    <p>Actualmente, tengo un nivel básico de inglés, pero estoy en constante aprendizaje, tanto del idioma como de nuevas tecnologías. Me esfuerzo cada día por mejorar y ampliar mis conocimientos, ya que creo que la adaptación y el crecimiento son claves en este campo.</p>
                </div>

                <div className="contenedorHabilidades">
                    <h2>HABILIDADES</h2>
                    <Icon name="html5" className="iconos"/>
                    <Icon name="css" className="iconos"/>
                    <Icon name="sass" className="iconos"/>
                    <Icon name="js" className="iconos"/>
                    <Icon name="react" className="iconos"/>
                    <Icon name="node"className="iconos"/>
                    <Icon name="github" className="iconos"/> 
                    <Icon name="php" className="iconos"/> 
                </div>
            </section>
            </main>
        </>
    )
}
export default Section1;