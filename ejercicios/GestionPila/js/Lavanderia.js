"use strict";


export class Lavanderia {
    constructor(prendas, solucionWrapper) {
        this.prendas = prendas;
        this.pila = [];
        this.solucionWrapper = solucionWrapper;
    }


    añadirPrenda(){
        if (this.pila.length < 10) {
            let numero = this.sacarAleatorio(this.prendas);
        let prenda = this.prendas[numero];
        this.pila.push(prenda);
        this.pintar();
        } else {
            alert("Deberías empezar a lavar la ropa.");
        }
        
    }


    sacarPrenda(){
        if(this.pila.length>=0){
            this.pila.pop();
            this.pintar();
            if(this.pila.length > 0 ){
                alert("La siguiente prenda en lavar es: " + this.pila[this.pila.length - 1]);
            }else {
                alert("Ya no queda ropa en la pila");
            }

        }else{
            alert("No hay más ropa que lavar");
        }
    }


    pintar(){
        let content = "";
        this.pila.forEach(prenda =>{
            content+= "<span> " + prenda + "</span>";
        });
        this.solucionWrapper.innerHTML = content;
    }

    sacarAleatorio(array){
        return Math.floor(Math.random() * array.length);
    }
}

