// crear un array movies con un listado de 3 películas que le gusten

const movies = ['Gladiator', 'warrior number 13', 'Braveheart'];


// añade al array anterior otra película más que le guste. No vale modificar la declaración del array, sino que añadiremos la nueva película en la posición 3 del array

movies [3]= 'Dragonheart';
// console.log(movies);

// Tienes que modificar la película que menos te guste de las que hay en el array, por el nombre de otra que te guste más.

movies [2] = 'Sleeping Beauty';

// Para terminar este ejercicio, vamos a encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos workWithMovies. Ejecutamos la función para comprobar que se muestran los mensajes en la consola correspondientes.

function workWithMovies (){
  const movies = ['Gladiator', 'warrior number 13', 'Braveheart'];
  movies [3]= 'Dragonheart';
  movies [2] = 'Sleeping Beauty';
  return movies;
}
console.log(workWithMovies);

//vamos a crar una función que nos devuelva la lista de las películas en el HTML.

function PintaPeliculas(array){
  let litems ='';
  for (let peli of array) {
    //creamos una lista con una clase para cada peli//
    litems += '<li class="js-list">'+peli+'</li>';
  }
  return litems;
}

document.querySelector('#pelis').innerHTML = PintaPeliculas(movies);

