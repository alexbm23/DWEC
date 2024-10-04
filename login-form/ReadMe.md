
# Proyecto Web - Desarrollo Web en Entorno Cliente

Este proyecto es una página web estática creada como parte de la asignatura **Desarrollo Web en Entorno Cliente**. La web ha sido desarrollada utilizando **HTML**, **CSS** y **JavaScript Vanilla**. Su objetivo principal es mostrar un resumen de varios ejercicios realizados durante el curso, así como proporcionar enlaces a recursos externos útiles.

## Contenidos del Proyecto

### Estructura de la Página Web

1. **Header**:
   - Contiene información introductoria y relevante acerca del sitio web.
   
2. **Barra de Navegación**:
   - Incluye enlaces a recursos externos de interés, como documentación y herramientas útiles para el desarrollo web.
   
3. **Sección Principal (Lista de Tarjetas)**:
   - Aquí se encuentran tarjetas que resumen diferentes ejercicios realizados en el curso.
   - Cada tarjeta contiene una breve descripción del ejercicio y un enlace para acceder al mismo.
   
4. **Footer**:
   - El footer contiene mi nombre, junto con información adicional de contacto o enlaces personales (como perfiles de redes sociales o portafolio).




### Sistema de Login y Registro

Se ha implementado un sistema de **login** y **registro** simple usando un formulario HTML y validación en **JavaScript**. Este sistema permite a los usuarios iniciar sesión con un nombre de usuario y contraseña, así como registrarse con nuevos datos durante la misma sesión. No se utilizan cookies ni almacenamiento en el navegador, lo que significa que los datos ingresados solo persisten durante la sesión actual y se manejan en la memoria.

#### Funcionalidad del Login:
- El formulario de login solicita al usuario un **nombre de usuario** y **contraseña**.
- Para autenticar al usuario, se verifica si el nombre de usuario existe en un array en memoria y si la contraseña coincide con la asociada a ese usuario.
- Si las credenciales son correctas, el contenido de la página se desbloquea y el usuario puede acceder a la sección principal. Si no lo son, se muestra un mensaje de error y se reinician los campos del formulario.

#### Funcionalidad del Registro:
- Los usuarios pueden acceder al formulario de **registro** desde el mismo formulario de login.
- Para registrar un nuevo usuario, el sistema verifica que el nombre de usuario no exista ya en el array y que tenga al menos 4 caracteres. 
- Si los datos son válidos, el nuevo usuario y su contraseña se añaden a la lista de usuarios registrados.
- Una vez registrado, el formulario de registro desaparece y el usuario es redirigido al formulario de login para iniciar sesión con sus nuevos datos.

#### Validación en JavaScript:
- El sistema de validación asegura que el nombre de usuario tenga más de 3 caracteres y que no esté repetido en el registro.
- Durante el login, se comprueba que el nombre de usuario exista y que la contraseña coincida con la almacenada en la sesión.
- No se utiliza almacenamiento en cookies ni local storage, por lo que los datos se mantienen solo en la memoria durante la sesión actual.

#### Ejemplo de Validación:

```javascript
if ((formUsername.value.length > 3) && (userNameExists) && (formPassword.value == registeredUsers[passCounter][1])) {
    isLogged = true;
    formContainer.style.display = 'none';
    contentContainer.style.display = 'flex';
} else {
    errorMsg.style.display = 'block';
}

## Tecnologías Utilizadas

- **HTML5**: Para estructurar el contenido de la página.
- **CSS3**: Para diseñar y dar estilo a la página, utilizando propiedades modernas de CSS.
- **JavaScript Vanilla**: Para agregar interactividad básica en la página.

## Estructura de Archivos

La estructura del proyecto es la siguiente:

```
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
```

## Funcionalidad y Comportamiento

- **Barra de navegación**: Todos los enlaces son externos y abren en una nueva pestaña.
- **Tarjetas de ejercicios**: Las tarjetas incluyen un resumen de cada ejercicio y un enlace directo a la página correspondiente.
- **Footer**: Sección de información personal que puede incluir enlaces a redes sociales, correo electrónico o portafolio.

## Autor

- **[Alejandro Barnestein Martos]**

