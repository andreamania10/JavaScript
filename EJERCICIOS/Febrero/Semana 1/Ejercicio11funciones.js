
//EJERCICIO8: Escribe una función echo que devuelva el valor que recibe como parámetro.

function echo() {
    return "Greta";

}
const x = echo();
console.log(x)

function echo2(txt) {
    return txt;
}

const y = echo2("CO2");
console.log(y)

//EJERCICIO6: Modificar la siguiente función para que devuelva Inside si val está entre 10 y 20 inclusive y Outside en caso contrario.

function test(val) {
    if (val >= 10 && val <= 20) {
        return "Inside"
    } else {
        return "Outside";
    }
}

const z = test(11)
console.log(z)

//EJERCICIO7: Añade el operador de igual para que la siguiente función devuelva Equal cuando val sea 12.

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
const a = testEqual(10)
console.log(a)

//EJERCICIO8: Combina las sentencias if en un único bloque de tipo if/else.
function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Mayor que 5";
    } else {
        result = "Menor o igual a 5";
    }
    return result;
}

const b = testElse(8)
console.log(b)

//EJERCICIO9: Combina las sentencias en un único bloque de tipo if/elseif/else.
function testElse(val) {
    let result = " ";
    if (val > 5) {
        result = "Bigger than 5";
    } else if (val < 5) {
        result = "Smaller than 5";
    } else {
        result = "Equal to 5";
    }
    return result;
}

const c = testElse(4);
console.log(c)

//EJERCICIO10: ¿Qué valor de x se mostrará por consola?
function hola(nombre) {
    return "Hi " + nombre + "!";
}

const h1 = hola("Selva");
const h2 = hola("Pola");
const d = h1 + " " + h2;
console.log(d); // ¿Qué valor de x se mostrará en la consola?

//EJERCICIO11: ¿Qué valor de x se mostrará por consola?
function duplica(nombre) {
    return nombre + " and " + nombre;
}

const e = duplica("Roy");
console.log(e); // ¿Qué valor de x se mostrará en la consola?