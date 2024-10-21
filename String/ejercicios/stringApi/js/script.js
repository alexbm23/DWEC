"use strict"


const texto = document.getElementById('modInput');


const botones = document.querySelectorAll('#buttonsWrapper button');
let botonPulsado;
let splitedTexto;

botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        botonPulsado = index + 1;
        if (texto.value != '') {
            splitedTexto = crearArray(texto.value);

           switchBoton(botonPulsado,splitedTexto);

           

        }
    });
});










