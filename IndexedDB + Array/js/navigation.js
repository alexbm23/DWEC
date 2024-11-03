"use strict"

const numberSection = document.getElementById('numberSection');
const container = document.getElementById('container');
const stringSection = document.getElementById('stringSection');
const arraySection = document.getElementById('arraySection');

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