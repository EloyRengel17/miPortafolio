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
          link:""
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
          link:""
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
                <div className="otrosProyectos" key={proyecto.id} onClick={()=> visitarProyecto(proyecto.link)}> 
                     <h2>   {proyecto.titulo} {"   "}{" "}   <span>  {" "}   {"   "}  <Icon name="link" />{" "}   </span>{" "}      </h2>
                        <p>{proyecto.descripcion}</p>
        <div className="herramientasUtilizadas">
                    <p>{proyecto.lenguajes.uno}</p>
                    <p>{proyecto.lenguajes.dos}</p>
          </div> 
                </div>

            ))}
          
        </div>
      </section>
    </>
  );
}
export default Section3;
