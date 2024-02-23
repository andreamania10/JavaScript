//EJERCICIO1: Crear y llamar a una función que reciba como parámetro de entrada un valor booleana y muestre <<sí, eso es cierto>> si el valor es true, y <<no, eso es falso>> si el valor es false. 

function cierto(booleano) {
    console.log(booleano ? 'Sí, eso es cierto' : 'No, eso es falso');
}

cierto(false);


//EJERCICIO<<HOY QUIERO COMER>> Crea una función llamada hoy quiero comer que recibe un parámetro "comida" cuyo valor será <<garbanzos>>. Cuando llamemos a la función se mostrará un log indicándonos lo que deseamos comer. 

function hoyQuieroComer(comida) {
    console.log('Hoy quiero comer' + ' ' + comida)
}

hoyQuieroComer('garbanzos')

//EJERCICIO3: Crear una función llamada calcularCubo que recibe un número, calcule us cubo y muestre el resultado por consola. Llamar a la función pasándole el valor 3. 
function calcularCubo(num) {
    const r = num * num * num
    console.log(r)
}
calcularCubo(3)

//EJERCICIO4: Crear una función llamada calclarVelocidad que recibirá la velocidad en Km/hora y la mostrará en metros/hora.

function calcularVelocidad(kmHora) {
    const mHora = kmHora * 1000;
    console.log(mHora)

}

calcularVelocidad(3)

//EJERCICIO5: Crear una función llamada calcularArea que recibirá el ancho y el alto de un rectángulo y calculará su area. Cuando una función recibe varios parámetros, estos irán separados por coma.

function calcularArea(alto, ancho) {
    const area = alto * ancho;
    console.log(area)
}

calcularArea(4, 5)

//EJERCICIO6: Crear y llamar a una función que recibe la base y la altura de un triángulo y calcula su área. 

function calcularTriangulo(base, altura) {
    const areatr = base * altura / 2
    console.log(areatr)
}

calcularTriangulo(3, 5)

//EJERCICIO7: Crear estas dos funciones: Calcula perímetro(radio) y calcular el area(radio). 

function calculaPerimetro(radio) {
    perimetroCircunferencia = 2 * Math.PI * radio
    console.log(perimetroCircunferencia)
}

function calcularArea(radio) {
    areacircunferencia = Math.PI * radio * radio;
    console.log(areacircunferencia)
}

calculaPerimetro(4)
calcularArea(4)

