"use strict"


// Esta función setea la cookie, la crea, establece el tiempo en minutos
function setCookie(nombre, valor, minutos){
    const date = new Date();
    date.setTime(date.getTime() + (minutos * 60 * 1000));
    const expira = "expires=" + date.toUTCString();

    const encodedName = encodeURIComponent(nombre);
    const encodedValue = encodeURIComponent(valor);

    document.cookie = encodedName + "=" + encodedValue + ";" + expira + ";path=/";
}


/**
 * 
 * Esta función busca la cookie por el nombre que lleve como
 * parámetro la función, decodifica el array de cookies y lo
 * recorre buscando, si no devuelve NULL
 */
function getCookie(nombre){
    const nameEQ = encodeURIComponent(nombre) + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    for (let i = 0; i < cookiesArray.length ; i++){
        let cookie = cookiesArray[i].trim();
        if(cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }

    }
    return null;
}


/**
 * Borra la cookie con el nombre pasado por parámetro
 */
function eraseCookie(nombre){

    setCookie(nombre,'',-1);
}