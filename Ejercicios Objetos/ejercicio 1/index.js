// Vamos a crear un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'. A continuación seguiremos los siguiente pasos:

const userData = { };

const job = 'developer';

// Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):
// Añadiremos una propiedad llamada firstName y le asignaremos un valor.
// Añadiremos una propiedad llamada lastName y le asignaremos un valor.
// Añadiremos una propiedad llamada age y le asignaremos un valor numérico.
// Añadiremos una propiedad job a la que asignaremos el valor de la constante job

userData.firstName = 'Marian';      //userData['firstname] = 'Marian';
userData.lastName = 'de la Osa';   //userData['lastName] = 'de la Osa';
userData.age = '31';              //userData['age'] = '31';
userData.job = job;              //userdata['job'] = 'Teacher';

// Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
console.log(userData.firstName);

// Cambiaremos el nombre del usuario por otro distinto

userData.firstName ='María Antonia';
console.log(userData.firstName);

// Aumentaremos en 1 la edad del usuario
userData.age = parseInt (userData.age) +1;
console.log(userData.age);
typeof (userData.age); 
console.log(typeof (userData.age));
// Comprobaremos de nuevo que todo sigue funcionando correctamente