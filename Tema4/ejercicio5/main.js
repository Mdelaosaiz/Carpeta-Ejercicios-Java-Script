'use strict'

function getEl(a){
  return document.querySelector(a);
}

console.log(getEl('h1'));

// Al recoger el elemento de HTML vamos a guardarlo en una constante.
// Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola que diga No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}
// Finalmente tras nuestro condicional retornaremos la constante con el elemento.

const elemnt = getEl('p');
if (elemnt === null){
  console.error("no existe ningún elemento");
}