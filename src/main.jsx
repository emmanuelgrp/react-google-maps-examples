import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ResponsiveAppBar from './third-party/mui/ResponsiveAppBar';
import Toolbar from '@mui/material/Toolbar';
import App from './App';

import MapaPunto from './componets/MapaPunto.jsx';
import MapaConRuta from './componets/MapaConRuta.jsx';
import MapaConClusters from './componets/MapaConClusters.jsx';
import MapDrawingTools from './componets/MapDrawingTools.jsx';
import MapRoutesRendering from './componets/MapRoutesRendering.jsx';

import GoogleMapsProvider from './providers/GoogleMapsProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar /> 
      <Toolbar /> 
      
      <GoogleMapsProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mapa-con-punto" element={<MapaPunto />} />
          <Route path="/mapa-con-ruta" element={<MapaConRuta />} />
          <Route path="/mapa-con-cluster" element={<MapaConClusters />} />
          <Route path="/mapa-con-drawing" element={<MapDrawingTools />} />
          <Route path="/mapa-con-direcciones" element={<MapRoutesRendering />} />
        </Routes>
      </GoogleMapsProvider>
    </BrowserRouter>
  </StrictMode>
);
