import { useState } from "react";
import Icon from "./iconos";
import "../App.css";

function Contacto({ id }) {
  return (
    <>
      <div className="section4">
        <div id={id} className="contacto">
          <h1>Ponte En Contacto</h1>

          <div className="nombre">
            <p>Nombre</p>
            <input type="text" placeholder="Nombre:" />
          </div>

          <div className="Correo">
            <p>Correo</p>
            <input type="text" placeholder="Correo:" />
          </div>
          <div className="mensaje">
            <p>Mensaje</p>
           <textarea name="mensaje" id="mensaje" placeholder="Mensaje:"></textarea>
          </div>
          <button>Enviar</button>
        </div>

        <div className="derecha-section4">
          <h1><Icon name="comment" className="commet"  /></h1>
        </div>
      </div>
    </>
  );
}
export default Contacto;
