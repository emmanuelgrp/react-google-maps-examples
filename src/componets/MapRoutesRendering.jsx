import React, { useState } from 'react';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 20.6736,
  lng: -103.344
};

const MapRoutesRendering = () => {
  const [directions, setDirections] = useState(null);

  const calculateRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: 'Centro Histórico, Guadalajara, Jalisco',
        destination: 'Zapopan, Jalisco',
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error al calcular la ruta: ${status}`);
        }
      }
    );
  };

  return (
    <>
      <h1>Ruta entre dos puntos</h1>
      <button onClick={calculateRoute}>Calcular Ruta</button>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </>
  );
};

export default MapRoutesRendering;
