'use strict'
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

//console.log(mySecretLetter()); //devuelve x
//console.log(secretLetter); //devuelve x

//prueba a cambiar el orden del los console.log. ¿Qué está pasando?

console.log(secretLetter); //devuelve Y porque es llamada antes de ser convertida dentro de la función mySecretLetter
console.log(mySecretLetter()); //devuelve x