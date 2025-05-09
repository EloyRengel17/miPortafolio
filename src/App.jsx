import { useState } from 'react'

import Header from './componentes/header.jsx'
import Navegacion from './componentes/navegacion.jsx'
import Section1 from './componentes/section1.jsx'
import Section2 from './componentes/section2.jsx'
import Section3 from './componentes/section3.jsx'
import NuecoComponente from "./componentes/componentePueba.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navegacion/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <NuecoComponente/>
    </>
  )
}

export default App
