//EJERCICIO: Utilizando el método find, busca el usuario cuyo nombre es Juan y muestra su edad.

const users = [
    {
        "name": "Paco",
        "isActive": false,
        "age": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "age": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "age": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "age": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "age": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "age": 7
    },
];

const choosedUser = users.find(users => users.name === "Juan");
console.log(choosedUser.age);

//EJERCICIOFILTER: Recorre el array anterior para obtener un nuevo array con los usuarios activos.
const users2 = [
    {
        "name": "Paco",
        "isActive": false,
        "edad": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "edad": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "edad": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "edad": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "edad": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "edad": 7
    },
];
const result = users2.filter(user => user.isActive);
console.log(result)

//EJERCICIO2:  Recorre el array anterior para obtener un array con los usuarios mayores de 18 años.
const users3 = [
    {
        "name": "Paco",
        "isActive": false,
        "edad": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "edad": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "edad": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "edad": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "edad": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "edad": 7
    },
];

const edad = users3.filter(user => user.edad > 18)
console.log(edad)

//EJERCICIO CON REDUCE: Dado el siguiente array de datos: [1,2,3]. Calcular el valor medio utilizando la instrucción reduce.

const datos = [1, 2, 3]
const media = datos.reduce((acc, dato) => acc + dato, 0) / datos.length;

console.log(media)