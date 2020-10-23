'use strict'

// Para resolverlo nos dan una variable en la que podemos declarar un ingrediente a elegir entre estos tres: pollo, merluza o espinacas, por defecto si no hay ingrediente pondrá 'Nada en la nevera' y según el ingrediente que le pasemos el programa nos devolverá un mensaje por consola diciéndote el ingrediente que has elegido y con las siguientes sugerencias de receta: Filete con patatas / Merluzita en salsa verde / Espinacas rehogadas. Ejemplo: Tu ingrediente es pollo. Puedes freirte un filete con patatas.

let ingredient = 'pollo';
let recipe = document.querySelector('h1');

if (ingredient === 'pollo'){
  recipe.innerHTML = `mi receta favorita para el ${ingredient} es al horno con miel y menta.`;
}else if (ingredient === 'merluza'){
  recipe.innerHTML = `como más rica está la ${ingredient} es con salsa verde.`;
}else if( ingredient === 'espinacas'){
  recipe.innerHTML = `una receta que uso mucho con ${ingredient} es rehogarlas y acompañadas de puré de patatas.`;
}