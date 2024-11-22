"use strict"

const dimension = document.getElementById("modInput");
const generarMatrices = document.getElementById("generarMatrices");
const sumarMatricesButton = document.getElementById("sumarMatrices");
const divMatrizA = document.getElementById("matrizA");
const divMatrizB = document.getElementById("matrizB");
const divMatrizResultado = document.getElementById("matrizResultado");
const restarMatricesButton = document.getElementById("restarMatrices");
const multiplicarMatricesButton = document.getElementById("multiplicarMatrices");
const aleatorioButton = document.getElementById("aleatorioButton");

const pararButton = document.getElementById("pararButton");
const rapidoButton = document.getElementById("rapidoButton");
const lentoButton = document.getElementById("lentoButton");

let matrizA = [];
let matrizB = [];
let resultado = [];
let ultimoBotonPulsado;
let intervalo;


generarMatrices.onclick = function () {



    crearMatrices(matrizA);
    crearMatrices(matrizB);


    pintarMatrices(divMatrizA, matrizA);
    pintarMatrices(divMatrizB, matrizB);

    if (resultado.length != 1 && ultimoBotonPulsado == 1) {
        sumarMatrices();
        pintarMatrices(divMatrizResultado, resultado);
    } else if (resultado.length != 1 && ultimoBotonPulsado == 2) {
        restarMatrices();
        pintarMatrices(divMatrizResultado, resultado);
    } else if (resultado.length != 1 && ultimoBotonPulsado == 3) {
        resultado = multiplicarMatrices(matrizA, matrizB);
        pintarMatrices(divMatrizResultado, resultado);
    }



}

restarMatricesButton.onclick = function () {

    restarMatrices();
    pintarMatrices(divMatrizResultado, resultado);

    ultimoBotonPulsado = 2;

}



sumarMatricesButton.onclick = function () {


    sumarMatrices();

    pintarMatrices(divMatrizResultado, resultado);

    ultimoBotonPulsado = 1;

}

multiplicarMatricesButton.onclick = function () {

    resultado = multiplicarMatrices(matrizA, matrizB);
    pintarMatrices(divMatrizResultado, resultado);
    ultimoBotonPulsado = 3;



}



aleatorioButton.onclick = function () {

    pulsarAleatorio(1);

}

pararButton.onclick = function () {
    pararAleatorio();
}

rapidoButton.onclick = function () {
    pulsarAleatorio(0.5);
}

lentoButton.onclick = function () {
    pulsarAleatorio(2);
}




function pararAleatorio() {
    clearInterval(intervalo);
}




function pulsarAleatorio(interval) {


    let numero;

    if (intervalo) {

        clearInterval(intervalo);
    }


    
    intervalo = setInterval(() => {
        numero = sacarRandom3();
        if (numero == 1) {
            sumarMatricesButton.click();
        } else if (numero == 2) {
            restarMatricesButton.click();
        } else if (numero == 3) {
            multiplicarMatricesButton.click();
        }


        console.log("Cumple intervalo");
        console.log(numero);
        




    }, interval * 1000);




}






function multiplicarMatrices(matrizA, matrizB) {
    const filasA = matrizA.length;
    const columnasA = matrizA[0].length;
    const filasB = matrizB.length;
    const columnasB = matrizB[0].length;

    let resultadob = new Array(filasA);
    for (let i = 0; i < filasA; i++) {
        resultadob[i] = new Array(columnasB).fill(0);
    }


    for (let i = 0; i < filasA; i++) {
        for (let j = 0; j < columnasB; j++) {
            for (let k = 0; k < columnasA; k++) {
                resultadob[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }


    return resultadob;

}





function restarMatrices() {
    for (let index = 0; index < dimension.value; index++) {


        resultado[index] = [];


        for (let i = 0; i < dimension.value; i++) {

            resultado[index][i] = matrizA[index][i] - matrizB[index][i];

        }



    }
}


function sumarMatrices() {


    for (let index = 0; index < dimension.value; index++) {


        resultado[index] = [];


        for (let i = 0; i < dimension.value; i++) {

            resultado[index][i] = matrizA[index][i] + matrizB[index][i];

        }



    }
}


function pintarMatrices(dondePintar, matriz) {

    let htmlMatriz = "";

    for (let index = 0; index < dimension.value; index++) {



        htmlMatriz += matriz[index].join(" ") + "<br>";




    }

    dondePintar.innerHTML = htmlMatriz;


}






function crearMatrices(matriz) {

    for (let index = 0; index < dimension.value; index++) {


        matriz[index] = [];

        for (let i = 0; i < dimension.value; i++) {

            matriz[index][i] = sacarRandom();

        }

    }



}


function sacarRandom() {


    let numero = Math.floor(Math.random() * 90) + 10;


    return numero;
}


function sacarRandom3() {

    let numero = Math.floor(Math.random() * 3) + 1;

    return numero;
}





