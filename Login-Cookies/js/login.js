"use strict"




window.onload = function () {

// Botones y etiquetas de cierre de sesión
const closeSessionButton = document.getElementById('cerrarSesionButton');
const closeContainer = document.getElementById('closeContainer');

// Contenedores del Login
const formContainer = document.getElementById('loginForm');
const contentContainer = document.getElementById('container');
const errorMsg = document.getElementById('errorMsg');

const topNav = document.getElementById('topnav');


// Botones y contenedores del registro
const registerButton = document.getElementById('registerButton');
const registerForm = document.getElementById('registerForm');
const submitRegisterButton = document.getElementById('submitRegister');
const registerErrorMsg = document.getElementById('registerErrorMsg');

// Usuario y contraseñas registrados
const pass = "admin";
const user = "admin";
let registeredUsers = [[pass,user]];
const registeredUsername = document.getElementById('registeredUsername');

// Dice si está hecho el login
let isLogged = false;


if (getCookie('isLogged') === 'true') {
    isLogged = true;
    mostrarPagina();
    
}

if (isLogged === true) {
    registeredUsername.innerHTML = getCookie('user');

    
}



formContainer.onsubmit = function(event) {


 


    event.preventDefault();

    // Declaración del input de usuario y contraseña
    const formUsername = document.getElementById('username');
    const formPassword = document.getElementById('password');
    let userNameExists = false;
    let passCounter = 0 ;

        
    


        /**
         * Verifica si existe el usuario 
         */

        for (let i = 0; i < registeredUsers.length; i++) {

            if (formUsername.value == registeredUsers[i][0]) {
                
                userNameExists = true;
                passCounter = i;
                break;
            } 
            
        }


        /**
         * Verifica si el usuario tiene el "Length" correcto,
         * si existe y verifica que la contraseña sea la correcta
         * en ese caso muestra el contenido de la página, en caso contrario
         * el login es inválido
         */


        if ((formUsername.value.length > 3) && (userNameExists) && (formPassword.value == registeredUsers[passCounter][1])) {
            loginCorrecto();
            setCookie('user',formUsername.value,11);
            registeredUsername.innerHTML = getCookie('user');
            
        } else {
            errorMsg.style.display = 'block';
            formUsername.value = '';
            formPassword.value = '';
        }


   



}


//Setea el valor de la variable isLogged, llama ala función
//que muestra el contenido de la página y guarda una cookie 
// con el valor true en la variable isLogged

function loginCorrecto() {
    isLogged = true;
    mostrarPagina();
    setCookie('isLogged','true','1');

    
}

//Muestra el contenido de la página tras el login correcto

function mostrarPagina(){
    formContainer.style.display = 'none';
    contentContainer.style.display = 'flex';
    errorMsg.style.display = 'block';
    closeContainer.style.display = 'block';
    topNav.style.display = 'block';
    
}







/**
 * 
 * Función que se activa al pulsar el botón de
 * cerrar sesión, esto borra las cookies y 
 * hace un reload a la página web 
 */

closeSessionButton.onclick = function(event){

    isLogged = false;
    eraseCookie('isLogged');
    eraseCookie('user');
    location.reload();

}






/**
 * 
 * Muestra el contenedor de registro y oculta el de Login
 */

registerButton.onclick = function(event) {

    event.preventDefault();

    formContainer.style.display = 'none';
    registerForm.style.display = 'flex';
    
}


/**
 * 
 * Función para el registro 
 * 
 */

submitRegisterButton.onclick = function(event) {

    event.preventDefault();

    

    const newUser = document.getElementById('newUser');
    const newPassword = document.getElementById('newPassword');

    /**
     *  Validación de contraseña al crear un nuevo usuario, debe tener un carácter especial, mínimo 8 caracteres, número y mayúscula
     */

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordPattern.test(newPassword.value)) {
        registerErrorMsg.innerText = "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.";
        registerErrorMsg.style.display = 'block';
        return; 
    }


    /**
     * Verifica si el usuario a registrar ya existe
     */

    let userExist = false;

    for (let i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i][0] === newUser.value) {
            userExist = true;
            break;
        }
        
    }

    
    /**
     * Si el usuario no existe y es válido lo crea y lo añade al 
     * array de usuarios, en caso contrario saca el mensaje de error
     */

    if ( !userExist && newUser.value.length > 3) {
        registeredUsers.push([newUser.value,newPassword.value]);
        registerForm.style.display = 'none';
        formContainer.style.display = 'flex';
        newUser.value = '';
        newPassword.value = '';

    } else {
        newUser.value = '';
        newPassword.value = '';
        registerErrorMsg.style.display = 'block';
    }

}

}