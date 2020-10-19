'use strict'
//El primer año de un perro equivale a 15 años de humano
// El segundo año de un perro equivale a nueve años de humano
// A partir del tercero, cada año de perro equivale a 5 años de humano.
// Nota: Prueba que el código funciona correctamente con distintos años (1, 2, 12...).

let dogYears = 8;

let bebyYear = 15;
let puppyYear = bebyYear + 9;
let adultYear = puppyYear + (dogYears * 5);

if (dogYears <=0){
  console.log(`tu perro tiene el equivalente a menos de ${bebyYear} años humanos`);
} else if (dogYears === 1){
  console.log(`tu perro tiene el equivalente a ${bebyYear} años humanos`);
} else if (dogYears === 2){
  console.log(`tu perro tiene el equivalente a ${puppyYear} años humanos`);
} else if ( dogYears >=3){
  console.log(`tu perro tiene el equivalente a ${adultYear} años humanos`);
}