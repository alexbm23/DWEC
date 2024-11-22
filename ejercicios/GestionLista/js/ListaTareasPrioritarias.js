import { ListaTareas } from "./ListaTareas.js";
import { Tarea } from "./Tarea.js";


export class ListaTareasPrioritarias extends ListaTareas {


    constructor( tareas, solucionWrapper) {
        super(tareas, solucionWrapper);

    }

    sacarTareaPrioritaria(){
        if(this.lista.length != 0){
        this.lista.shift();
        this.pintar();
        } else {
            alert("No hay más tareas prioritarias.");
        }
        
    }


    añadirTareaPrioritaria() {

        let comprueba = false;


        if (this.lista.length < 10) {
            let numero = this.sacarAleatorio(this.tareas);
            let prioridad = this.sacarAleatorio(this.tareas);
            prioridad = prioridad + 1;
            let tarea = this.tareas[numero];
            if (this.lista.length == 0) {
                this.lista.push(new Tarea(tarea,prioridad));
            } else {

            while(!comprueba && this.lista.length < 9) {
                prioridad = this.sacarAleatorio(this.tareas);
                prioridad = prioridad + 1;
                comprueba = this.comprobarPrioridades(prioridad)
            }
            this.lista.push(new Tarea(tarea,prioridad));
            }


            this.ordenarPrioridades();
            this.pintar();
        } else {
            alert("Deberías empezar a hacer tareas.");
        }

    }

    pintar(){
        let content = "";
        this.lista.forEach(tarea =>{
            content+= "<span> " + tarea.nombre + "("  + tarea.prioridad + ")" + "</span>";
        });
        this.solucionWrapper.innerHTML = content;
    } 

    ordenarPrioridades(){
        this.lista.sort((a,b) => a.prioridad - b.prioridad);
        
    }

    comprobarPrioridades(prioridad) {


        let comprobante = false;

        this.lista.forEach(tarea => {
            
        if (prioridad == tarea.prioridad) {
            comprobante = true
        }

        });

        

        return !comprobante;

        

    }





}

