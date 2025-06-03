import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Icon from "./iconos";
import "../App.css";

function Contacto({ id }) {
  const [isMobile, setIsMobile] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

     

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c38fd5b9-5650-4d9e-9c51-45274c05a9fa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Enviado con éxito!",
        text: "Presiona el botón para cerrar",
        icon: "success"
});
      event.target.reset();
    } else {
      console.log("hay un error". result);
      setResult(data.message);
    }
  };

  return (
    <>
    <main>
      <div className="section4">
        <form onSubmit={onSubmit} id={id} className="contacto">
        
          <h1>Ponte En Contacto</h1>

          <div className="nombre">
            <p>Nombre</p>
            <input type="text" placeholder="Nombre:" name="name" />
          </div>

          <div className="Correo">
            <p>Correo</p>
            <input type="email" placeholder="Correo:" name="email" />
          </div>
          <div className="mensaje">
            <p>Mensaje</p>
           <textarea name="message" id="mensaje" placeholder="Mensaje:"></textarea>
          </div>
          <button type="submit">Enviar</button>
        
        </form>
         {!isMobile && (
        <div className="derecha-section4">
          <h1><Icon name="comment" className="commet"  /></h1>
        </div>
         )}
      </div>
      </main>
    </>
  );
}
export default Contacto;
//utilice esta libreria (npm install react-responsive)
// utilice esta libreria (npm install sweetalert2) para mostrar modal una vez el proceso de contacto sea exitoso 