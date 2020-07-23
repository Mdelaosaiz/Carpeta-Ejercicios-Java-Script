// EJERCICIO 3
// Ticket con IVA
// Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

const Iva = 21;

function Calculate (a) {
  //hace el cálculo del Iva
  let ivaCalculated = a * 21 / 100;
  return "El precio sin IVA es:" + a + "el IVA es:" + ivaCalculated + "%" + "El precio con IVA es:" + (a + ivaCalculated);
}
//le da el valor al "a" de la función
let s = Calculate (23);
// pinta la variable "s" que tiene toda la función dentro
console.log (s);