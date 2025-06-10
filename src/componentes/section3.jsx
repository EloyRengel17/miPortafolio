import { useState } from "react";
import Icon from "./iconos";
import "../App.css";

const otrosProyectos=[
    {   
        id:1,
        titulo:"Mi Portafolio",
        descripcion:  "Portafolio digital diseñado para mostrar mi perfil profesional y habilidades técnicas a empresas del sector.Combina diseño atractivo con funcionalidad para presentar mis proyectos y experiencia de manera efectiva.",
        lenguajes: {
            uno: "React",
            dos: "Css",
           
          },
          link:"https://eloy-portafolio.netlify.app/",
          github:"",
    },
    {   
        id:2,
        titulo:"Proyecto Acceso",
        descripcion:  "Este proyecto demuestra mis habilidades en backend mediante un sistema de login seguro, implementando validaciones de formulario y conexión a base de datos",
        lenguajes: {
            uno: "React.js",
            dos: "Node.js",
            tres: "SQL",
            cuatro:"CSS"
          },
          link:"",
          github:"https://github.com/EloyRengel17/ProyectoAcceso",
    },
    {   
        id:2,
        titulo:"Tienda",
        descripcion:  "PAgina desarrollada con React para demostrar habilidades en frameworks frontend. Implementa funcionalidades como catalgo de productos y los detalles de este mismo",
        lenguajes: {
            uno: "React",
           
          },
          link:"https://tienda-eloy.netlify.app/",
          github:"https://github.com/EloyRengel17/Tienda-eloy.git",
    },

]

function Section3() {

    function visitarProyecto(link){
        window.open(link,"_blanck");
    }
  return (
  <>
  <main>
    <section className="Section3">
      <h1>Otros Proyectos</h1>
      <div className="contendorGenearalotrosProyectos">
        {otrosProyectos.map((proyecto) => (
          <div className="otrosProyectos" key={proyecto.id}> 
            <h2>{proyecto.titulo}</h2>
            <p>{proyecto.descripcion}</p>
            <div>
              {proyecto.link === "" ? ( <button className="botonVerProyectos" onClick={() => visitarProyecto(proyecto.github)}> Ver código <span>{"     "}<Icon name="github" /></span></button>) :
               (<><button className="botonVerProyectos" onClick={() => visitarProyecto(proyecto.link)}> Ver página <span>{"     "}<Icon name="link" /></span></button>
               <button className="botonVerProyectos" onClick={() => visitarProyecto(proyecto.github)}> Ver código <span>{"     "}<Icon name="github" /></span></button> </>
              )}
            </div>
            <div className="herramientasUtilizadas">
              {/*codigo capaz de reconocer las herramientas agregadas o no para mostrarlas en cada proyecto y no dejarlo en blanco  */}
              {Object.entries(proyecto.lenguajes).map(([key, value]) => 
                value && <p key={key}>{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  </>
);
}
export default Section3;
