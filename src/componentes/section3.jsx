import { useState } from "react";
import Icon from "./iconos";
import "../App.css";

const otrosProyectos=[
    {   
        id:1,
        titulo:"Mi Portafolio",
        descripcion:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci voluptatibus suscipit recusandae consequuntur ut. Aliquam eveniet sit debitis odit vel ea explicabo, voluptates, atque qui obcaecati aspernatur, perferendis amet.",
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
        descripcion:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci voluptatibus suscipit recusandae consequuntur ut. Aliquam eveniet sit debitis odit vel ea explicabo, voluptates, atque qui obcaecati aspernatur, perferendis amet.",
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
        descripcion:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci voluptatibus suscipit recusandae consequuntur ut. Aliquam eveniet sit debitis odit vel ea explicabo, voluptates, atque qui obcaecati aspernatur, perferendis amet.",
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
  </>
);
}
export default Section3;
