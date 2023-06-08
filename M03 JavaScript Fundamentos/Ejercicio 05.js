/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if(num>0)
   {
      console.log("Es positivo");
      return "Es positivo";
   } else if (num<0)
   {
      console.log("Es negativo");
      return "Es negativo";
   } else
   {
      console.log(false);
      return false;
   }
}
esPositivo(67);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   str=str + "!";
   console.log(str);
   return str;
}
agregarSimboloExclamacion("Senen");

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   console.log(nombre + ' ' + apellido);
   return (nombre + ' ' + apellido);
}
combinarNombres('John', 'Rambo');

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   console.log("Hola " + nombre + "!");
   return("Hola " + nombre + "!");
}
obtenerSaludo('Fernando')

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   console.log('El área del rectangulo es '+ (alto*ancho));
   return (alto*ancho);
}
obtenerAreaRectangulo(10, 7);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   console.log('El perimetro del cuadrado es ' + (lado+lado+lado+lado));
   return (lado+lado+lado+lado);
}
retornarPerimetro(8);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   console.log("El perimetro del triangulo es " + ((base * altura)/2));
   return ((base * altura)/2);
}
areaDelTriangulo(6,10);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   console.log(euro + " euros = " + (euro*1.2) + " dolares");
   return(euro*1.2);
}
deEuroAdolar(145);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (letra == 'a' || letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i' || letra == 'I' || letra == 'o' || letra == 'O' || letra == 'u' || letra == 'U')
   {
      console.log('Es vocal');
      return 'Es vocal';
   } else if (letra != 'a' || letra != 'A' || letra != 'e' || letra != 'E' || letra != 'i' || letra != 'I' || letra != 'o' || letra != 'O' || letra != 'u' || letra != 'U')
   {
      console.log("Dato incorrecto");
      return 'Dato incorrecto';
   }else if (letra.length > 2)
   {
      console.log("Dato incorrecto");
      return 'Dato incorrecto';
   }
}
esVocal('k');

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
