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
    let registeredUsers = [[pass, user]];
    const registeredUsername = document.getElementById('registeredUsername');

    // Inicializar IndexedDB
    let db;
    const request = indexedDB.open("LoginDB", 1);

    request.onerror = function(event) {
        console.log("Error al abrir IndexedDB:", event);
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        checkLoginStatus();
    };

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains("loginStatus")) {
            db.createObjectStore("loginStatus", { keyPath: "id" });
        }
    };

    function checkLoginStatus() {
        const transaction = db.transaction(["loginStatus"], "readonly");
        const store = transaction.objectStore("loginStatus");
        const getRequest = store.get("LoggedIn");

        getRequest.onsuccess = function(event) {
            if (getRequest.result && getRequest.result.value === true) {
                mostrarPagina();
                registeredUsername.innerHTML = getRequest.result.user;
            }
        };

        getRequest.onerror = function(event) {
            console.log("Error al obtener el estado de login:", event);
        };
    }

    formContainer.onsubmit = function (event) {
        event.preventDefault();

        // Declaración del input de usuario y contraseña
        const formUsername = document.getElementById('username');
        const formPassword = document.getElementById('password');
        let userNameExists = false;
        let passCounter = 0;

        // Verifica si existe el usuario 
        for (let i = 0; i < registeredUsers.length; i++) {
            if (formUsername.value === registeredUsers[i][0]) {
                userNameExists = true;
                passCounter = i;
                break;
            }
        }

        // Verifica si el usuario tiene el "Length" correcto,
        // si existe y verifica que la contraseña sea la correcta
        if ((formUsername.value.length > 3) && (userNameExists) && (formPassword.value === registeredUsers[passCounter][1])) {
            loginCorrecto(formUsername.value);
        } else {
            errorMsg.style.display = 'block';
            formUsername.value = '';
            formPassword.value = '';
        }
    }

    // Función que maneja el inicio de sesión exitoso
    function loginCorrecto(user) {
        const transaction = db.transaction(["loginStatus"], "readwrite");
        const store = transaction.objectStore("loginStatus");
        store.put({ id: "LoggedIn", value: true, user: user });

        transaction.oncomplete = function() {
            mostrarPagina();
            registeredUsername.innerHTML = user;
        };

        transaction.onerror = function(event) {
            console.log("Error al guardar el estado de login:", event);
        };
    }

    // Muestra el contenido de la página tras el login correcto
    function mostrarPagina() {
        formContainer.style.display = 'none';
        contentContainer.style.display = 'flex';
        errorMsg.style.display = 'none';
        closeContainer.style.display = 'block';
        topNav.style.display = 'block';
    }

    // Cerrar sesión
    closeSessionButton.onclick = function (event) {
        const transaction = db.transaction(["loginStatus"], "readwrite");
        const store = transaction.objectStore("loginStatus");
        store.put({ id: "LoggedIn", value: false });

        transaction.oncomplete = function() {
            location.reload();
        };

        transaction.onerror = function(event) {
            console.log("Error al cerrar sesión:", event);
        };
    }

    // Muestra el contenedor de registro y oculta el de Login
    registerButton.onclick = function (event) {
        event.preventDefault();
        formContainer.style.display = 'none';
        registerForm.style.display = 'flex';
    }

    // Función para el registro 
    submitRegisterButton.onclick = function (event) {
        event.preventDefault();

        const newUser = document.getElementById('newUser');
        const newPassword = document.getElementById('newPassword');

        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (!passwordPattern.test(newPassword.value)) {
            registerErrorMsg.innerText = "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.";
            registerErrorMsg.style.display = 'block';
            return;
        }

        // Verifica si el usuario a registrar ya existe
        let userExist = false;

        for (let i = 0; i < registeredUsers.length; i++) {
            if (registeredUsers[i][0] === newUser.value) {
                userExist = true;
                break;
            }
        }

        // Si el usuario no existe y es válido lo crea
        if (!userExist && newUser.value.length > 3) {
            registeredUsers.push([newUser.value, newPassword.value]);
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
