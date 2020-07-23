// Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30px y el ancho total de la caja es: 34px.
// La función tendrá 4 parámetros:
// el primero será un booleano para especificar si es border-box o no. (if)
// el segundo será un número con el width de la caja.
// el tercero será un número con el padding.
// el cuarto será un número con el border-size.

function calculeWidth (isBorderBox, width, padding ,borderSize) {

let result =0;

if (isBorderBox) {
  result = width;

}else { result = width + borderSize + padding; 

}
return "El ancho del contenido es: " + width + "px y el ancho total de la caja es : " + result + "px.";

}

// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.

console.log (calculeWidth (true, 100, 20, 30));
console.log (calculeWidth (false, 800, 200, 10));

calculeWidth (true, 0, 0, 0);

calculeWidth (true, 34, 250, 308);



