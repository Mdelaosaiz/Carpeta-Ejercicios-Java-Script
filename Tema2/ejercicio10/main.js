'use strict'
//Desde JavaScript debemos leer la edad para calcular el número de horas que hemos vivido.
const age = document.querySelector('span');
let day = 24;
let year = day*365;

const hoursLived = parseInt(age.innerHTML)*year;


console.log(hoursLived);
