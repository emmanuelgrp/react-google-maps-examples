## ¿Qué es la API de Google Maps y para qué se utiliza?

La API de Google Maps es un servicio proporcionado por Google que permite integrar mapas interactivos dentro de aplicaciones web o móviles. Es utilizada para mostrar mapas, ubicaciones, marcadores, rutas, información geográfica, y otros elementos relacionados con mapas en tiempo real. Su uso es común en aplicaciones de navegación, comercio electrónico, turismo, bienes raíces, entre otros.

---

## ¿Cómo se integra con React?

La integración con React se hace principalmente utilizando la biblioteca `@react-google-maps/api`, que ofrece una forma declarativa de usar Google Maps como componentes dentro de React. Los pasos generales son:

1. Instalar la librería:
   ```bash
   npm install @react-google-maps/api
   ```

2. Cargar el script de Google Maps con tu API Key usando el componente `<LoadScript>`.

3. Renderizar el componente `<GoogleMap>` y otros como `<Marker>`, `<MarkerClustererF>`, etc., dentro de tu aplicación React.

---

## ¿Qué es una clave API y cómo se obtiene?

Una clave API (API Key) es un código único que identifica a la aplicación que realiza una solicitud a un servicio externo, como Google Maps. Sirve para autenticar y monitorear el uso de la API.

### Pasos para obtener una API Key de Google Maps:

1. Ir a la [Google Cloud Console](https://console.cloud.google.com/).
2. Crear un nuevo proyecto o seleccionar uno existente.
3. Activar la API de Google Maps JavaScript.
4. Ir a **APIs y servicios > Credenciales** y hacer clic en **Crear credencial > Clave de API**.
5. Copiar la clave generada.
6. (Opcional) Aplicar restricciones de uso por dominios o direcciones IP para mayor seguridad.

---

## ¿Dónde colocar la API Key en el proyecto?

Para mantener segura tu clave y evitar que se exponga en el código fuente, debes agregarla a un archivo `.env.local` ubicado en la raíz del proyecto.

### Ejemplo:

Crea un archivo llamado `.env.local` (si no existe ya) y agrega esta línea:

```
VITE_GOOGLE_MAPS_API_KEY=TU_API_KEY
```

Luego, puedes acceder a esta clave en tu proyecto utilizando:

```js
import.meta.env.VITE_GOOGLE_MAPS_API_KEY
```

> Nota: Asegúrate de reiniciar el servidor de desarrollo después de modificar el archivo `.env.local`.

---

## ¿Qué hace MarkerClustererF?

`MarkerClustererF` es un componente proporcionado por la biblioteca `@react-google-maps/api` que agrupa automáticamente los marcadores cercanos en un mapa. Esto mejora la visualización y rendimiento cuando hay muchos puntos en una misma área.