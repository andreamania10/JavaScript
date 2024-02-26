//Ejercicio: operador booleano. Modificar solo el operador booleano para lograr que se imprima el mensaje. 
const dato1 = 10;
const dato2 = 10;
if (dato1 == dato2) {
    console.log('exito');
}

//EJercicio2: Corrige los errores que hay en este código: 
if (10 == 10) {
    console.log('You got a true!')
} else {
    console.log('You got a false!')
}

//EJERCICIO3: Dada una constanate que contiene la nota de un examen que a de 0 a 10...
const nota = 8;
if (nota >= 6) {
    console.log('Has aprobado')
} else if (nota == 5) {
    console.log('Aprobado por los pelos');
} else {
    console.log('Suspenso')
}

//EJERCICIO4: Declara una constante 'i' de tipo entero y asígnale un valor. Mostrar un mensaje indicando si el valor de 'i' es positivo o negativo, si es par o impar, si es múltiploo de 5, si es múltiplo de 10 y si es mayor o menor que 100. Consideraremos el 0 como positivo. 

const i = 10;
if (i < 0) {
    console.log("Es un número negativo")
} else {
    console.log("Es un número positivo")
}
if (i % 2 === 0) {
    console.log("Es un número par")
} else {
    console.log("Es un número impar")
}
if (i % 5 == 0) {
    console.log("Es un número múltiplo de 5")
}
if (i % 10 == 0) {
    console.log("Es un número múltiplo de 10")
}
if (i > 100) {
    console.log("Es menor que 100")
} else {
    console.log("Es mayor de 100")
}

//EJERCICIO5: Haer una calculadora que determine la operación a realizar por medio de una estructura de control if. 

const n1 = 3;
const n2 = 7;
const op = '+';

if (op === '+') {
    console.log(n1 + n2);
} else if (op === '-') {
    console.log(n1 - n2);
} else if (op === '*') {
    console.log(n1 * n2);
} else if (op === '/') {
    console.log(n1 / n2)
}