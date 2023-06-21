/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
console.log(devolverPrimerElemento('4'));

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
console.log(obtenerLargoDelArray(['Hola', 'que', 1, 'tal', 30, 500]));

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var NuevoArray = [];
   for (var i=0; i<array.length; i++)
   {
      NuevoArray.push(array[i]+1);
   }
   return NuevoArray;
}
console.log(incrementarPorUno([1, 3, 0]));

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
console.log(agregarItemAlFinalDelArray(['Senén', 'Francisco'], 'Jonathan'));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
console.log(agregarItemAlComienzoDelArray(['Silencio', 'Wake up'], 1));

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   //palabras = ['Hola', 'mundo'];
   var frase = palabras.join(' ');
   return frase;
}
console.log(dePalabrasAFrase(['Hola', 'mundo']));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (var i = 0; i < array.length; i++)
   {
      if (array[i]==elemento)
      {
         return true;
      }
   }
   return false;
}
console.log(arrayContiene([9, 0, 1], 1));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var R = 0;
   for (var i=0 ; i < arrayOfNums.length ; i++)
   {
      R = R + arrayOfNums[i];
   }
   return R;
}
console.log(agregarNumeros([1, 1, 4]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var P=0;
   for(var i = 0; i < resultadosTest.length; i++)
   {
      P+=resultadosTest[i];
   }
   return (P/resultadosTest.length);
}
console.log(promedioResultadosTest([10,9,5,4,3,1,10,3]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var N=0;
   for(var i = 0; i < arrayOfNums.length; i++)
   {
      if (N < arrayOfNums[i])
      {
         N = arrayOfNums[i];
      }
   }
   return N;
}
console.log(numeroMasGrande([10,0,4,3,25,6]));

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var arg = 1;
   if (arguments.length===0)
   {
      return 0;
   } else if (arguments.length===1)
   {
      return arguments[0];
   } else 
   {
      for (var i = 0; i < arguments.length; i++)
      {
         arg = (arg * arguments[i]);
      }
      return arg;
   }   
}
console.log(multiplicarArgumentos());

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var n = 0;
   for(var i=0;i<array.length;i++)
   {
      if(array[i]>18)
      {
         n=n+1;
      }
   }
   return n;
}
console.log(cuentoElementos([100,60,90,50,80,2]));

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7)
   {
      return "Es fin de semana";
   } else if (numeroDeDia> 1 && numeroDeDia < 7)
   {
      return "Es dia laboral";
   } else {
      return "Dia erroneo";
   }
}
console.log(diaDeLaSemana(2));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   //Nota: a diferencia de .split(), .toString() convierte los numeros en string
   //como su nombre indica, y tambien se convierten en elementos en posiciones de un arreglo
   var n = num.toString();
   if (n[0]==='9')
   {
      return true;
   } else {
      return false;
   }
}
console.log(empiezaConNueve(93));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (var i=0; i<array.length; i++)
   {
      var n=array[0];
      if (array[i] < n || array[i] > n)
      {
         return false;
      }
   }
   return true;
}
console.log(todosIguales([0,2,0,4,0,1,5,0,]));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var NewArray = [];
   for (var i=0;i<array.length;i++)
   {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
      {
         NewArray.push(array[i]);
      }
   }
   if (NewArray.length === 3)
   {
      return NewArray;
   } else 
   {
      return "No se encontraron los meses pedidos";
   }
}
console.log(mesesDelAño(["Enero", "Marzo", "Noviembre"]));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array = [];
   var n = 6;
   for (var i=0;i<=10;i++)
   {
      array[i]=n*i;
   }
   return array;
}
console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var NewArray = [];
   for (var i=0;i<array.length;i++)
   {
      if (array[i]>100 && array[i]<=200)
      {
         NewArray.push(array[i]);
      }
   }
   return NewArray;
}
console.log(mayorACien([100,200,300,150,340,1,23,150,90]));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var Array = [];
   var suma = num;
   for (var i=1 ; i<11 ; i++)
   {
      suma = suma + 2;
      if (suma === i)
      {
         break; //Lo que hace break es salirse del for
      } else 
      {
         Array.push(suma);
      }
   }
   if (Array.length < 10)
   {
      return "Se interrumpió la ejecución";
   } else if (Array.length === 10)
   {
      return Array;
   }
}
console.log(breakStatement(0));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var suma = num;
   var array = [];
   for (i=0; i<10; i++)
   {
      //Con esta condicion solamente se salta el conteo i===5
      if (i===5)
      {
         continue;
      }
      else //si no es i===5 entonces realiza su procedimiento normalmente
      {
         suma = suma + 2;
         array.push(suma); //Recuerda: arreglo.push(elemento) de esta manera se agrega automaticamente a un arreglo
      }
   } return array;
}
console.log(continueStatement(7));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
