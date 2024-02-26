//EJERCICIO1: Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.

const longitud = "Andrea";
console.log("La palabra tiene " + longitud.length + " letras")

//EJERCICIO 2: Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.

const devuelvePrimeraLetra = "Hola";
console.log("La primera letra es: " + devuelvePrimeraLetra[0])

//EJERCICIO3: Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.

const devuelveUltimaLetra = "Hola";
console.log("La última letra es: " + devuelveUltimaLetra[3])

//EJERCICIO4: Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

const devuelveEnesimaLetra = ("Hola", 2);
console.log(devuelveEnesimaLetra);

//EJERCICIO5: Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.

const palabra = "Wonderful day";
console.log(palabra.substring(3, 7))

//EJERCICIO6: Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga. En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.
const devuelveMasLarga = (a, b) => a.length >= b.length ? a : b;

const cadenamaslarga = devuelveMasLarga("Hola", "Como estás")
console.log(cadenamaslarga)

//EJERCICIO7: Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. En caso de que al menos dos cadenas tengan igual longitud, devolveremos el texto Hay al menos dos cadenas iguales.

const devuelveMasLarga2 = (a, b, c) => {
    if (a.length > b.length && a.length > c.length) {
        return a;
    }
    else if (b.length > a.length && b.length > c.length) {
        return b;
    } else if (c.length > a.length && c.length > b.length) {
        return c;
    } else {
        return ("Hay al menos dos cadenas iguales")
    }
}
const cadenaMasLarga = devuelveMasLarga2('aa', 'bbb', 'cccc')
console.log(cadenaMasLarga)

//EJERCICIO8: Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.

const generarNombre = (d, e, f) => {
    if (d.length < 5 || e.length < 5 || f.length < 5) {
        return "error";

    } else {
        const g = d.substring(0, 3) + e.substring(0, 3) + f.substring(0, 3);
        return g;
    }
}

const nombre = generarNombre('Holas', 'Comos', 'Buens');
console.log(nombre)

//EJERCICIO 9: Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.

const generarNombre2 = (h, i, j) => {
    if (h.length < 5 || i.length < 5 || j.length < 5) {
        return "error";
    } else {
        return h.substring(h.length - 1) + i.substring(i.length - 1) + j.substring(j.length - 1)
    }
}
const apellido = generarNombre2('coche', 'montaña', 'bueno')
console.log(apellido)

//EJERCICIO10: Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.

const generarNombre3 = (m, n, o) => {
    if (m.length < 5 || n.length < 5 || o.length < 5) {
        return "error";
    } else {
        return m.substring(m.length - 3) + n.substring(n.length - 3) + o.substring(o.length - 3)
    }

}
const nombre3 = generarNombre3('Bienvenido', 'Enhorabuena', 'Felicidades')
console.log(nombre3)

//EJERCICIO11: Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.

const tieneLetra = (txt, letra) => txt.indexOf(letra) >= 0;

const laLetraEsta = tieneLetra('amor', 'a')
console.log(laLetraEsta)

//EJERCICIO12: Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas

const tieneLetra2 = (txt, letra) => txt.toUpperCase().indexOf(letra.toUpperCase()) >= 0;
const laLetraEsta2 = tieneLetra2('Amor', 'a')
console.log(laLetraEsta2)

//EJERCICIO13: Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número.

const crearPalabra = (letra, num) => {
    let palabra = ' '
    for (let i = 0; i <= num; i++) {
        palabra += letra;
    }
    console.log(palabra)

}
crearPalabra('a', 8)
