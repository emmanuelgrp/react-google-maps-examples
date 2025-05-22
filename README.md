## ¿Qué es la API de Google Maps y para qué se utiliza?

La API de Google Maps es un servicio de Google que permite integrar mapas interactivos en aplicaciones web o móviles. Se utiliza para mostrar mapas, ubicaciones, rutas, marcadores, información geográfica y mucho más. Es ampliamente usada en sistemas de logística, navegación, turismo, bienes raíces, entre otros.

## ¿Cómo se integra con React?

Se integra utilizando bibliotecas como `@react-google-maps/api`, que permite usar componentes de Google Maps como `<GoogleMap>`, `<Marker>`, y `<MarkerClustererF>` dentro de una aplicación React. Se usa un componente `<LoadScript>` para cargar la API y luego se renderiza el mapa dentro de un componente React.

## ¿Qué es una clave API y cómo se obtiene?

Una clave API (API key) es un identificador único que permite acceder a servicios de Google de forma segura y controlada. Se obtiene desde la consola de Google Cloud, habilitando la API de Google Maps y generando una nueva credencial tipo "clave de API". Se puede restringir su uso por dominio o dirección IP para mayor seguridad.

## ¿Qué hace MarkerClustererF?

`MarkerClustererF` es un componente que agrupa automáticamente marcadores cercanos en un mapa para evitar la sobrecarga visual. En lugar de mostrar múltiples marcadores muy juntos, los combina en un solo marcador agrupado que se divide al hacer zoom. Esto mejora la experiencia de usuario y el rendimiento en mapas con muchos puntos.