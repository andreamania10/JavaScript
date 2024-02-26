//Callback : El ejecutar una función que se ha puesto antes pero que se realiza en la siguiente función. 
function callback() {
    console.log('Llamada al callback');
}

function empezarTodo(a, b, myCallback) {
    console.log(a, b);
    myCallback();
}

empezarTodo(3, 4, callback);

//Llamar a una función al cabo de un tiempo: 
- setTimeout(miFuncion, 2000): cada 2 segundos: cada numero que pasa, aumenta el número. 
- setInterval(miFuncion, 2000): cada 2 segundos: para hacer un cronómetro.


//ARROW FUNCTIONS: Una expresión como función se refiere a una forma de definir una función utilizando una expresión. Implica asignar una función anónima a una variable. 
const sum = function (a, b) {
    return (a + b);
}

const nombreDeLaFunción = parámetros => cuerpoOvalorDevuelto //de un modo resumido

//SIN PARÁMETROS
const saludar = () => {
    console.log('Hola');
}

saludar(); // Hola

//CON UN PARÁMETRO: En los parámetros los paréntesis es opcional: Solo tengas un solo parámetro de entrada. 
const multiplicar1 = (param) => {
    const resultado = param * 2;
    console.log(resultado)
}

const multiplicar2 = param => {
    const resultado = param * 2;
    console.log(resultado)
}

multiplicar1(4);  // 8
multiplicar2(4);  // 8

//MÚLTIPLES PARÁMETROS: 
const multiplicar = (x, y) => {
    const resultado = x * y;
    console.log(resultado);
}

multiplicar(2, 3);  // 6

//SÓLO CON RETURN: Las siguientes dos funciones son equivalentes. Cuando una functión no tiene llaves, todo su contenido forma parte de su return.
const multiplicar1 = (x, y) => { return x * y };
const multiplicar2 = (x, y) => x * y;

const valor1 = multiplicar1(2, 3);
const valor2 = multiplicar2(2, 3);

console.log(valor1); // 6
console.log(valor2); // 6