import React from 'react';
import { LoadScript } from '@react-google-maps/api';

const libraries = ['places', 'drawing'];

const GoogleMapsProvider = ({ children }) => {
  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
      loadingElement={<p className="text-gray-500">Cargando Google Maps...</p>}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;