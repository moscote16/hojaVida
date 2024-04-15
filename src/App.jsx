import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { FormacionApp } from './assets/router/FormacionApp'
import { PortafolioApp } from './assets/router/PortafolioApp'
import { EperienciaApp } from './assets/router/EperienciaApp'
import { PerfilPageApp } from './assets/router/PerfilPageApp'
import { ContactoApp } from './assets/router/ContactoApp'
import { MenuApp } from './assets/components/MenuApp'


import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuApp/>
      <Routes>
      <Route path="/" element={<PerfilPageApp></PerfilPageApp>}></Route>
      <Route path="contacto" element={<ContactoApp></ContactoApp>}></Route>
      <Route path="eperinecia" element={<EperienciaApp></EperienciaApp>}></Route>
      <Route path="portafolio" element={<PortafolioApp></PortafolioApp>}></Route>
      <Route path="formacion" element={<FormacionApp></FormacionApp>}></Route>
      
      </Routes>
    </>
  )
}

export default App
