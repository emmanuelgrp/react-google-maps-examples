# Proyecto React con React Router y MUI 
Este proyecto es una aplicación simple desarrollada con React que demuestra la implementación básica del enrutamiento del lado del cliente utilizando `react-router-dom` v6. Incluye la configuración de rutas estáticas para diferentes páginas (Home, About, Contact), el uso de una barra de navegación (`ResponsiveAppBar` de Material UI) y un ejemplo de navegación programática con el hook `useNavigate`.

# Información útil

1. **¿Qué es React Router y para qué se utiliza?**

   React Router es una biblioteca de enrutamiento para aplicaciones React. Permite crear una navegación entre diferentes vistas o componentes de manera sencilla, sin tener que recargar la página, ofreciendo una experiencia de usuario más fluida. Se utiliza para gestionar las rutas de la aplicación y cómo se muestran los componentes dependiendo de la URL.

2. **¿Cuál es la diferencia entre `<BrowserRouter>`, `<Routes>`, `<Route>` y `<Link>`?**

   - `<BrowserRouter>`: Es el componente principal que envuelve toda la aplicación, y gestiona el historial de navegación utilizando el API de history de HTML5. 
   - `<Routes>`: Es un contenedor que agrupa las rutas, asegurándose de que solo se renderice la ruta correspondiente a la URL actual.
   - `<Route>`: Define una ruta individual y el componente que se debe renderizar cuando la URL coincida con la ruta.
   - `<Link>`: Es un componente que reemplaza las etiquetas `<a>` tradicionales y se usa para crear enlaces entre diferentes rutas de la aplicación sin recargar la página.

3. **¿Qué es un componente de ruta?**

   Un componente de ruta es un componente que se renderiza cuando la URL coincide con la ruta definida en `<Route>`. Este componente puede ser un componente React cualquiera y se renderiza en función de la URL activa.

4. **¿Cómo se configuran rutas dinámicas?**

   Las rutas dinámicas en React Router se configuran utilizando parámetros en la ruta. Por ejemplo, puedes definir una ruta como `/usuario/:id` y acceder a ese parámetro en el componente utilizando el hook `useParams` para obtener el valor del parámetro `id`. Esto permite que la ruta cambie dinámicamente dependiendo del parámetro.

   ```jsx
   <Route path="/usuario/:id" element={<Usuario />} />
# Configuración del enrutamiento
Este código configura una aplicación React utilizando **React Router** . **BrowserRouter** gestiona la navegación basada en el historial del navegador, permitiendo la actualización de la URL sin recargar la página. **Routes** agrupa todas las rutas, y **Route** define cada una de ellas, como la ruta raíz `/` que renderiza el componente `<App />`, `/home` para `<Home />`, `/about` para `<About />`, y `/contact` para `<Contact />`. Este enfoque permite una navegación fluida entre las distintas vistas de la aplicación sin interrupciones.

   ```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  App  from  './App.jsx'
import  Home  from  './componets/Home.jsx'
import  About  from  './componets/About.jsx'
import  Contact  from  './componets/Contact.jsx'
    
    createRoot(document.getElementById('root')).render(
	    <BrowserRouter>
	    	<Routes>
	    		<Route path="/" element={<App />} />
	    		<Route path="/home" element={<Home />} />
	    		<Route path="/about" element={<About />} />
	    		<Route path="/contact" element={<Contact />} />
	    	</Routes>
	    </BrowserRouter>
    )
