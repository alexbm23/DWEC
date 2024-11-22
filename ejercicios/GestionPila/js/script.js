"use strict"

import { Lavanderia } from './Lavanderia.js';


const introducir = document.getElementById('introducirButton');
const sacar = document.getElementById('sacarButton');
const solucionWrapper = document.getElementById('solucionWrapper');


let prendas = ["pantalon", "camiseta", "falda", "bufanda", "chaquetón", "camisa", "jersey", "vestido","ropa interior"];
const lavanderia = new Lavanderia (prendas, solucionWrapper);


introducir.onclick = function () {
    
    lavanderia.añadirPrenda();


}



sacar.onclick = function(){
    lavanderia.sacarPrenda();
}



