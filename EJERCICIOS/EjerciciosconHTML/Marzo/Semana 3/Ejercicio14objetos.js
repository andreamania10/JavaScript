//EJERCICIO1: Escribe un objeto llamado miPerro que tenga las siguientes propiedades: piernas, colas, amigos. Dale valor a estas propiedades y haz tres console.log(), uno por cada una de las tres propiedades.

const miPerro = {
    piernas: 80,
    colas: 1,
    amigos: 3,
}

console.log(miPerro.piernas)
console.log(miPerro.colas)
console.log(miPerro.amigos)

//EJERCICIO2: La constante ojos debe valer la propiedad ojos del objeto testObj. Además, la constante nombre debe valer la propiedad nombre del objeto testObj.

const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

const ojos = testObj.ojos;      // Cambiar esta línea
const nombre = testObj.nombre;    // Cambia esta línea

console.log(ojos);
console.log(nombre);

//EJERCICIO3: Utilizar la constante playerNumber para acceder a la propiedad correspondiente del objeto testObj.

const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = playerNumber;   // Cambia esta línea

console.log(player);

//EJERCICIO 4:  Accede a la propiedad nombre para cambiar su valor de Coder a HappyCoder.
const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};
myDog.nombre = "Happy Coder";
console.log(myDog.nombre);

//EJERCICIO5: Convierte el bloque switch-case en un objeto llamado lookup.

function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea
    const lookUp = {
        "alpha": "Adams",

        "bravo": "Boston",

        "charlie": "Chicago",

        "delta": "Denver",

        "echo": "Easy",

        "foxtrot": "Frank",
    }
    result = lookUp[val]
    // Sólo cambia el código por encima de esta línea
    return result;
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago

//EJERCICIO6: Añade un nuevo album al array myMusic. Deberá tener las mismas propiedades, pero con valores diferentes que el primer objeto del array. Después, añadir un console.log para mostrar el valor del nombre del artista y otro console.log para mostrar el valor del primer elemento del array de formatos del album recien añadido.
const myMusic = [
    {
        artista: "Shakira",
        titulo: "Piano Man",
        formatos: [
            "CD",
            "8T",
            "LP"
        ],
        premios: true
    },
    {
        artista: "Juanjo",
        titulo: "Rompeolas",
        formatos: [
            "Vinilo",
            "DVD",
            "EP"
        ],
        premios: true
    }
];

console.log(myMusic[0].artista);
console.log(myMusic[1].artista)

//EJERCICIO7: Asigna a la constante gloveBoxContents el valor de la propiedad glob box.
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents);


//EJERCICIO8: Asigna a la constante secondTree el valor de la propiedad list del segundo objeto del array myPlants.
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree);