Constantes:
const c = 'hola'

OPERADORES:
Concatenar:
const a = 'hola';
const b = 'adios';
const r = a + b

console.log(r)

Dos opciones 
a 'tiene' b 'años'.
    O:
${ a } tiene ${ b } años.

Operadores aritméticos:
Adición: 7 + 2
Sustracción: 7 - 2
Multiplicación: 7 * 2
División: 7 / 2
Resto: 7 % 2
Potencia: 7 ** 2

Resultados raros en operaciones aritméticas:
let n = 10 / 0
console.log(n) //Infinity


console.log(n); // Infinity
let n2;
let r = 10 + n2;
console.log(r); // NaN (Not a Number)

SUGAR SINTAX:
Contadores:
let i = 5
i = i + 1; // También se puede escribir de la siguiente manera: 
i++ //La suma no tendrá efecto hasta la línea siguiente. 
++i //La suma se efectuará en la propia línea. 
i += 5 //sumar
i *= 5 //multiplicar

//Lo mismo con la resta
i = i - 1;
i--;
i -= 1;


OPERADORES DE COMPARACIÓN: 
Para comparar dos valores y determinar la relación entre ellos.Permiten evaluar si una condición es verdadera o falsa, y devuelven un valor booleano(true o false) como resultado de la comparación.
    console.log('7>2: ', 7 > 2);     // true
console.log('7<2: ', 7 < 2);     // false

DIFERENCIA ENTRE == Y ===: 
El triple igual significa "son iguales sin conversión de tipos".
    console.log(1 == '1'); // true, conversión automática del tipo de datos
console.log(1 === '1'); // false, ya que son datos de diferente tipo
console.log(0 == false); // true
console.log(0 === false); // false, ya que son datos de diferente tipo

CONDICIONAL IF:
const dato1 = 5;
const dato2 = 3;

if (dato1 > dato2) {
    console.log('dato1 es mayor que dato2');
}

ELSE IF:
const dato1 = 5;
const dato2 = 10;

if (dato1 > dato2) {
    console.log('dato1 es mayor que dato2');
} else if (dato1 < dato2) {
    console.log('dato1 es menor que dato 2');
}

ELSE:
const dato1 = 3;
const dato2 = 5;
if (dato1 > dato2) {
    console.log("dato1 es mayor que dato2");
} else if (dato1 == dato2) {
    console.log('dato1 es igual que dato2');
} else {
    console.log('Va a ser que no...');
}

OPERADOR TERNARIO: 
En vez de poner
if (a > b) { console.log('a es mayor que b'); }
else { console.log('b es mayor que a'); }

Se hace así el ternario:
console.log(a > b ? 'a es mayor que b' : 'b es mayor que a');


ESTRUCTURA SWITCH: 
Es una plantilla habitual como si fuera un if else.Se usa bastante.
const opcion = 'opcion1';
switch (opcion) {
    case 'opcion1':
        console.log('Has escogido la opción 1');
        break;
    case 'opcion2':
        console.log('Has escogido la opción 2');
        break;
    case 'opcion3':
        console.log('Has escogido la opción 3');
        break;
    default:
        console.log('No has escogido ninguna de las opciones posibles');
}

OPERADOR BITWISE Y OPERADORES BOOLEANOS
Un operador bit a bii(o bitwise) opera sobre números inarios a nivel de bits individuales.Es una acción primitiva sustaanacialmente más rápida que las que se llevan a cabo sobre el valor real de los operandos.
    OPERADORES:
- Operador & (And): Devuelve 1 si ambos operadores son 1.
const t = true;
const f = false;
console.log('t & f: ', t & f); // 0
console.log('t && f: ', t && f); // false
- Operador | (Or): Devuelve 1 donde uno o ambos operandos son 1.
console.log('t | f: ', t | f); // 1
console.log('t || f: ', t || f); // true
- Operador ^ (XOR): Devuelve 1 donde un operando, pero no ambos sean 1.
console.log('t ^ f: ', t ^ f); // 1

Operador ~(Not): Invierte el valor del operando.
    console.log('~t: ', ~t); // -2
console.log('!t: ', !t); // false

Operador || y &&: 
El operador "//" devuelve el primer valor verdadero que encuentre, o el último valor si no encuentra ninguno.
    //  En este caso, la cadena 'false' es un valor verdadero, ya que es un texto, por lo que se devolverá.
    console.log(false || 'false'); // 'false'
console.log(typeof (false || 'false')); // string

El operador '&&' devuelve el primer valor falso que encuentre, o el último valor si todos son verdaderos.
    // En este caso, todos los valores son verdadero, por lo que se devolverá el último valor. 
    console.log(true && 'false'); // 'false'


BUCLE FOR EN JAVASCRPT:
for (let i = 0; i < 10; i++) {
    console.log(i);
}

Break se rompe el bucle; 
Continue ejecuta a la siguiente ejecución. 

FUNCIÓN QUE DEVUELVE UN VALOR:
Parámetros = Proceso = Output;
Función que no devuelve nada:
function noDevuelveNada(a, b) {
    const resultado = a + b;
    console.log(resultado);
}

noDevuelveNada(2, 3);

Función que devuelve algo:
function devuelveValor(a, b) {
    const resultado = a + b;
    return resultado;
}

const valorDevuelto = devuelveValor(2, 3);
console.log(valorDevuelto); (EL VALOR DEVUELTO ESTÁ EJECUTADO FUERA)

