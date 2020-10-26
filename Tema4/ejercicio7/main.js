'use strict'

// usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)
function getEl(a){
  return document.querySelector(a).innerHTML;
}
// convertimos ese valor a número y lo asignamos a una constante

const number = parseInt(getEl('h2'));

//  console.log(number);

// usamos nuestra función del ejercicio 4 para saber si es par o impar
// escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'

function par(a){
  if(a%2 === 0){
    console.log(a, 'es un número par');
  }else{
    console.log(a, 'es un número impar');
  }
}

console.log(par(number));



