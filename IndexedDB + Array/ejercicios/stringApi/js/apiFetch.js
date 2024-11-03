"use strict"

const botonGenerarTexto = document.getElementById('generarTextoButton');
const input = document.getElementById('modInput');
const cita = document.getElementById('cita');
const autor = document.getElementById('autor');


botonGenerarTexto.addEventListener('click', async function() {

    const datos = await generarTexto();

    if (datos) { // Verifica si datos no es null o undefined
        texto.value = datos[0].quote; // Asigna la cita al input
        autor.innerHTML = datos[0].author; // Asigna el autor al elemento correspondiente
        cita.innerHTML = texto.value;
    }
    
});


async function generarTexto() {
    
    let respuesta;

    let apiUrl = "https://api.breakingbadquotes.xyz/v1/quotes";


    try {

    respuesta = await fetch(apiUrl);

    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
        
    }

    let datos = await respuesta.json();


    return datos;
        
    } catch (error) {
        console.error("Error al generar el texto:", error.message);
    }


   







    
}