// PASO 1: ¿Qué es la API de Google Maps?
// La API de Google Maps permite integrar mapas interactivos en aplicaciones web o móviles. 
// Proporciona funcionalidades como visualización de mapas, marcadores, rutas y más.

// PASO 2: ¿Cómo se integra con React?
// Utilizamos el paquete @react-google-maps/api, una librería que facilita el uso de Google Maps en aplicaciones React.

// PASO 3: ¿Qué es una clave API y cómo se obtiene?
// Una clave API permite autenticar solicitudes a los servicios de Google. 
// Se obtiene desde Google Cloud Console siguiendo estos pasos:
// 1. Accede a https://console.cloud.google.com/.
// 2. Crea un nuevo proyecto o selecciona uno existente.
// 3. Habilita la API de Google Maps Platform.
// 4. Genera una clave API y habilita restricciones de uso para mayor seguridad.

// PASO 4: Crear el proyecto React
// npm create vite@latest mapa-google -- --template react
// cd mapa-google
// npm install

// PASO 5: Instalar el paquete necesario
// npm install @react-google-maps/api

// PASO 6: Crear el archivo .env
// En la raíz del proyecto, crea un archivo .env con el siguiente contenido:
// REACT_APP_GOOGLE_MAPS_API_KEY=tu_clave_aqui

// PASO 7: Componente MapaPunto en React
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapaPunto = () => {
    const [selected, setSelected] = useState(null);
    const center = { lat: 23.2494, lng: -106.4111 }; // Mazatlán, Sinaloa
    const markerPosition = { lat: 23.2494, lng: -106.4111 }; // Posición del marcador

    return (
        <div className="p-4" style={{ width: '800px' }}>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '400px' }}
                    center={center}
                    zoom={12}
                >
                    {/* Marcador en el mapa */}
                    <Marker 
                        position={markerPosition} 
                        onClick={() => setSelected(markerPosition)} // Selecciona la posición al hacer click
                    />
                    {selected && (
                        <InfoWindow 
                            position={selected} // Posición del InfoWindow basada en el marcador seleccionado
                            onCloseClick={() => setSelected(null)} // Cierra el InfoWindow al hacer click
                        >
                            <div style={{ backgroundColor: '#333', color: '#FFF', padding: '10px', borderRadius: '5px' }}>
                                <h2 className="font-semibold">Mazatlán</h2>
                                <p>Donde se rompen las olas</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MapaPunto;


// PASO 8: Ejecutar el proyecto
// npm start (CRA) o npm run dev (Vite)

// PASO 9: Subir a GitHub
// - Inicializa un repositorio: git init
// - Añade los archivos: git add .
// - Crea un commit: git commit -m "Integración Google Maps con React"
// - Sube el repositorio: git push origin main

// PASO 10: Incluye un README.md
// - Explica el proyecto, cómo configurarlo y ejecutarlo localmente.
