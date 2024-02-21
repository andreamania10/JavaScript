//EJERCICIO1: Declara una constante llamada txt1 que contenga el texto <<Este es el principio>>

const txt1 = 'Este es el principio.'
console.log(txt1)

//EJERCICIO2: Declara una consatnte llamada txt2 que contenga el texto "Este es el final"

const txt2 = 'Este es el final.'
console.log(txt2)

//EJERCICIO3: Declara otra consatnte llamada txt3 que contenga la concatenación de ambas cadenas, colocando un espacio en blanco entre medias. 

const txt3 = txt1 + ' ' + txt2
console.log(txt3)

//EJERCICIO4: Hacer un conversor de euros a dólares. Tendremos una consatnte llamada euros en la que el valor estará incializado con valor 7. Debemos calcular ese valor en dólares. Supondremos que un euro son dos dólares. 
const euros = 7;
const dolares = euros * 2;
console.log(dolares)

//EJERCICIO5: El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una consatnte precio inicializada con valor 100, calcule el precio con IVA. 
const precio = 100;
const precioConIva = 100 * 1.21 //precio original + 0.21 del precio. p(1 + 0.21) = p(1.21)

console.log(precioConIva)

//EJERCICIO6: Realiza un programa que a partir de los valores constantes, ancho=4 y alto=7, calcule el área de un rectángulo. Recuerda que el area de un rectángulo es ancho por alto.
const ancho = 4;
const alto = 7;

console.log('El area del rectángulo es: ', ancho * alto)

//EJERCICIO7: Hacer un conversor de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar los grados centígrados por 9/5 y sumar 32. Para comprobar que hemos hecho cálculos correctaamente, partiremos de una constante llamada centigrados que valdrá 20. En este caso, los grados fahrenheit deberían ser 68. 
const centigrados = 20;
const fahrenheit = centigrados * 9 / 5 + 32

console.log(fahrenheit)

//EJERCICIO8: Vamos a mandar al usuario la caja de sus sueños. Para ello, partiremos de los siguientes valores: 
const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña , indómita'

console.log(nombre, 'ha pedido una caja de', material, 'con unas dimensiones', dimensiones, '.', comentario)