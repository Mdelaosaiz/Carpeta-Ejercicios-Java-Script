'use strict'

let sentence = document.querySelector('p');
const partnerName = 'Pepa de la Guerra';
const nameLength = partnerName.length;

sentence.innerHTML = `El nombre de mi compañera es ${partnerName}, y está compuesto por ${nameLength} caracteres`;

// console.log(sentence);