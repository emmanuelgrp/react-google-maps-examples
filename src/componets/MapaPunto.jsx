import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const isValidLatLng = (point) =>
  point && typeof point.lat === 'number' && typeof point.lng === 'number';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 23.2494,
  lng: -106.4111, // Mazatlán, Sinaloa
};

const MapaPunto = () => {
  const [selected, setSelected] = useState(null);
  const markerPosition = { lat: 23.2494, lng: -106.4111 };

  return (
    <>
      <h1>Mapa con Punto</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          {isValidLatLng(markerPosition) && (
            <>
              <Marker
                position={markerPosition}
                onClick={() => setSelected(markerPosition)}
              />
              {selected && (
                <InfoWindow
                  position={selected}
                  onCloseClick={() => setSelected(null)}
                >
                  <div
                    style={{
                      backgroundColor: '#333',
                      color: '#FFF',
                      padding: '10px',
                      borderRadius: '5px',
                    }}
                  >
                    <h2 style={{ fontWeight: '600' }}>Mazatlán</h2>
                    <p>Donde se rompen las olas</p>
                  </div>
                </InfoWindow>
              )}
            </>
          )}
        </GoogleMap>
      </div>
    </>
  );
};

export default MapaPunto;
