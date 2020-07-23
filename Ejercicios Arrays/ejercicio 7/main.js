//Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase.
const adalabers = [{
  name: 'María',
  age: 29,
  job: 'diseñadora',
},
{
  name: 'Lucía',
  age: 31,
  job: 'ingeniera química',
},
{
  name: 'Susana',
  age: 34,
  job: 'periodista',
},  
{
  name: 'Rocío',
  age: 25,
  job: 'actriz',
},
{
  name: 'Inmaculada',
  age: 21,
  job: 'diseñadora',
}
]
//Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers: 
//Una función countAdalabers que devuelve el número de adalabers en el listado.

function countAdalabers (object){
  return object.length;
}

console.log(countAdalabers(adalabers));

//Una función averageAge que devuelve la media de edad de listado.

function averageAge(object){

 let media = 0;

 for (let i=0; i < object.length; i++){
      media += object[i].age;
 }
 let result = media/object.length;
 return result;
}
let temp =averageAge(adalabers);
console.log(averageAge(adalabers));

//Una función theYoungest que devuelve el nombre de la adalaber más joven.
function theYoungest (object){
  let youngest= object[0];

  for (let i=0; i<object.length; i++){
  if (youngest.age > object[i].age){
    youngest = object[i];
  }
  }
  return youngest;
}
console.log(theYoungest (adalabers));


//Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

function countDesigners (object){
let counter=0;
for (let i=0; i<object.length; i++){
  if (object[i].job === 'diseñadora'){
    counter+=1;    
  }
}
 return counter;
}
console.log(countDesigners (adalabers));

// vamos a buscar el diseñador más joven.

function youngestDesigner (object){
  //le doy el valor Null porque no se sabe quien es (si le pongo = 0 doy por hecho que el de la posición 0 ya es diseñador y con edad).
  let youngest = null;

  for (let i=0; i<object.length; i++){
    //1º miramos si es diseñadora (porque como todos tienen edad, es mejor buscar lo que les diferencia).
    if (object[i].job === 'diseñadora'){
    // si youngest es null significa que la primera diseñadora le da el valor.
     if(youngest=== null){

      youngest = object[i];
     // si no es null, hay que comparar las edades y me quedo con la menor.
     }else if (youngest.age > object[i].age){

       youngest = object[i];
     }
       
    }
  }
  return youngest;
}

console.log(youngestDesigner (adalabers));


// para rizar el rizo, queremos la más joven y la más vieja de las adalabers.

function theYoungestAndOldest (object){

  let youngest = object[0];
  let oldest = object[0];

  for (let i=0; i<object.length; i++){

  if (youngest.age > object[i].age){
    youngest = object[i];
  }
  if (oldest.age < object[i].age){
    oldest = object[i];
  }
  }
  //return [youngest, oldest] ;
  return {young : youngest, old : oldest} ;
}
console.log(theYoungestAndOldest (adalabers));

//si quiero ver quien es la mas vieja, usando la función anterior sería... se puede ir concatenando TODOS los elementos que queramos.
console.log(theYoungestAndOldest (adalabers).old);

// para buscar el nombre de el mas viejo.
console.log (console.log(theYoungestAndOldest (adalabers).old.name)) 

//si hay un array de objetos de inventario de el más viejo, quiero el objeto que esté en la posición5 (el 6º objeto):
//console.log (console.log(theYoungestAndOldest (adalabers).old.inventario[5])); 


let peliculas = null;
fetch('url_peliculas')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    peliculas = data.result;
  });




let pelisServidor = [
  {
   name= "a",
   sinopsis = "a"
  },
  {
   name = "b",
   sinopsis = "b"
  }
];

let pelisFavoritas = [

]

function pinchaPelicula(event){
  //nosecomo sacamos la pelicula
  let pelipinchada = pelisServidor[1];
  addfavoritos(pelipinchada);
}

function addfavoritos(pelicula){
  pelisFavoritas.push(pelicula);
  refreshFavoritos();
}

function refreshFavoritos(){
  //Meter en la ul la lista de favoritos
  //cambiar el numero de favortios
}

,
function borrarFavoritos(){
  pelisFavoritas =[];
  refreshFavoritos();
}

btnBorrar.addevent('click',borrarFavoritos)


// {
//   "name":"Ariel del Mar",
//   "email":"dangerousRedHair@example.com",
//   "phone":"0424-4724697",
//   "comment":"Ahora que estamos en fase 3 ¿Alguna amigui se apunta a una mariscada el Sábado?",
//   "picture":"http://beta.adalab.es/ejercicio-fin-de-semana-promo-j/data/images/ariel.jpg"
// }

function creaArticle(comentarioPricensa){
let article = "<article><h3>"+comentarioPricensa.name+"</h3><p>"+comentarioPricensa.comment+"</p></article>";

return article;
}

let divMaster = document.querySelector('.divMaster');
function creaListado(array){
  divMaster.innerHTML = "";
  for (i=0;i < array.length; i++){
    if (array[i].mame === "el pescailla"){
    divMaster.innerHTML += creaArticle(array[i]);
    }
  }
}

fetch('princesas')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    creaListado(data);
  });
