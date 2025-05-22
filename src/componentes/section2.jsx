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
    github:"https://github.com/EloyRengel17/ConexionApi",
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
     github:"",
  },

];

function Section2({id}) {
    function visitarProyecto(link){
        window.open(link,"_blanck");
    }

  
  return (
    <>
      <section className="Section2" id={id}>
        <h1>Proyectos destacables</h1>
        {proyectosDestacables.map((proyecto) => (
          <div key={proyecto.id} className="contenorProyectosDestacables" >
            <div className="descripcion">
              <h2>   {proyecto.titulo} {"   "}  </h2>  
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
