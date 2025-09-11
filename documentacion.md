# LevelUpGamer
## integrantes:
**Keiton Chaves Hernandez - Matias Chavez Garay**

Este proyecto corresponde al caso **"Level-Up Gamer"**, una tienda online para gamers en Chile, con catálogo de productos, inicio de sesión, formularios, etc.

El proyecto incluye:

-  **Página principal (`index.html`)** con carrusel con contexto de la tienda y una sección con cards mostrando algunos productos destacados.  
-  **Página de Quiénes Somos (`quienes-somos.html`)** con misión y visión de la tienda.  
- ✅ **Página de Contacto (`contacto.html`)** con formulario y datos de la tienda.  
- ✅ **Catálogo dinámico (`productos.json`)** que se carga con **JavaScript + fetch**.  
- ✅ **Modales Bootstrap** para mostrar información detallada de los productos.  
- ✅ **Navbar y footer reutilizables** con Bootstrap Icons y FontAwesome.  
- ✅ **Modo oscuro/claro** y reloj en tiempo real con JavaScript.  

---

## Tecnologías Usadas

- **HTML5** → estructura semántica del sitio.  
- **CSS3 + Bootstrap 5** → estilos y componentes responsivos.  
- **JavaScript (Vanilla)** → carga dinámica del catálogo y funciones (modo oscuro, reloj, etc.).  
- **JSON** → catálogo de productos.  
- **FontAwesome + Bootstrap Icons** → íconos visuales.  

## Componentes principales
Navbar: navegación entre secciones del sitio.

° Carrusel de imágenes: destaca promociones y ofertas.
° Cards dinámicas: los productos se generan desde productos.json.
° Modales Bootstrap: vista detallada de cada producto.
° Modo oscuro/claro: activable mediante un switch.
° Reloj en tiempo real en la navbar.
° Footer informativo con links útiles, contacto y redes sociales.

## Observaciones

Para poder probar el proyecto en su totalidad se recomienda utilizar un servidor como puede ser XAMPP o WAMPP o también puede instalar la extensión **Live Server** en VSCode, esto debido que durante su desarrollo notamos lo siguiente:

El archivo productos.json no funciona si abres el proyecto con file:/// en el navegador,
ya que el método fetch requiere un **servidor** para evitar errores de CORS.

## Organización en carpetas

Separamos cada funcionalidad, plantilla en sus respectivos directorios para así tener un código mucho más ordenado y entendible.