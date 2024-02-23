//EJERCICIO4: Suma los números del 5 al 0 (inclusive), en orden descendente usando un bucle de tipo for.
let sum = 0
for (let i = 5; i >= 0; i--) {
    sum += i;
}
console.log(sum)


//EJERCICIO5: Tabla de mltipicar del 7. Utilizando el bucle for, mostrar la tabla de multiplicar del número 7.


for (let n = 1; n <= 10; n++) {
    console.log('7 * ' + n + ' = ' + n * 7)
}


//EJERCICIO6: Mostrar la tabla de multiplicar que va del 1 al 9. Usaremos dos bucles anidados. 1. Utilizando el bucle for, hacer la tabla de multiplicar del número 1. Anidar la tabla de multiplicar hecha en el paso anterior, dentro de otro bucle for, que muesstre las tablas de multiplicar de los números que van del 1 al 10. 


for (let m = 1; m <= 10; m++) {
    for (let j = 1; j <= 10; j++) {
        const r = m * j;
        console.log(m + '*' + j + '=' + r)
    }

}

