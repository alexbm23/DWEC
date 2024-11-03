# Proyecto Web - Desarrollo Web en Entorno Cliente

Este proyecto es una página web estática creada como parte de la asignatura **Desarrollo Web en Entorno Cliente**. La web ha sido desarrollada utilizando **HTML**, **CSS** y **JavaScript Vanilla**. Su objetivo principal es mostrar un resumen de varios ejercicios realizados durante el curso, así como proporcionar enlaces a recursos externos útiles. En este ejercicio se ha implementado un sistema de almacenamiento del login usando `IndexedDB` y se ha añadido un ejercicio de manipulación de `Arrays`.

## Contenidos del Proyecto

### Estructura de la Página Web

1. **Header**:
   - Contiene información introductoria y relevante acerca del sitio web, además de un mensaje de bienvenida al usuario logueado y un botón para cerrar la sesión.
   
2. **Barra de Navegación**:
   - Incluye enlaces a recursos externos de interés, secciones de ejercicios, como documentación y herramientas útiles para el desarrollo web.
   
3. **Sección Principal (Lista de Tarjetas)**:
   - Aquí se encuentran tarjetas que resumen diferentes ejercicios realizados en el curso.
   - Cada tarjeta contiene una breve descripción del ejercicio y un enlace para acceder al mismo.
   
4. **Footer**:
   - El footer contiene mi nombre, junto con información adicional de contacto o enlaces personales (como perfiles de redes sociales o portafolio).

### Sistema de Login y Registro

Se ha implementado un sistema de **login** y **registro** simple usando un formulario HTML y validación en **JavaScript**. Este sistema permite a los usuarios iniciar sesión con un nombre de usuario y contraseña, así como registrarse con nuevos datos durante la misma sesión. Los datos se gestionan con `IndexedDB` para permitir que la sesión persista incluso al recargar la página o navegar por otras secciones del sitio web.

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

#### Almacenamiento del login con `IndexedDB`:
- Se guarda el estado de inicio de sesión en `IndexedDB` con una clave, por ejemplo, `"LoggedIn"`, y el valor `true` cuando el login es exitoso.
- También se guarda el nombre del usuario en `IndexedDB` para mostrarlo en la página.
- Si el usuario ha iniciado sesión previamente y vuelve a cargar la página, el sistema verifica si `"LoggedIn"` es `true` en `IndexedDB` y muestra la interfaz correspondiente sin solicitar credenciales nuevamente.
- El cierre de sesión cambia el valor de `"LoggedIn"` a `false` y elimina el nombre de usuario de `IndexedDB`, requiriendo que el usuario vuelva a iniciar sesión.

#### Movilidad por los diferentes apartados de ejercicios:
- Al hacer clic en la sección de "ARRAY", "NUMBER" y "STRING" de la barra de navegación, se mostrarán las tarjetas de los ejercicios relacionados con números y strings respectivamente.

#### Ejercicio de Manipulación de Arrays:
- El ejercicio de `ARRAY` contiene funcionalidades principales:
  1. **Generación de Matrices Aleatorias**:
     - Se generan dos matrices aleatorias con las dimensiones que introduzca el usuario, con números entre 10 y 100.
  2. **Operaciones con Matrices**:
     - Se pueden realizar operaciones como suma, resta y multiplicación con ambas matrices. 
     - Las operaciones pueden ejecutarse de forma aleatoria para chequear el funcionamiento correcto del sistema.
- La lógica de estas funcionalidades se implementa en JavaScript, permitiendo una manipulación eficiente y visualización de los resultados en la página.

#### Ejemplo de Validación:

```javascript
if ((formUsername.value.length > 3) && (userNameExists) && (formPassword.value === registeredUsers[passCounter][1])) {
    isLogged = true;
    formContainer.style.display = 'none';
    contentContainer.style.display = 'flex';
} else {
    errorMsg.style.display = 'block';
}
```

## Tecnologías Utilizadas

- **HTML5**: Para estructurar el contenido de la página.
- **CSS3**: Para diseñar y dar estilo a la página, utilizando propiedades modernas de CSS.
- **JavaScript Vanilla**: Para agregar interactividad básica en la página.

## Funcionalidad y Comportamiento
- **Header**: Tiene un mensaje de bienvenida al usuario que ha iniciado sesión y un botón para cerrar sesión, un título y una foto mía
- **Barra de navegación**: Todos los enlaces son externos y abren en una nueva pestaña a excepción de "NUMBER" y "STRING" que muestra la tarjeta del ejercicio perteneciente.
- **Tarjetas de ejercicios**: Las tarjetas incluyen un resumen de cada ejercicio y un enlace directo a la página correspondiente.
- **Footer**: Sección de información personal que puede incluir enlaces a redes sociales, correo electrónico o portafolio.

## Autor

- **[Alejandro Barnestein Martos]**