//Ejercicio 8: Dado un número, calcula su factorial.

const dato = 5;
let r = 1;
for (let i = dato; i > 0; i--) {
    r *= i;
}

console.log(r)