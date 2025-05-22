import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, DrawingManager } from '@react-google-maps/api';

const libraries = ['drawing'];

const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

const defaultCenter = {
  lat: 23.2494,
  lng: -106.4116
};

function MapDrawingTools() {
  const [map, setMap] = useState(null);
  const [drawnShapes, setDrawnShapes] = useState([]);
  const drawingManagerRef = useRef(null);
  const [drawingOptions, setDrawingOptions] = useState(null);

  const onMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
    if (window.google && window.google.maps) {
      setDrawingOptions({
        drawingControl: true,
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ['polygon', 'rectangle', 'polyline']
        },
        polygonOptions: {
          fillColor: '#FF0000',
          strokeColor: '#FF0000',
          fillOpacity: 0.35,
          strokeWeight: 2,
          clickable: true,
          editable: true,
          zIndex: 1
        },
        rectangleOptions: {
          fillColor: '#0000FF',
          strokeColor: '#0000FF',
          fillOpacity: 0.35,
          strokeWeight: 2,
          clickable: true,
          editable: true,
          zIndex: 1
        },
        polylineOptions: {
          strokeColor: '#00FF00',
          strokeOpacity: 1.0,
          strokeWeight: 2,
          clickable: true,
          editable: true,
          zIndex: 1
        }
      });
    }
  }, []);

  const onMapUnmount = useCallback(() => {
    setMap(null);
    setDrawingOptions(null);
  }, []);

  const handleShapeComplete = useCallback((shapeData) => {
    setDrawnShapes(prev => [...prev, shapeData]);
  }, []);

  const onPolygonComplete = useCallback((polygon) => {
    const path = polygon.getPath().getArray().map(coord => ({
      lat: coord.lat(),
      lng: coord.lng()
    }));
    handleShapeComplete({ type: 'polygon', path, overlay: polygon });
  }, [handleShapeComplete]);

  const onRectangleComplete = useCallback((rectangle) => {
    const bounds = rectangle.getBounds();
    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();
    const coords = [
      { lat: northEast.lat(), lng: southWest.lng() },
      { lat: northEast.lat(), lng: northEast.lng() },
      { lat: southWest.lat(), lng: northEast.lng() },
      { lat: southWest.lat(), lng: southWest.lng() }
    ];
    handleShapeComplete({ type: 'rectangle', path: coords, overlay: rectangle });
  }, [handleShapeComplete]);

  const onPolylineComplete = useCallback((polyline) => {
    const path = polyline.getPath().getArray().map(coord => ({
      lat: coord.lat(),
      lng: coord.lng()
    }));
    handleShapeComplete({ type: 'polyline', path, overlay: polyline });
  }, [handleShapeComplete]);

  return (
    <div className="map-drawing-tools-container">
      <h1>Google Maps Drawing Application</h1>
      <div className="map-view-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={13}
          onLoad={onMapLoad}
          onUnmount={onMapUnmount}
        >
          {drawingOptions && (
            <DrawingManager
              onLoad={manager => { drawingManagerRef.current = manager; }}
              drawingMode={null}
              options={drawingOptions}
              onPolygonComplete={onPolygonComplete}
              onRectangleComplete={onRectangleComplete}
              onPolylineComplete={onPolylineComplete}
            />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}

export default MapDrawingTools;
