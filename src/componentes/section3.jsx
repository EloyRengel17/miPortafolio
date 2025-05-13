import { useState } from "react";
import Icon from "./iconos";
import "../App.css";

const otrosProyectos=[
    {   
        id:1,
        titulo:"proyecto1",
        descripcion:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci voluptatibus suscipit recusandae consequuntur ut. Aliquam eveniet sit debitis odit vel ea explicabo, voluptates, atque qui obcaecati aspernatur, perferendis amet.",
        lenguajes: {
            uno: "HTML",
            dos: "Css",
            tres: "",
          },
          link:"",
          github:"",
    },
    {   
        id:2,
        titulo:"proyecto2",
        descripcion:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci voluptatibus suscipit recusandae consequuntur ut. Aliquam eveniet sit debitis odit vel ea explicabo, voluptates, atque qui obcaecati aspernatur, perferendis amet.",
        lenguajes: {
            uno: "HTML",
            dos: "Css",
            tres: "",
          },
          link:"",
          github:"",
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
           
        
            {otrosProyectos.map((proyecto)=>(
                <div className="otrosProyectos" key={proyecto.id} > 
                     <h2>   {proyecto.titulo}      </h2>
                        <p>{proyecto.descripcion}</p>
                        <div>
                           <button className="botonVerProyectos" onClick={()=> visitarProyecto(proyecto.link)}> Ver pagina  <span> {"     "}<Icon name="link" /> </span>  </button>
                           <button className="botonVerProyectos" onClick={()=> visitarProyecto(proyecto.github)}>  Ver codigo  <span> {"     "}<Icon name="github" /> </span> </button>
                         </div>
        <div className="herramientasUtilizadas">
                {/*codigo sacado de la ia para poder enfretar mi errro despues de horas de intentar areglarlo por mi solo*/ }
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
