import React from 'react';
import { GoogleMap, MarkerF, MarkerClustererF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '8px',
};

const center = {
  lat: 23.2494,
  lng: -106.4111,
};

const generateMarkers = () => {
  const markers = [];
  for (let i = 0; i < 100; i++) {
    markers.push({
      lat: center.lat + Math.random() * 0.1 - 0.05,
      lng: center.lng + Math.random() * 0.1 - 0.05,
    });
  }
  return markers;
};

const MapaConClusters = () => {
  const markers = generateMarkers();

  return (
    <>
      <h1 className="text-xl font-bold">Mapa con Clusters en Mazatlán</h1>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <MarkerClustererF>
          {(clusterer) =>
            markers.map((pos, index) => (
              <MarkerF key={index} position={pos} clusterer={clusterer} />
            ))
          }
        </MarkerClustererF>
      </GoogleMap>
    </>
  );
};

export default MapaConClusters;