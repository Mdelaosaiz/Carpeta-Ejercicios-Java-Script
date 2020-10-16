'use strict'
// Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!
// Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
// si tenemos el avatar del usuario se muestre este.
// si no tenemos datos del avatar del usuario, se muestre el avatar por defecto
// NOTA: En este ejercicio aún no vamos a usar condicionales if/else, tenemos que apoyarnos en el operador OR para asignar al atributo src de la etiqueta img un valor u otro ;)
// NOTA: Cambia manualmente el valor de userAvatar ('http://www.fillmurray.com/300/300' o '') para comprobar que el programa funcionará para los usuarios que añadieron su foto y para los que no lo hicieron.


// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'https://img.freepik.com/vector-gratis/dibujos-animados-lindo-madre-bebe-gatos-abrazando_39961-1800.jpg?size=626&ext=jpg';

let name = document.querySelector('.user__name');

const avatar = document.querySelector('.user__avatar');
// console.log(avatar);

name.innerHTML = 'Marian';

avatar.src = userAvatar || DEFAULT_AVATAR;
console.log(avatar);

