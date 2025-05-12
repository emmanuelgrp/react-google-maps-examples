import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import Mapa
import MapaPunto from './MapaPunto.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MapaPunto />
  </StrictMode>,
)
