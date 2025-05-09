import { useState } from "react";
import Icon from "./iconos";
import "../App.css";
import apiRick from "../assets/image1.png";
import bienesRaices from "../assets/imagebr.png";

const proyectosDestacables = [
  {
    id: 1,
    titulo: "API Rick and Morty",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci voluptatibus suscipit recusandae consequuntur ut. Aliquam eveniet sit debitis odit vel ea explicabo, voluptates, atque qui obcaecati aspernatur, perferendis amet.",
    lenguajes: {
      uno: "JAVASCRIPT",
      dos: "HTML",
      tres: "Css",
    },
    img: apiRick,
    link:"https://eloyapirickandmorty.netlify.app/",
  },
  {
    id: 2,
    titulo: "bienes raices",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci voluptatibus suscipit recusandae consequuntur ut. Aliquam eveniet sit debitis odit vel ea explicabo, voluptates, atque qui obcaecati aspernatur, perferendis amet.",
    lenguajes: {
      uno: "HTML",
      dos: "Css",
      tres: "",
    },
    img: bienesRaices,
    link:"https://litekeys-proyecto-universidad.netlify.app/",
  },

];

function Section2() {
    function visitarProyecto(link){
        window.open(link,"_blanck");
    }

  
  return (
    <>
      <section className="Section2">
        <h1>Proyectos destacables</h1>
        {proyectosDestacables.map((proyecto) => (
          <div key={proyecto.id} className="contenorProyectosDestacables" onClick={()=> visitarProyecto(proyecto.link)}>
            <div className="descripcion">
              <h2>   {proyecto.titulo} {"   "} <span> {"   "}<Icon name="link" /> </span>   </h2>  
               <p>{proyecto.descripcion}</p>
                
               <div className="herramientasUtilizadas"> 
                <p>{proyecto.lenguajes.uno}</p>
                <p>{proyecto.lenguajes.dos}</p>
                <p>{proyecto.lenguajes.tres}</p>
                
               </div>
               </div>
               <div className="imagenProyecto"> 

               <img  src={proyecto.img}   alt="Imagen-pagina"  className="imagenProyectoDestacable"   />
             
             
              
           
               </div>
             
            
          </div>
        ))}
      

      
      </section>
    </>
  );
}
export default Section2;
