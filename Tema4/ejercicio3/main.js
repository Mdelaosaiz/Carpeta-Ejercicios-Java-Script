'use strict'

let iva = 2.1;

function price(a){
   return 'precio sin Iva: ' + a + '€' + ' IVA: ' + `${iva}`+ '€'  + ' total: ' + (a+iva)+ '€'  ;
}

console.log(price(34));