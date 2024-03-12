//ARRAYS MAP
El map te devuelve una copia.ahora tienes 2.
a partir del array generar un nuevo array que todos los elementos hayan tenido una modificación
const numbers = [1, 2, 3];
const multipliedNumbers = numbers.map(number => number * 2);
console.log(multipliedNumbers); // 2, 4, 6

//OBJETOS
Son la estuctura de datos compleja que tenemos en JavaSript.Son similares que un array, pero un objeto los elementos están identificados por una palabra, y no tienen un orden. 
Cada objeto, que se llama propiedades, van encerradas entre llaves { }
mientras que un array está entre corchetes[].

const persona = {
    nombre: "Juan",
    edad: 38,
    altura: 185
}
Son como los diccionarios en Python.

//GETTERS Y SETTERS: 
Nos permiten establecer condiciones de acceso y modificación a las propiedades de un objeto.
    Getter: establecer una transformación en los valores recuperados de un objeto.
    get nombreGenerico() {
    return this.nombre + ' Fernández';
},
Setter: establecer una transformación del valor asignado a una propiedad. 
set edadIncrementada(value) {
    this.edad = value + 10
}

//Convertir un objeto en un array
const persona = {
    nombre: "Juan",
    edad: 38,
    altura: 185,
}

const values = Object.values(persona);
const keys = Object.keys(persona);
const arrayDeArrays = Object.entries(persona);

//JAVASCRIPT FIND
Devuelve el elemento de un array que cumple cierta condición.


//JAVASCRIPT FILTER
Permite obtener los elementos de un array que cumplen cierta condición. 
Función que devuelve true si queremos añadir al array resultante el objeto que estamos evaluando, y false si no lo queremos añadir.
const result = numeros.filter(num => num < n_introducido);

//REDUCE
Concatenación con una palabra y permite acujmular valores en una variable.Convierte un array en una cadena de texto.
const frase = words.reduce((acc, word) => `${acc} ${word}`);
el acc es la variable acumulable. 

Acumular valores de un array de objetos, pero solo cuando cierta propiedad está presente.
const scoreSum = films.reduce((acc, film) => 'score' in film ? parseFloat(acc + film.score) : parseFloat(acc), 0);

//DESESTRUCTURACIÓN
Se usa bastante en React, no tanto en JavaScript.
Nos permite almacenar los valores de una entidad compleja(un array o un objeto) en variales independientes. 

Desestructuración de un array

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

Desestructuración de un objeto
const obj = { a: 1, b: 2, c: 3 };
const { a, b, c } = obj;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//REST OPERATOR / SPREAD OPERATOR (...)
- Spread operator: Permite expandir los elementos de un array u objeto en otro del mismo tipo.
const a = [1, 2, 3];
const b = [...a, 4, 5, 6];

- Rest operator: Permite agrupar varios elementos de un array u objeto en una única variable.Rest operator en los parámetros de una función.Aplicado a los parámetros de una función, el Rest Operator siempre junta los parámetros en un array.

const a = { letterA: 'a', letterB: 'b', letterC: 'c' };
const { letterB, ...otherLetters } = a;
console.log(otherLetters); // {letterA:"a", letterC:"c"}