// Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. 

// Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.
//como la acción se va a realizar cuando el usuario pulse un botón, creamos una variable con el botón para, luego; añadir el listener.

const btn = document.querySelector('.js-btn');

//como queremos que nos devuelva un mensaje, creamos una función en la que dentro van a ocurrir toda la magia.
function showMesage(){

// creo dos variables para cada uno de los libros que el usuario va a escribir.

  const book1 = document.querySelector('.book1').value;
  const book2 = document.querySelector('.book2').value;

//creo un array para después recorrer los libros que ha puesto el usuario.

  let books = [book1, book2];

// hago el bucle "for of" para decirle que recorra los libros y nos pinte la frase.
 for(const book of books){

// lo consoleo con la llamada a la variable del bucle.

  console.log(`¡A mí también me encantó "${book}"! Tenemos mucho en común, humana.`);

 }
}

btn.addEventListener('click', showMesage);