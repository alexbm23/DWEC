"use strict"

import { Taller } from './Taller.js';


const introducir = document.getElementById('introducirButton');
const sacar = document.getElementById('sacarButton');
const solucionWrapper = document.getElementById('solucionWrapper');


let vehiculos = ["Coche 4x4", "Moto 125", "Moto 49", "Coche de carreras", "Vagón de tranvía", "Monster Truck", "Coche Normal", "Triciclo","Tractor"];
const taller = new Taller (vehiculos, solucionWrapper);


introducir.onclick = function () {
    
    taller.añadirVehiculo();


}



sacar.onclick = function(){
    taller.sacarVehiculo();
}



