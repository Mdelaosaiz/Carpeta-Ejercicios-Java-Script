'use strict'
// //Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
let div = document.querySelector('div');
let title = document.querySelector('h1');
let message = document.querySelector('h2');
// console.log(title);

if (div.classList.contains('warning')){
  title.innerHTML = 'aviso'.toUpperCase();
  message.innerHTML = 'Tenga cuidado';

  // Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
} else if (div.classList.contains('error')){
  title.innerHTML = 'error'.toUpperCase();
  message.innerHTML = 'Ha surgido un error';

  // Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
} else if (div.classList.contains('success')){
  title.innerHTML = 'correcto';
  message.innerHTML = 'Los datos son correctos';
}




 