"use strict"

function crearArray(texto) {

    return texto.split(" ");

}


function transformMayusculas(texto) {

    let resultado = [];

    texto.forEach((palabra) => resultado.push(palabra.toUpperCase()));
    return resultado;

}

function transformMinusculas(texto) {
    let resultado = [];

    texto.forEach((palabra) => resultado.push(palabra.toLowerCase()));
    return resultado;

}

function primeraMayuscula(texto) {
    let resultado = [];
    let palabraTransformada;
    texto.forEach(palabra => {

        palabraTransformada = palabra.slice(0, 1).toUpperCase() + palabra.slice(1, palabra.length).toLowerCase();
        resultado.push(palabraTransformada);

    });
    return resultado;


}

function primeraMinuscula(texto) {
    let resultado = [];
    let palabraTransformada;
    texto.forEach(palabra => {

        palabraTransformada = palabra.slice(0, 1).toLowerCase() + palabra.slice(1, palabra.length).toUpperCase();
        resultado.push(palabraTransformada);

    });
    return resultado;
}



function ultimaMayuscula(texto) {
    let resultado = [];
    let palabraTransformada;
    texto.forEach(palabra => {

        palabraTransformada = palabra.slice(0, palabra.length - 1).toLowerCase() + palabra.slice(palabra.length - 1, palabra.length).toUpperCase();
        resultado.push(palabraTransformada);

    });
    return resultado;

}


function ultimaMinuscula(texto) {
    let resultado = [];
    let palabraTransformada;
    texto.forEach(palabra => {

        palabraTransformada = palabra.slice(0, palabra.length - 1).toUpperCase() + palabra.slice(palabra.length - 1, palabra.length).toLowerCase();
        resultado.push(palabraTransformada);

    });
    return resultado;

}

function vocalesMayuscula(texto) {
    let resultado = [];
    let palabraTransformada ;
    let letra  = "";

    texto.forEach(palabra => {

        palabraTransformada = "";

        for (let index = 0; index <= palabra.length; index++) {

            letra = palabra.slice(index, index + 1)


            if (esVocal(letra)){
                palabraTransformada = palabraTransformada + letra.toUpperCase();
            } else {
                palabraTransformada = palabraTransformada + letra;

            }
            
        }

    resultado.push(palabraTransformada);

    }
    
    );
    return resultado;

}

function vocalesMinusculas(texto) {
    let resultado = [];
    let palabraTransformada ;
    let letra  = "";

    texto.forEach(palabra => {

        palabraTransformada = "";

        for (let index = 0; index <= palabra.length; index++) {

            letra = palabra.slice(index, index + 1)


            if (esVocal(letra)){
                palabraTransformada = palabraTransformada + letra.toLowerCase();
            } else {
                palabraTransformada = palabraTransformada + letra;

            }
            
        }

    resultado.push(palabraTransformada);

    }
    
    );
    return resultado;

}

function consonanteMayuscula(texto) {

    

    let resultado = [];
    let palabraTransformada ;
    let letra  = "";

    texto.forEach(palabra => {

        palabraTransformada = "";

        for (let index = 0; index <= palabra.length; index++) {

            letra = palabra.slice(index, index + 1)


            if (esVocal(letra)){
                palabraTransformada = palabraTransformada + letra;
            } else {
                palabraTransformada = palabraTransformada + letra.toUpperCase();

            }
            
        }

    resultado.push(palabraTransformada);

    }
    
    );
    return resultado;

}


function consonanteMinuscula(texto) {


    let resultado = [];
    let palabraTransformada ;
    let letra  = "";

    texto.forEach(palabra => {

        palabraTransformada = "";

        for (let index = 0; index <= palabra.length; index++) {

            letra = palabra.slice(index, index + 1)


            if (esVocal2(letra) && letra !== ""){
                palabraTransformada = palabraTransformada + letra;
            } else {
                palabraTransformada = palabraTransformada + letra.toLowerCase();

            }
            
        }

    resultado.push(palabraTransformada);

    }
    
    );
    return resultado;

}





function esVocal2(letra){
    return "aeiouAEIOU".includes(letra);
}


function esVocal(letra) {

    switch (letra) {
        case "a":
            return true;
            break;
        case "A":
            return true;
            break;
        case "e":
            return true;
            break;
        case "E":
            return true;
            break;
        case "i":
            return true;
            break;
        case "I":
            return true;
            break;
        case "o":
            return true;
            break;
        case "O":
            return true;
            break;
        case "u":
            return true;
            break;
        case "U":
            return true;
            break;
        default:
            return false;
            break;
    }

}