```

# Descripción de `useNavigate` en React Router

El hook `useNavigate` es una característica fundamental de la biblioteca `react-router-dom` (a partir de la versión 6). Te permite realizar **navegación programática** dentro de tu aplicación React. En otras palabras, en lugar de depender únicamente de que el usuario haga clic en un componente `<Link>`, puedes cambiar la ruta de la URL mediante código JavaScript, por ejemplo, después de que se complete una acción (como enviar un formulario o hacer clic en un botón personalizado).

## ¿Cómo funciona?

1.  **Importación**: Primero, debes importar `useNavigate` desde `react-router-dom`.
    ```javascript
    import { useNavigate } from 'react-router-dom';
    ```
2.  **Llamada al Hook**: Dentro de tu componente funcional, llamas al hook `useNavigate()` para obtener una función (comúnmente llamada `Maps`).
    ```javascript
    const navigate = useNavigate();
    ```
3.  **Uso de la función `Maps`**: Esta función `Maps` se utiliza para dirigir al usuario a una nueva ruta. Puedes pasarle la ruta de destino como una cadena de texto.
    ```javascript
    // Navegar a la ruta '/about'
    navigate('/about');

    // Navegar hacia atrás (equivalente a history.back())
    navigate(-1);

    // Navegar hacia adelante (equivalente a history.forward())
    navigate(1);
    ```
4.  **Opciones adicionales**: La función `Maps` también acepta un segundo argumento opcional, un objeto, que puede contener `state` para pasar datos a la nueva ruta o `replace: true` para reemplazar la entrada actual en el historial en lugar de agregar una nueva.
    ```javascript
    // Navegar a '/profile' y pasar un estado
    navigate('/profile', { state: { userId: 123 } });

    // Navegar a '/dashboard' reemplazando la ruta actual en el historial
    navigate('/dashboard', { replace: true });
    ```

`useNavigate` es el reemplazo moderno del hook `useHistory` utilizado en versiones anteriores de React Router.

## Ejemplo con Botón MUI

Aquí tienes cómo integrarías `useNavigate` con tu componente `Button` de Material UI para navegar a la ruta `/contact` al hacer clic:

```jsx
import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function MiComponenteConBoton() {
  // 1. Obtener la función navigate
  const navigate = useNavigate();

  // 2. Definir la función que se ejecutará al hacer clic
  const handleClick = () => {
    // 3. Usar navigate para ir a la ruta '/contact'
    navigate('/contact');
  };

  return (
    <div>
      {/* Otros elementos del componente */}
      <Button onClick={handleClick} variant="contained">
        Ir a Contact
      </Button>
      {/* Otros elementos del componente */}
    </div>
  );
}

export default MiComponenteConBoton;
```
# Visualización del proyecto
**Ruta: `/`**  
Esta imagen muestra la vista inicial o principal de la aplicación, accesible a través de la ruta raíz `/`. Este componente podría ser algo como la página de inicio de la aplicación, donde se centraliza la información más importante.

![enter image description here](https://i.imgur.com/Hs7fMUd.png)

**Ruta: `/home`**  
Esta imagen representa la página principal de la aplicación, accesible mediante la ruta `/home`. 

![enter image description here](https://i.imgur.com/WogWECo.png)

**Ruta: `/contact`**  
En esta imagen, vemos la sección de contacto de la aplicación, a la que se accede mediante la ruta `/contact`. Esta página normalmente contiene información para contactar a los responsables de la aplicación, como formularios de contacto o datos de redes sociales.

![enter image description here](https://i.imgur.com/XhdRNIK.png)

**Ruta: `/about`**  
Finalmente, esta imagen corresponde a la página "Sobre nosotros", accesible a través de la ruta `/about`. En esta sección, los usuarios suelen encontrar detalles sobre la historia de la aplicación, misión, visión, o los miembros del equipo.

![enter image description here](https://i.imgur.com/kece2P8.png)
## Instalación

Pasos para la instalación:

1. **Clona el repositorio:**
   ```bash
   https://github.com/emmanuelgrp/proyecto_react.git
   ```

2. **Navega al directorio:**
   ```bash
   cd react-router-mui-main
   ```

3. **Instala los modulos del proyecto:**
   ```bash
   npm install
   ```

4. **Corre la aplicación**
   ```bash
   npm run dev
   ```
4. **Abrir en el navegador**
   ```bash
   http://localhost:5173/
   ```