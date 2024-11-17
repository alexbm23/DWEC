"use strict"

const iniciar = document.getElementById('aleatorio');
const parar = document.getElementById('parar');
const rapido = document.getElementById('rapido');
const lento = document.getElementById('lento');

let pulsarParar = false;



function sacarRandom(){


    let  numero = Math.floor(Math.random() * 10) + 1;


    return numero;
}



let intervaloAleatorio;

function iniciarAleatorio2(splitedTexto,segundos){

    
    
    if(intervaloAleatorio) clearInterval(intervaloAleatorio);

    

    intervaloAleatorio = setInterval(() => {
        let numero = sacarRandom();
        switchBoton(numero,splitedTexto);




    },segundos * 1000);


}

function detenerAleatorio(){
    if(intervaloAleatorio) {
        clearInterval(intervaloAleatorio);
        intervaloAleatorio = null;
    }
}