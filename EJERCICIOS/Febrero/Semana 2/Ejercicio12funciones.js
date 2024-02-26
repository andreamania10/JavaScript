//EJERCICIO 12: Completar la función para que se cumplan las siguientes condiciones:
function testSize(num) {
    if (num < 5) return "Tiny";
    else if (num < 10) return "Small";
    else if (num < 15) return "Medium";
    else if (num < 20) return "Large";
    else return "Huge";
}

const x = testSize(8)
console.log(x)

//EJERCICIO13: Escribe una función nand que tome como parámetros de entrada dos valores booleanos. Si ambos valores son true, debería devolver false. En cualquier otro caso, debería devolver true.

function nand(b1, b2) {
    if (b1 === true && b2 === true) {
        return false;
    } else {
        return true;
    }

}

console.log(nand(true, true));
console.log(nand(true, false));
console.log(nand(false, true));
console.log(nand(false, false));

//EJERCICIO14: Escribe una función nor que tome como parámetros de entrada dos valores booleanos. Si ambos valores son false, debería devolver true. En cualquier otro caso, el valor devuelto debería ser false.

function nor(b3, b4) {
    if (b3 === false && b4 === false) {
        return true;
    } else {
        return false;
    }
}

console.log(nor(false, false));
console.log(nor(false, true));
console.log(nor(true, false));
console.log(nor(true, true));

//EJERCICIO15: Escribe una función xor que tome dos valores booleanos. Si ambos valores son diferentes, debería devolver true. Si ambos valores son iguales, debería devolver false.

function xor(b5, b6) {
    if (b5 === false && b6 === true) {
        return true;
    } else if (b5 === true && b6 === false) {
        return true;
    } else {
        return false
    }
}

console.log(xor(false, false))
console.log(xor(false, true))
console.log(xor(true, false))
console.log(xor(true, true))
