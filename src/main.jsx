import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './componets/Home.jsx'
import About from './componets/About.jsx'
import Contact from './componets/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // <-- Importa BrowserRouter y Routes
import Toolbar from '@mui/material/Toolbar'; // <-- Importa Toolbar


import ResponsiveAppBar from './third-party/mui/ResponsiveAppBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar /> {/* Tu barra de navegación fija */}
      <Toolbar /> {/* Este Toolbar vacío ocupa el espacio del AppBar */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
