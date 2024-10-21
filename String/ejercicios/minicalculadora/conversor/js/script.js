"use strict"

const input = document.getElementById('conversorInput');
const b16 = document.getElementById('b16');
const b8 = document.getElementById('b8');
const b2 = document.getElementById('b2');
const result = document.getElementById('trueResult');




b16.onclick = function(event) {
    let valor = Number.parseInt(input.value);
    result.innerHTML = valor.toString('16');
    mostrarValor();
    
}


b8.onclick = function(event) {
    let valor = Number.parseInt(input.value);
    result.innerHTML = valor.toString('8');
    mostrarValor();
    
}

b2.onclick = function(event) {
    let valor = Number.parseInt(input.value);
    result.innerHTML = valor.toString('2');
    mostrarValor();
    
}

function mostrarValor(){
    result.style.display = 'block';
}



