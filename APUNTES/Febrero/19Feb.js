//Cuando el código Javascript es escrito dentro de un documento HTML, se códifica dentro de las etiquetas script.

< script >
    alert('hola mundo!');
</script >

//Cuando es referenciado desde un documento HTML, el código javascript debe ser almacenado en un fichero con extensión.js.Escribimos la ruta al fichero js referenciado de la siguiente forma:

<script src="./ruta-al-fichero-js/fichero.js"></script>

<script> 
    console.log('rqr.js') 
</script>
//Nos muestra información en la consola. 
DESCARGAR QUOOKA.JS para poder ver el código

console.log('Hola');

// Comentarios en JS: Se puede poner // para una linea o */ para hacer multilinea /*. Se pueden usar la 3.

//Una variable es un lugar de almacenamiento. Se declara de la siguiente forma: 
let nombreVariable = 'Valor de la variable'

LA INSTRUCCIÓN "Typeof" nos devolverá el tipo de dato de una variable:

let text = "Hola que tal";
let number = 5;

console.log(typeof txt);
console.log(typeof number);


Tipos de datos primitivos:
- Number
    - Notaciones numéricas: Notación hexadecimal: En general almacenamos los valores numéricos utilizando el sistema decimal.Sin embargo, en JavaScript podemos almacenar valores utilizando valores hexademinal(en base 16).
        Ej: let n1 = 0x21; //2*16(elevado a 1) + 1*16(elevado a 0) = 32 + 1 = 33
    Notación científica: let x = 2e4; //2 * 10(elevado a 4) = 20000
- String: Su valor se escribe entre comillas.let texto = "Soy una cadena";
console.log(texto);
-Comillas dentro de comillas: Si en una cadena de texto queremos introducir unas comillas dentro de ontransitioncancel, podemos: simples, dobles o escapar las comillas(\"amigo\")
    - Booleano: Almacenar dos tipos de valores: true / false;
-Undefined: representa una variable que no ha sido inicializada;
-Null: Representa la ausencia intencional de cualquier valor. 
- Symbol
    - BigInt: Permite representar números enteros grandes que no pueden ser representados con el tipo Number.Se escriben con el sufijo "n"

Conversión de tipos:
-Convertir un número en texto:
let number = 5;
let numberConvertedInTexto1 = String(number);
let numberConvertedInText2 = '' + number;
let i = 5;
let j = 3;
console.log('' + i + j);

-Convertir un texto en un número
let txt = '5';
let number1 = Number(txt);
let number2 = +txt;
let number3 = ParseInt(txt) //Esto lo convierte a un número entero, eliminando los decimales si los hubiese. 

El ámbito de las varibles: Es la parte del programa en la que esa variable está disponible.Fuera de esa zona del programa, la variable no existe.

let variable1 = 5;
{
    let variable2 = 7;
    console.log(variable1); // 5
    console.log(variable2); // 7
}
console.log(variable1); // 5
console.log(variable2); // Esta línea dará error