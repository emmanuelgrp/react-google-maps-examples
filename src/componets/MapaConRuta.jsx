import React, { useState } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '8px',
};

const center = { lat: 19.4326, lng: -99.1332 };
const origin = { lat: 19.4326, lng: -99.1332 };
const destination = { lat: 19.7036, lng: -99.1013 };

const GoogleMapsRoute = () => {
  const [directions, setDirections] = useState(null);
  const [requestMade, setRequestMade] = useState(false);

  return (
    <>
      <h1 className="text-xl font-bold">Ruta de Ciudad de México a Ecatepec</h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {!requestMade && (
          <DirectionsService
            options={{
              origin,
              destination,
              travelMode: window.google.maps.TravelMode.DRIVING,
            }}
            callback={(result, status) => {
              console.log('Status:', status);
              if (status === 'OK') {
                setDirections(result);
              } else {
                console.error('Error al generar la ruta: ' + status);
              }
              setRequestMade(true);
            }}
          />
        )}

        {directions && (
          <DirectionsRenderer
            options={{ directions }}
          />
        )}
      </GoogleMap>
    </>
  );
};

export default GoogleMapsRoute;
