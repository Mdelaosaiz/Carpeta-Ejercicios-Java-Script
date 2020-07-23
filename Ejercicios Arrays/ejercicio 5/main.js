// Vamos a crear un array numbers que contendrá 5 números cualesquiera. 

let numbers = [12,2.3,3,4.5,5];

// Vamos a recorrer el array mediante un bucle para calcular la media de los números.Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. 

let media = 0;
let media2 = 0;

for (let i = 0; i<numbers.length; i++) {

  media += numbers[i];
  media2 += numbers[i]/numbers.length;
}

// Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
console.log (media2);
console.log (media/numbers.length);

// b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.
numbers.push(39);

let media3 = 0;

for (let i = 0; i<numbers.length; i++) {

  media3 += numbers[i];
}
console.log (media3/numbers.length);

// c) Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media.

function average (arrayNumbers){
  
  let media = 0;
  for (let i=0; i< arrayNumbers.length; i++){
    media += arrayNumbers[i]
   // console.log(media);
  }
   let result= media/arrayNumbers.length;
  return result;
}

console.log(average ( [23,67,34,8]  )  );
 

// Para comprobar que la función hace el cálculo correcto, la invocaremos varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.