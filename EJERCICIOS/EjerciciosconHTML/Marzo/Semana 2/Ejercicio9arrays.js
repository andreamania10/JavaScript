//EJERCICIO1: Crea un array con cinco nombres de persona y recórrelo con un bucle for mostrando el texto «Conozco a alguien llamado «.

const nombres = ['Andrea', 'Marta', 'Araceli', 'Juan', 'David']

for (let i = 0; i < nombres.length; i++) {
    console.log("Conozco a aguien llamado" + ' ' + nombres[i]);

}

//EJERCICIO2: Crea una función toArray que reciba dos valores y devuelva un array con estos dos valores.

const toArray = (a, b) => {
    const newArray = [];
    newArray[0] = a;
    newArray[1] = b;

    return newArray;
}

const v = toArray(5, 9);
console.log(v)

//EJERCICIO 3:  Recorrer la siguiente lista con un bucle imprimiendo el doble de cada número:

const numbers = [1, 9, 3, 8, 5, 7]

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2)
}

//EJERCICIO 4:  Escribe una función llamada getFirstElement que reciba un array y devuelva el primer elemento.

const getFirstElemento = (arr) => {
    let i = arr[0]
    return i;
}

const y = getFirstElemento([1, 2]);
console.log(y)

//EJERCICIO5: Escribe una función llamada setFirstElement que reciba como parámetro de entrada un array y un valor cualquiera. El valor recibido debería reemplazar lo que haya en la primera posición del array. El array debería ser devuelto.

const setFirstElemento = (array, number) => {
    array[0] = number;
    return array;

}

const z = setFirstElemento([1, 2], 3);
console.log(z)

//EJERCICIO6: Escribe una función getLastElement que reciba un array como parámetro de entrada y devuelva el último elemento del array.

const getLastElement = (ar) => {
    return ar[ar.length - 1];
}
const x = getLastElement([1, 2]);
console.log(x)

//EJERCICIO7: Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array.

const numers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let valorespositivos = 0;
let valoresnegativos = 0;
let valorescero = 0;

for (i = 0; i < numers.length; i++) {
    if (numers[i] > 0) {
        valorespositivos++
    } else if (numers[i] < 0) {
        valoresnegativos++
    } else {
        valorescero++
    }
}

console.log('Cantidad de positivos: ' + valorespositivos)
console.log('Cantidad de negativos: ' + valoresnegativos)
console.log('Cantidad de ceros: ' + valorescero)

//EJERCICIO8: Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.
let positiveSum = 0;
let positiveCount = 0;

let negativeSum = 0;
let negativeCount = 0;

for (let i = 0; i < numers.length; i++) {
    if (numers[i] > 0) {
        positiveSum += numers[i]
        positiveCount++
    } else if (numers[i] < 0) {
        negativeSum += numers[i]
        negativeCount++
    }
}

console.log('La media de números positivos es: ' + positiveSum / positiveCount)
console.log('La media de números negativos es: ' + negativeSum / negativeCount)

//EJERCICIO9: Selecciona un elemento del array arr de tal forma que una variable que debes declarar llamada myData sea igual a 8.
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
const myData = arr[2][1];
console.log(myData);