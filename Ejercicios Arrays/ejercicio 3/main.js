// Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.
// NOTA: Vamos a realizar este ejercicio de forma que, antes de programar nada, escribamos el un papel el listado de las acciones (algoritmo) que tenemos que realizar para conseguir el resultado que buscamos. Una vez escrito este listado, ya nos pondremos a programarlo en JS.

 let fecha= 2017;
//En el bucle, le ponemos i<15 porque queremos saber los últimos 15 años. Ninguno más. 
for ( i =0; i<15; i= i+1) {
 fecha = fecha+3;
 console.log ('la siguiente fecha de la luna del cazador es el 5 de Octubre del ' + fecha); 
}