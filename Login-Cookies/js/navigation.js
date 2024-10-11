"use strict"

const numberSection = document.getElementById('numberSection');
const container = document.getElementById('container');


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