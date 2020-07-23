'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75';

//Sacamos del html aquello que vamos a manipular en el JS.
document.querySelector ('img').src  = userAvatar || DEFAULT_AVATAR;

//Creamos la función con los parámetros son lo que queremos cambiar (aunque solo sirvan para dentro de la función)
function escribeh1(texto, cabecera, imagen){
  //como return, queremos que nos haga un artículo con todo el html dentro MAS los parámetros que queremos.
  return '<article> <h1 class="user__name">' + cabecera + '</h1>' + 
  '<img src="' + imagen+'"/>' +
  '<p>' + texto+'</p>' +
  '</article>';
}



