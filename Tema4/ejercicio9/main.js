'use strict'


function box (isBorder, width, padding, size){

  let result = 0;

  if (isBorder){

    result = width;

  }else { result = width + padding + size;} 

  return "El ancho del contenido es: " + width + "px y el ancho total de la caja es:" + result + "px."
}

//ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.

console.log(box(true, 100, 5, 200));// no calcula el total porque al ser borderbox, tiene el tamaño que el programador haya dicho... 
console.log(box(false, 100, 5, 200)); // al no ser Borderbox, se tienen que sumar todas las medidas para obtener el tamaño real de la caja.
