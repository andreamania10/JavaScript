let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    const r = characters.filter(character => character.gender === 'female').map(character => character.name)
    console.log('getWomansName(): ', r);
}

const getSmallerPeople = () => {
    const star = character.filter
}
fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        getWomansName();
    }); 