/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio)
   {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      //Nota: this.detalle es el objeto que retorna las propiedades de la persona 
   } 
   detalle(){
      return {
         nombre: this.nombre,
         apellido: this.apellido,
         edad: this.edad,
         domicilio: this.domicilio
      }
   }
}
/*var a = new Persona("Senen", "Lord", 24, "Calle Anonima #44");
console.log(a.detalle());*/

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   var Instancia = new Persona(nombre, apellido, edad, domicilio);
   //Nota: el error estaba que regresaba un método (Instancia.detalle) en la instancia,
   //y lo que pide es solo el objeto instanciado
   return Instancia;
}
console.log(crearInstanciaPersona("Mar", "Lopez", 20, "Atlantico Oeste"));
function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   //Nota: dice agregar un nuevo método de clase, no extender, me equivoque con
   //class datos extends Persona
   //Nota2: no indica agregar propiedades a la función, por lo que nombre y edad son referencias de
   //la clase Persona
   Persona.prototype.datos = function(){
      return (this.nombre+", "+this.edad+" años");
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
