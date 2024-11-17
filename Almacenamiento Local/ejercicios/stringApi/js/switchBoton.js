"use strict"



function switchBoton(botonPulsado, splitedTexto){
    switch (botonPulsado) {
        case 1:
            texto.value = transformMayusculas(splitedTexto).join(" ");
            break;
        case 2:
            texto.value = transformMinusculas(splitedTexto).join(" ");
            break;
        case 3:
            texto.value = primeraMayuscula(splitedTexto).join(" ");
            break;
        case 4:
            texto.value = ultimaMayuscula(splitedTexto).join(" ");
            break;
        case 5:
            texto.value = primeraMinuscula(splitedTexto).join(" ");
            break;
        case 6:
            texto.value = ultimaMinuscula(splitedTexto).join(" ");
            break;
        case 7:
            texto.value = vocalesMayuscula(splitedTexto).join(" ");
            break;
        case 8:
            texto.value = vocalesMinusculas(splitedTexto).join(" ");
            break;
        case 9:
            texto.value = consonanteMayuscula(splitedTexto).join(" ");
            break;
        case 10:
             texto.value = consonanteMinuscula(splitedTexto).join(" ");
            break;
        case 11:
            iniciarAleatorio2(splitedTexto,1);
            break;
         case 13 :
             iniciarAleatorio2(splitedTexto,0.5);
             break;
         case 14:
             iniciarAleatorio2(splitedTexto,2);
             break;
        case 12:
            texto.value = detenerAleatorio();
            texto.value = splitedTexto.join(" ");
            break;
        default:
            break;
    }

    cita.innerHTML = texto.value;
}