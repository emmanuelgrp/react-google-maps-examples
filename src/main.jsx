import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './componets/Home.jsx'
import About from './componets/About.jsx'
import Contact from './componets/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // <-- Importa BrowserRouter y Routes


import ResponsiveAppBar from './third-party/mui/ResponsiveAppBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar />  {/* Tu barra de navegación que ya tiene los links */}
      <Routes>
        {/* Define las rutas con los componentes correspondientes */}
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
