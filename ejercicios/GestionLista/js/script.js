"use strict"

import { ListaTareas } from './ListaTareas.js';
import { ListaTareasPrioritarias } from './ListaTareasPrioritarias.js';


const introducir = document.getElementById('introducirButton');
const sacar = document.getElementById('sacarButton');
const solucionWrapper = document.getElementById('solucionWrapper');
const introducirPrioritaria = document.getElementById('introducirPrioritariaButton');
const eliminarPrioritaria = document.getElementById('eliminarTareaPrioritaria');
const solucionTareas = document.getElementById('tareasNormales');
const solucionPrioritarias = document.getElementById('tareasPrioritarias');


let tareas = ["Ducha", "Colada", "Limpiar Habitación", "Pasear al perro", "Hacer la Cena", "Limpiar Coche", "Planchar Ropa", "Hacer deberes","Leer"];
const diario = new ListaTareas (tareas, solucionTareas);
const diarioPrioritario = new ListaTareasPrioritarias(tareas, solucionPrioritarias);


introducir.onclick = function () {
    
    diario.añadirTarea();


}



sacar.onclick = function(){
    diario.sacarTarea();
}

introducirPrioritaria.onclick = function(){
    diarioPrioritario.añadirTareaPrioritaria();

}

eliminarPrioritaria.onclick = function(){
    diarioPrioritario.sacarTareaPrioritaria();
}



