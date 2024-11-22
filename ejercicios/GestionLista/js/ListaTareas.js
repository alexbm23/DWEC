"use strict"


export class ListaTareas {
    constructor(tareas, solucionWrapper) {
        this.tareas = tareas;
        this.lista = [];
        this.solucionWrapper = solucionWrapper;
    }


    añadirTarea(){
        if (this.lista.length < 10) {
            let numero = this.sacarAleatorio(this.tareas);
        let tarea = this.tareas[numero];
        this.lista.push(tarea);
        this.pintar();
        } else {
            alert("Deberías empezar a hacer tareas.");
        }
        
    }


    sacarTarea(){

        let numero = this.sacarAleatorio(this.lista);

        if(this.lista.length>=0){
            this.lista.splice(numero, 1);
            this.pintar();
            

        }else{
            alert("No hay más tareas que realizar.");
        }
    }


    pintar(){
        let content = "";
        this.lista.forEach(tarea =>{
            content+= "<span> " + tarea + "</span>";
        });
        this.solucionWrapper.innerHTML = content;
    }

    sacarAleatorio(array){
        return Math.floor(Math.random() * array.length );
    }
}

