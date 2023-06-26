/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// var arrays = [3,"auto",false,[1,2],4.2];
// key/clave     0    1    2      3     4
// 
//var objeto = {nombre: "Senén", edad: 24}
//for (var clave in objeto)
//Este for clave in objeto hace recorrer objetos y ahi busca por clave
//Porque la clave de un objeto son sus propiedades
function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var object = {
      nombre: nombre,
      edad: edad,
      meow: function meow(){
         return "Meow!";
      }
   } //Nota: el objeto puede ser retornado pero fuera de los {} del var objeto
      //y dentro de los {} de la función
      return object;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   const newObject = {
      email: "", 
      nombre: "",
      password: ""
   }
   newObject.email = email;
   newObject.nombre = nombre;
   newObject.password = password;
   return newObject;
}
console.log(nuevoUsuario('Senen', 'senencorreo', 'warneverchanges'));

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   //Nota: Utilizando los conocimientos de Bracket-Notation (objeto[propiedad])
   //Aqui estamos apuntanto a la propiedad dentro del objeto
   objeto[propiedad] = null;
   return objeto;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   //Como no tenemos el nombre del metodo, se le asigna a objeto por medio de Bracket-Notation
   //y creamos la funcion, y de esta manera se llama un metodo dentro de un objeto
   objeto[metodo]();

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   //Para hacer este proceso hay que entender muchas cosas:
   //Utilizando Dot-Notation
   //En este caso objetoMisterioso es un objeto, y numeroMisterioso es una propiedad dentro del objeto
   //Aqui dentro de la funcion multiplicarNumeroDesconocidoPorCinco lo que hacemos es igualar a total, la multiplicacion
   //por 5 del numeroMisterioso ubicado dentro de objetoMisterioso
   var total = objetoMisterioso.numeroMisterioso * 5;
   return total;
   //Nota: si es por el método Bracket-Notation la linea quedaria asi:
   //var total = objetoMisterioso["numeroMisterioso"] * 5;
   //Debido a que se debe citar con comillas para asegurarse de buscar
   //objetoMisterioso dentro de objetoMisterioso siendo una clave
   //Con el bracket-notation se busca asi el valor de numeroMisterioso
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   //Nota: a diferencia del anterior proceso, que la propiedad era desconocida, es decir no 
   //se habia establecido en la funcion, aqui propiedad esta dentro de los parametros en la funcion
   //por lo que es una variable y no debe ir en comillas
   //Solo se pone en comillas una propiedad existen en el objeto, pero al ser una variable externa que se utiliza
   //para buscar esa propiedad, no ira con comillas
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email)
   {
      return true;
   } else 
   {
      return false;
   }
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objeto[propiedad])
   {
      return true;
   } else {
      return false;
   }
   //Otra forma de crear el proceso es:
   //return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(password === objetoUsuario.password)
   {
      return true;
   } else 
   {
      return false;
   }
   //Nota: para esta comparaciones de variables con variables en objetos es
   //mas recomendable usar el método Dot-Notation
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   //Aunque tambien se puede hacer: objetoUsuario["password"] ya que no esta definifo password dentro 
   //de esta funcion
   objetoUsuario.password = nuevaPassword;
   //De esta manera objetoUsuario.password = nuevaPassword;
   //se reemplaza el valor dentro de password en objetoUsuario
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   //La actividad se refiere a esto:
   //objetoUsuario { 
   // nombre: "Alfredo",
   // amigos: ["Pedro", "Juan", "Martin"]
   //}
   objetoUsuario = {amigos : [] };
   //Recuerda: esto se puede realizar con el Dot-Notation
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   //Nota: si es un arreglo quiere decir que haremos uso del procedimiento for para
   //recorrerlo
   //Creacion de un arreglo que contenga objetos dentro:
   //objetoMuchosUsuarios = [
   // k  
   // 0  ??? = {esPremium: true},
   // 1  ??? = {esPremium: true},
   // 2  ??? = {esPremium: true},
   // 3  ??? = {esPremium: true}
   //]
   for(var i=0; i<objetoMuchosUsuarios.length; i++)
   {  //Dot-Notation
      objetoMuchosUsuarios[i]['esPremium'] = true;
      //Tambien se puede con Bracket.Notation
      //objetoMuchosUsuarios[i]["esPremium"]=true;
   }
   return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   //Lo que quiere decir el codigo:
   //objetoUsuario = {
   // posts: [post = {likes:3}, post = {likes:4}, post = {likes:11}]
   //   key          0                 1                 2
   //}
   var likes=0;
   for(var i=0; i<objetoUsuario.posts.length;i++)
   {
      likes = likes + objetoUsuario.posts[i].likes;
   }
   return likes;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   //Desarrolo para el entendimiento de este problema:
   objetoProducto.calcularPrecioDescuento = function(){
      return (this.precio - (this.precio * this.porcentajeDeDescuento));
      //Aunque tambien se puede de esta manera:
      //PrecioFinal=this.precio * this.porcentajeDeDescuento;
   }
   //Se puede utilizar el objeto, ya que dentro de ella
   //contiene la funcion
   return objetoProducto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
