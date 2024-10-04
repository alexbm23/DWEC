Proyecto Web - Desarrollo Web en Entorno Cliente
Este proyecto es una página web estática creada como parte de la asignatura Desarrollo Web en Entorno Cliente. La web ha sido desarrollada utilizando HTML, CSS y JavaScript Vanilla. Su objetivo principal es mostrar un resumen de varios ejercicios realizados durante el curso, así como proporcionar enlaces a recursos externos útiles.

Contenidos del Proyecto
Estructura de la Página Web
Header:
Contiene información introductoria y relevante acerca del sitio web.
Barra de Navegación:
Incluye enlaces a recursos externos de interés, como documentación y herramientas útiles para el desarrollo web.
Sección Principal (Lista de Tarjetas):
Aquí se encuentran tarjetas que resumen diferentes ejercicios realizados en el curso.
Cada tarjeta contiene una breve descripción del ejercicio y un enlace para acceder al mismo.
Footer:
El footer contiene mi nombre, junto con información adicional de contacto o enlaces personales (como perfiles de redes sociales o portafolio).
Sistema de Logueo Simple
He implementado un sistema de logueo básico utilizando prompt en JavaScript Vanilla. Cuando se accede al sitio, se solicita al usuario que introduzca su nombre a través de una ventana de prompt. Este sistema de logueo es únicamente para fines de demostración y no maneja autenticación avanzada ni almacenamiento de credenciales.

Tecnologías Utilizadas
HTML5: Para estructurar el contenido de la página.
CSS3: Para diseñar y dar estilo a la página, utilizando propiedades modernas de CSS.
JavaScript Vanilla: Para agregar interactividad básica en la página, incluyendo el sistema de logueo simple.
Estructura de Archivos
La estructura del proyecto es la siguiente:

bash
Copiar código
/Plantilla03
│
├── /css
│   └── styles.css      # Archivo CSS con los estilos de la página
├── /ejercicios
│   └── /ejer01
│         └── /img
│         └── /css      
│               └── styles.css      # Archivo CSS con los estilos de la página
│         └── index.html
│   └── /ejer02
│         └── /img
│         └── /css      
│               └── styles.css      # Archivo CSS con los estilos de la página
│         └── index.html
│   └── /js
│         └── script.js
│
├── index.html           # Archivo principal HTML
├── README.md            # Este archivo
└── /img             # Directorio para imágenes
Funcionalidad y Comportamiento
Sistema de logueo: Al acceder a la página, se solicita el nombre del usuario mediante un prompt, que se muestra en la consola o en la página.
Barra de navegación: Todos los enlaces son externos y abren en una nueva pestaña.
Tarjetas de ejercicios: Las tarjetas incluyen un resumen de cada ejercicio y un enlace directo a la página correspondiente.
Footer: Sección de información personal que puede incluir enlaces a redes sociales, correo electrónico o portafolio.
Autor
[Alejandro Barnestein Martos]