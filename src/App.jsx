import { useState } from 'react'

import Header from './componentes/header.jsx'
import Navegacion from './componentes/navegacion.jsx'
import Section1 from './componentes/section1.jsx'
import Section2 from './componentes/section2.jsx'
import Section3 from './componentes/section3.jsx'
import Contacto from "./componentes/contacto.jsx"
import Footer from './componentes/footer.jsx'
//import ThreeDCardScene from './componentes/prueba.jsx' // Importa el nuevo componente de la escena 3D
import './App.css'

function App() {
  return (
    <>
      {/*} <ThreeDCardScene/> {*/}
      <Navegacion/>
      <Header/>
      <Section1 id="sobre-mi"/>
      <Section2 id="proyectos"/>
      <Section3/>
      <Contacto id="contacto"/>
      {/* Aquí se renderiza la escena 3D de la tarjeta */}
      
      <Footer/>
    </>
  )
}

export default App
