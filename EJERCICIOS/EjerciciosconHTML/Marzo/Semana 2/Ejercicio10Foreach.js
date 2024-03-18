//EJERCICIO1:  Crear un array con cinco nombres de persona y recórrelo mostrando el texto «Conozco a alguien llamado «
const nom = ['Andrea', 'Marta', 'David', 'Jan', 'Sergi'];

nom.forEach(nom => console.log("Conozco a alguien llamado " + nom));

//EJERCICIO2: Recorrer la siguiente lista con un bucle foreach imprimiendo el doble de cada número

const numeros = [1, 9, 3, 8, 5, 7]
numeros.forEach(item => {
    console.log(item * 2)
})

//EJERCICIO3: Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array.

const arr = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

arr.forEach(item2 => {
    if (item2 > 0) {
        positiveCount++;
    } else if (item2 < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
})

console.log('Cantidad de positivos: ' + positiveCount)
console.log('Cantidad de negativos: ' + negativeCount)
console.log('Cantidad de ceros: ' + zeroCount)

//EJERCICIO4: Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.

let positiveSum = 0;
let positivec = 0;

let negativeSum = 0;
let negativec = 0;

arr.forEach(item3 => {
    if (item3 >= 0) {
        positiveSum += item3;
        positivec++;
    } else {
        negativeSum += item3
        negativec++
    }
})

console.log('La media de números positivos es: ' + positiveSum / positivec)
console.log('La media de números negativos es: ' + negativeSum / negativec)