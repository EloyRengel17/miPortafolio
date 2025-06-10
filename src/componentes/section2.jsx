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
      "Este proyecto es una aplicación web que consume la API de Rick and Morty, permitiendo visualizar, buscar y filtrar todos los personajes disponibles. Desarrollado principalmente con JavaScript, se complementó con HTML y CSS para garantizar una interfaz intuitiva y atractiva.",
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
      "ste proyecto recrea una landing page para una inmobiliaria, desarrollada como ejercicio práctico para dominar HTML y explorar diversas técnicas de CSS. El enfoque principal fue implementar diseños y aplicar estilos avanzados.",
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
    <main>
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
      </main>
    </>
  );
}
export default Section2;
