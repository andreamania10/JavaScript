//EJERCICIO1: La calculadora. El usuario debe introducir dos números y unu operador y visualizar por consola el resultado de la operación. Las operaciones serán +, -, *, /.
const a = Number(prompt('Introduce un número'));
const b = Number(prompt('Introduce un número'));
const c = prompt('Introduce un operador')

let resultado;
if (c === '+') {
    resultado = a + b;
} else if (c === '-') {
    resultado = a - b;
} else if (c === '*') {
    resultado = a * b;
} else if (c === '/') {
    resultado = a / b;
}

alert(resultado)
