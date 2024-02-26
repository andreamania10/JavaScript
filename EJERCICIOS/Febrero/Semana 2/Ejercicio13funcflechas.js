//EJERCICIO1: Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log.

const cubo = (num) => {
    const resultado = num ** 3;
    console.log(resultado)
}


cubo(3);

//EJERCICIO2: Crear y llamar a una función flecha que recibe la velocidad en Km/hora y la devuelva en en metros/hora. Recoger el valor devuelto y mostrarlo con un console.log.

const velocidad = (kmH) => {
    const mH = kmH * 1000;
    console.log(mH)
}

velocidad(2)

//EJERCICIO3: Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área. Recoger el valor devuelto y mostrarlo con un console.log. Cuando una función recibe varios parámetros, estos irán separados por coma.

const calculateArea = (width, height) => {
    const area = width * height;
    console.log(area)
}

calculateArea(3, 5)

//EJERCICIO4: Crear y llamar a una función flecha que recibe la base y la altura de un triángulo y devuelva su área.Recoger el valor devuelto y mostrarlo con un console.log. Área triángulo = base * altura / 2

const calculateTriangulo = (width, height) => {
    const area = width * height / 2;
    console.log(area)
}

calculateTriangulo(5, 3)

//EJERCICIO5: Crear estas dos funciones flecha: calculatePerimeter(radius), calculateArea(radius). Recoger los valores devueltos por las funciones y mostrarlos con un console.log

const calculatePerimeter = (radio) => {
    const perimetro = 2 * Math.PI * radio;
    console.log(perimetro)
}

const calcularArea = (radio) => {
    const area = Math.PI * radio * radio;
    console.log(area)
}

calculatePerimeter(3)
calcularArea(3)