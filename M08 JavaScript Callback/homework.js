/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   //Utiliza toUpperCase(), método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
   //Sintaxis: objeto.toUpperCase()
   //console.log( "alphabet".toUpperCase() ); // "ALPHABET"
   //Y utilizar método slice(): que sirve para rebanar un string
   //desconocia que se puede contar por arreglos en una variable
   return (nombre[0].toUpperCase() + nombre.slice(1));
   //Nota: numero[0].toUpperCase() lo que hace que la primera letra de la palabra se convierta
   //en Mayuscula, nombre.slice(1) hace que la palabra se parta o se separe de la primera letra
   //y de ahi tenga de la segunda letra en adelante
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   //cb(); de esta manera se hace el llamado de un callback
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   //Callback: cb(), Parámetros númericos: num1, num2
  
   return cb(num1, num2);
   //Nota: Las instrucciones no pedian realizar una función dentro del callback
   //La instrucción principal era de solo retornar el callback junto con sus parámetros

}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes retornar nada.
   // Tu código:
   //Para entender este código, nuevoNumero es la variable que se le asignara la suma de los numeros
   //dentro del arreglo. Lo que hace el método reduce con el arreglo 'arrayOfNumbers' 
   //es crear una función adentro, y con esa función recibe 2 parámetros; 'i' será el acumulador, 'o' es el valor de
   //dentro del arreglo, es decir, reduce lo que hara será recorrer dentro de la función los números de las posiciones 
   //dentro del arreglo 'arrayOfNumbers'
   //Para al final del conteo nuevoNumero tendra la suma de todos los valores del arreglo, y pasarlo como argumento
   //dentro del callback 'cb'
   var nuevoNumero = arrayOfNumbers.reduce(function(i,o){
      return i + o;
   });
   /*Otra manera de sumar numeros de un arreglo:
   var suma;
   for(var a=0;a<=length.arrayOfNumbers; a++)
   {
      suma += arrayOfNumbers[a];
   }
   cb(suma);*/ 
   cb(nuevoNumero);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   //Nota: lo que hace forEach(ele) es recorrer por clave/key el arreglo
   //ele es el número de cada posición a traves del conteo de array
   array.forEach(function(ele){
      cb(ele);
   });
   /*
   Aunque también se puede
   for(var i=0; i<=array.length; i++)
   {
      cb(array[i]);
   }*/
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   //El método map es parecido a push, solo que con map crea un nuevo array con
   //resultados a la llamada de la función
   var NewArray = array.map(function(a){
      //Es como si estuvieramos haciendo push() a las posiciones de un nueo arreglo
      return cb(a);
   });
   return NewArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   //Ejemplo de arreglo a ejecutar: array["Alberto", "Armando", "Oscar", "Roberto", "Alvaro"]
   //Se quiere retornar los nombres con inicial "a" o "A"
   //Utilizar el método filter()
   var NewArray = arrayOfStrings.filter(function(a){
      //Aqui verifica la primera letra, no localiza posiciones en el array, debido a que
      //estamos en la palabra de la posición, no en la posición
      if(a[0] === 'a'){
         return a;
      }
      //Si la primera letra es a en la palabra, se ingresa, no incluira las palabras 
      //que empiecen con otra letra que no sea "a" respectivamente 

      /*Existe otra forma:
      var NewArray = arrayOfStrings.filter(function(a){
         return a[i] === "a";
      })
      */
   });
   return NewArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
