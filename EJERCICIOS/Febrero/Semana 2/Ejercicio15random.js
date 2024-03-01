//EJERCICIO1: Numero random entre el 7 y el 5
const r = Math.floor(Math.random() * (7 - 5 + 1)) + 5;
console.log(r)

//EJERCICIO2: Generador de letras aleatorias
const nombre = "andrea"

const p = Math.floor(Math.random() * nombre.length);
console.log(p)
const letter = nombre[p]
console.log(letter)