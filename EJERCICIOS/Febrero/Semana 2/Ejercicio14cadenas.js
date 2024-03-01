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

//EJERCICIO14: Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.
const crearPalabra2 = (letra, num) => {
    let palabra2 = ' '
    for (let i = 0; i <= num; i++) {
        palabra2 += letra;
    }
    console.log(palabra2.toUpperCase())

}
crearPalabra2('andrea', 3)

//EJERCICIO15: Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.

const addGuiones = (txt2) => {
    let palabraGenerada = ' ';
    for (let i = 0; i < txt2.length; i++) {
        const letra = txt2[i]
        palabraGenerada += letra + '-';
    }
    return palabraGenerada;

}

const hola = addGuiones('Hola');
console.log(hola)

//EJERCICIO16: Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.
const contadorDeLetras = (txt3, letra) => {
    let palabraGenerada2 = 0;
    for (let i = 0; i < txt3.length; i++) {
        if (txt3[i] === letra) palabraGenerada2++
    }
    return palabraGenerada2;
}

const cantidadDeLetras = contadorDeLetras('maria', 'a')
console.log(cantidadDeLetras)

//EJERCICIO17: Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas

const contadorDeLetras2 = (txt3, letra) => {
    let palabraGenerada3 = 0;
    for (let i = 0; i < txt3.length; i++) {
        if (txt3[i].toUpperCase() === letra.toUpperCase()) palabraGenerada3++
    }
    return palabraGenerada3;
}

const cantidadDeLetras2 = contadorDeLetras2('MARia', 'a')
console.log(cantidadDeLetras2)

//EJERCICIO18: Hacer una función contadorDeLetras3 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.

const contadorDeLetras3 = (txt4, txt5, letra2) => {
    let contadorDeLetras1 = 0;
    let contadorDeLetras2 = 0;

    for (let i = 0; i < txt4.length; i++) {
        if (txt4[i].toUpperCase() === letra2.toUpperCase()) contadorDeLetras1++
    }
    for (let i = 0; i < txt5.length; i++) {
        if (txt5[i].toUpperCase() === letra2.toUpperCase()) contadorDeLetras2++
    }
    if (contadorDeLetras1 > contadorDeLetras2) return txt4;
    else if (contadorDeLetras1 < contadorDeLetras2) return txt5;
    else return 'son iguales'
}

const palabraGeneradora = contadorDeLetras3('Maria', 'Señora', 'a')
console.log(palabraGeneradora)

//EJERCICIO19: Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

const toCase = (txt6) => {
    return txt6.toLowerCase() + '-' + txt6.toUpperCase()

}

const textoencriptado = toCase('pablo');
console.log(textoencriptado)

//EJERCICIO20: Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.
const shortCut = (txt7, txt8) => {
    return txt7[0] + txt8[0]
}

const adeu = shortCut('Hola', 'Adeu')
console.log(adeu)

//EJERCICIO21: Escribe una función llamada firstChar, que devuelva la primera letra que no sea un espacio cuando una cadena de texto es pasada. Para ello, podemos eliminar los espacios en blanco que pudiera haber al principio y al final de la cadena de texto utilizando la el método trim().
const firstChar = (txt9) => {
    return txt9.trim()[0];
}

const palabraOtra = firstChar(' Rosa Parks ')
console.log(palabraOtra)

//EJERCICIO22: Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la primera. La función no debería tener en cuenta mayúsculas y minúsculas.

const indexOfIgnoreCase = (txt1, txt2) => {
    return txt1.toUpperCase().indexOf(txt2.toUpperCase())
}

console.log(indexOfIgnoreCase('Amanda', 'M'));

//EJERCICIO23: Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena. La primera palabra de la cadena serán todos los caracteres que hay hasta el primer espacio.
const firstWord = (txt) => {
    const whiteSpace = txt.indexOf(' ');
    const result = txt.substring(0, whiteSpace)
    return result;
}

const v = firstWord('Amanda y Antonia')
console.log(v)

