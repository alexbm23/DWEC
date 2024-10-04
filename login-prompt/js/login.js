"use strict"

window.onload = function () {

    let correctUsername = "admin";
    let correctPassword = "admin";

    let username = prompt("Por favor, ingrese su nombre de usuario: ");
    let container = document.getElementById("container");
    let infoLogin = document.getElementById("infoLogin");

    if(username) {
        let password = prompt("Ingresa ahora tu contraseña: ");

        console.log(username.length)

        if((username.length > 3) && (username == correctUsername) && (password == correctPassword)){
            alert("Bienvenidoo :D")
            container.style.display = 'flex';
            infoLogin.style.display = 'none';

        } else {
            let retry = confirm("Nombre de usuario o contraseña incorrecto. ¿Desea intentarlo de nuevo?");

            if(retry){
                window.location.reload();
            }

        } 
    } else {
        alert("Debe ingresar un nombre de usuario");
    }


}