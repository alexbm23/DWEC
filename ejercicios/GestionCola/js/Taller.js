"use strict";


export class Taller {
    constructor(vehiculos, solucionWrapper) {
        this.vehiculos = vehiculos;
        this.cola = [];
        this.solucionWrapper = solucionWrapper;
    }


    añadirVehiculo(){
        if (this.cola.length < 10) {
            let numero = this.sacarAleatorio(this.vehiculos);
        let vehiculo = this.vehiculos[numero];
        this.cola.push(vehiculo);
        this.pintar();
        } else {
            alert("Deberías empezar a arreglar vehículos");
        }
        
    }


    sacarVehiculo(){
        if(this.cola.length>=0){
            this.cola.shift();
            this.pintar();
            if(this.cola.length > 0 ){
                alert("La siguiente vehículo en arreglar: " + this.cola[0]);
                console.log(this.cola)
            }else {
                alert("Ya no quedan vehículos en cola");
            }

        }else{
            alert("No hay más vehículos que arreglar");
        }
    }


    pintar(){
        let content = "";
        this.cola.forEach(vehiculo =>{
            content+= "<span> " + vehiculo + "</span>";
        });
        this.solucionWrapper.innerHTML = content;
    }

    sacarAleatorio(array){
        return Math.floor(Math.random() * array.length);
    }
}

