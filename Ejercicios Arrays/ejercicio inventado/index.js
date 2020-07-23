const fechas = [
{
  mes = "Enero",
  dias = [1,2,3,4,5,6,7,8,9,10,11,12]
},
{
  mes = "Febrero",
  dias=[1,2,3,4,5,6,7,8,9,10,11]
},
{
  mes = "Marzo",
  dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
},
{
  mes = "Abril",
  dias =[1,2,3,4,5,6,7,8,9,10,11,12,13]
},
{
  mes= "Junio",
  dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
}
];
//así se accede a un valor de un array
const matrix =[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

matrix[2][2]
let m1 = matrix[2];
m1[2];

//Recorre el array para escribir por consola los dias pares de cada mes. El texto sera {dia}-{mes,}

function PintaDiasPares(array){
//si queremos que el array se recorra del revés, siempre es mejor darle la vuelta en una variable, para que la lea solo una vez, que poner toooodo el rato array.reverse.length, array.reverse[m], porque cada vez que lo lee, lo tiene que dar la vuelta y hace trabajar mucho al ordenador.

// let arrayalreves = array.reverse()
for (m=0; m<array.length; m= m+1){
  for ( d=1; d<array[m].dias.length ; d = d+2)
  console.log(array [m].dias[d] +'-' +array[m].mes);
}
// así se haría con un "for of"... porque "For of" recorre Arrays PEEERO  no podría buscar los pares, es decir: solo se puede hacer para los meses. (NO se puede hacer con for in, porque es SOLO para objetos)
for (month of array){
  for (d=1; d<month.dias.length ; d = d+2)
  console.log(month.dias[d] + '-' + month.mes);
}

  
}


PintaDiasPares(fechas);