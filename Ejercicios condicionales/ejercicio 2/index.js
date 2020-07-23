// En este ejercicio vamos a crear un control de acceso.

//Sacamos del html lo que vamos a "toquetear" o lo que va a cambiar en el JS
let box = document.querySelector('.nombre');

//Creamos una función en la que:
function changeStatus (ev) {
  //prepararemos una variable y le asignaremos un nombre.
  let name = "Marian";
  let text = document.querySelector ('.text');

//Si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)".
 if ((box.value === 'Marian') || (box.value === "Marta") ) {
   text.textContent="bienvenida";
//Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".
 }else {
   text.textContent = "Lo siento pero el usuario que has introducido no está registrado";
  }
}
//Por supuesto, lo último siempre es el listener ^^.
box.addEventListener ('input', changeStatus);