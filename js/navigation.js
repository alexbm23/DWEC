"use strict"

const numberSection = document.getElementById('numberSection');
const container = document.getElementById('container');
const stringSection = document.getElementById('stringSection');
const arraySection = document.getElementById('arraySection');
const almacenamientoSection = document.getElementById('almacenamientoSection');
const modularizacionSection = document.getElementById('modularizacionSection');

numberSection.onclick = function(event){


    container.innerHTML = '\
    <div class="card">\
      <div class="cardTitle">MINICALCULADORA</div>\
      <div class="cardBody">\
        <p>Mini calculadora y conversor de bases</p>\
      </div>\
      <div class="cardFooter"><a href="./ejercicios/minicalculadora/index.html">&gt;&gt; Solución</a></div>\
    </div>\
  '



}

stringSection.onclick = function(event){

  container.innerHTML = '\
    <div class="card">\
      <div class="cardTitle">STRING</div>\
      <div class="cardBody">\
        <p>Modificador de Texto</p>\
      </div>\
      <div class="cardFooter"><a href="./ejercicios/stringSimple/index.html">&gt;&gt; Solución</a></div>\
    </div>\
    <div class="card">\
      <div class="cardTitle">STRING + API</div>\
      <div class="cardBody">\
        <p>Modificador de texto con API</p>\
      </div>\
      <div class="cardFooter"><a href="./ejercicios/stringApi/index.html">&gt;&gt; Solución</a></div>\
    </div>\
  '

}

arraySection.onclick = function(event){


  container.innerHTML = '\
    <div class="card">\
      <div class="cardTitle">ARRAY</div>\
      <div class="cardBody">\
        <p>Operaciones básicas con matrices cuadradas</p>\
      </div>\
      <div class="cardFooter"><a href="./ejercicios/Arrays/index.html">&gt;&gt; Solución</a></div>\
    </div>\
    '




}

almacenamientoSection.onclick = function(event){
  container.innerHTML = '\
  <div class="card">\
    <div class="cardTitle">Almacenamiento Cookies</div>\
    <div class="cardBody">\
      <p>CRUD con cookies, podrás almacenar, mostrar y borrar datos usando Cookies</p>\
    </div>\
    <div class="cardFooter"><a href="./ejercicios/AlmacenamientoCookies/index.html">&gt;&gt; Solución</a></div>\
  </div>\
  <div class="card">\
    <div class="cardTitle">Almacenamiento SessionStorage</div>\
    <div class="cardBody">\
      <p>CRUD con SessionStorage, podrás almacenar, mostrar y borrar datos usando SessionStorage</p>\
    </div>\
    <div class="cardFooter"><a href="./ejercicios/AlmacenamientoStorage/index.html">&gt;&gt; Solución</a></div>\
  </div>\
  <div class="card">\
    <div class="cardTitle">Almacenamiento IndexedDB</div>\
    <div class="cardBody">\
      <p>CRUD con IndexedDB, podrás almacenar, mostrar y borrar datos usando IndexedDB</p>\
    </div>\
    <div class="cardFooter"><a href="./ejercicios/AlmacenamientoIndexedDB/index.html">&gt;&gt; Solución</a></div>\
  </div>\
  '



}

modularizacionSection.onclick = function(event){
  container.innerHTML = '\
  <div class="card">\
    <div class="cardTitle">Gestión de una pila</div>\
    <div class="cardBody">\
      <p>Aquí podrás gestionar una cesta de la colada con la estructura de datos: Pila</p>\
    </div>\
    <div class="cardFooter"><a href="./ejercicios/gestionPila/index.html">&gt;&gt; Solución</a></div>\
  </div>\
  <div class="card">\
    <div class="cardTitle">Gestión de una Cola</div>\
    <div class="cardBody">\
      <p>Aquí podrás gestionar un taller con la estructura de datos: Cola</p>\
    </div>\
    <div class="cardFooter"><a href="./ejercicios/GestionCola/index.html">&gt;&gt; Solución</a></div>\
  </div>\
  <div class="card">\
    <div class="cardTitle">Gestión de una Lista</div>\
    <div class="cardBody">\
      <p>Aquí podrás gestionar una lista de tareas con la estructura de datos: Lista</p>\
    </div>\
    <div class="cardFooter"><a href="./ejercicios/GestionLista/index.html">&gt;&gt; Solución</a></div>\
  </div>\
  '



}