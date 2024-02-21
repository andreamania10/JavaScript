//EJERCICIO1: Imprimir los números pares que hay dentro de los 100 primeros números enteros. No utilizar la estructura de control if para resolver este ejercicio.

for (let i = 0; i <= 100; i += 2) {
    console.log(i)
}

//EJERCICIO2: mprimir los números pares que hay dentro de los 100 primeros números enteros. El bucle avanzará de uno en uno; no de dos en dos como en el ejercicio anterior. Utilizaremos el operador % para separar los pares de los impares. Nota: El operador «%» nos da el resto de dividir un número entre otro.
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0)
        console.log(i)
}

//EJERCICIO3: imprimir los números del 1 al 20.
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }

    else if (i % 5 == 0) {
        console.log('Buzz');
    }

    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else {
        console.log(i)
    }
}

