
# Proyecto Web - Desarrollo Web en Entorno Cliente

Este proyecto es una página web estática creada como parte de la asignatura **Desarrollo Web en Entorno Cliente**. La web ha sido desarrollada utilizando **HTML**, **CSS** y **JavaScript Vanilla**. Su objetivo principal es mostrar un resumen de varios ejercicios realizados durante el curso, así como proporcionar enlaces a recursos externos útiles.En este ejercicio se ha implementado un sistema de Storage de Login a través de cookies y un nuevo ejercicio que contiene un conversor de bases y una calculadora básica.

## Contenidos del Proyecto

### Estructura de la Página Web

1. **Header**:
   - Contiene información introductoria y relevante acerca del sitio web además de un mensaje de bienvenida al usuario logueado y un botón para cerrar la sesión.
   
2. **Barra de Navegación**:
   - Incluye enlaces a recursos externos de interés, secciones de ejercicios, como documentación y herramientas útiles para el desarrollo web.
   
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

#### Storage del login con Cookies:
- Ahora el navegador guarda el inicio de sesión a través de cookies, durante 1 minuto.
- A través de las funciones setCookie, getCookie y eraseCookie, las cuales sirven para crear, mostrar valor y borrar cookies.
- Se guardan en las cookies si el login ha sido ejecutado y el nombre de usuario para mostrarlo en la página
- Se puede cerrar sesión a través del botón de cerrar sesión de la página principal.

#### Movilidad por los diferentes apartados de ejercicios:
- Al hacer click en la sección de "NUMBER" de la barra de navegación se mostrarán las tarjetas de los ejercicios de Number

#### Ejercicio MINICALCULADORA:
- El ejercicio "MINICALCULADORA" contiene dos funcionalidades o apartados, el de conversor de bases y la calculadora básica, cada cual tiene su html, diseño y lógica individual
- La navegación hacia los apartados se realiza con la función document.location.href de JS.
- La lógica de el conversor de bases utiliza la función toString que convierte cualquier número a la base indicada en los parámetros de la función
- La lógica de la calculadora guarda números y operaciones que introduces. Cuando haces clic en un número, se añade al valor actual. Las operaciones (como sumar o restar) se aplican a esos números guardados. Al presionar "igual", se ejecuta la operación y se muestra el resultado. Puedes borrar todo, calcular factoriales, y obtener las partes enteras o decimales de un número.

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


```

## Funcionalidad y Comportamiento
- **Header**: Tiene un mensaje de bienvenida al usuario que ha iniciado sesión y un botón para cerrar sesión, un título y una foto mía
- **Barra de navegación**: Todos los enlaces son externos y abren en una nueva pestaña a excepción de "NUMBER" que muestra la tarjeta del ejercicio perteneciente a NUMBER.
- **Tarjetas de ejercicios**: Las tarjetas incluyen un resumen de cada ejercicio y un enlace directo a la página correspondiente.
- **Footer**: Sección de información personal que puede incluir enlaces a redes sociales, correo electrónico o portafolio.

## Autor

- **[Alejandro Barnestein Martos]**

