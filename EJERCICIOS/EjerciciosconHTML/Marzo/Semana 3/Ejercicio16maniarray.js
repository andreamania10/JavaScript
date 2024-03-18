let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    const r = characters.filter(character => character.gender === 'female').map(character => character.name)
    console.log('getWomansName(): ', r);
}

const getSmallerPeople = () => {
    const star = characters.map(character => ({ ...character, height: character.height - 10 }))
    console.log('getSmallerPeople()', star)
}

const sumaDePeso = () => {
    const sumaPeso = characters.reduce((acc, character) => acc + character.mass, 0)
    console.log('sumadePeso()', sumaPeso)
}

const mediaDeAltura = () => {
    const mediaAltura = characters.reduce((acc, character) => acc + Number(character.height), 0) / characters.length;

    console.log('mediaDeAltura()', mediaAltura)
}

const collectByIndex = (position) => {
    const selectedCharacter = characters[position];
    collectedCharacters.push(selectedCharacter);
    console.log('collectByIndex', collectedCharacters);
}

const collectByName = (characterName) => {
    const selectedCharacter = characters.find(character => character.name === characterName);
    collectedCharacters.push(selectedCharacter)
    console.log('collectByName', collectedCharacters)
}

const removeByName = (characterName) => {
    const r = collectedCharacters.filter(character => character.name !== characterName);
    console.log('removeByName()', r)
}

const getCharacterFilms = (characterName) => {
    const r = characters.find(character => character.name === characterName);
    console.log('getCharacterFilms()', r.films)
}

const collectByName2 = (characterName) => {
    const char = collectedCharacters2.find(character => character.name === characterName);
    if (char) {
        char.amount++;
    } else {
        const selectedCharacter = characters.find(character => ({ ...character, amount: character.amount }))
        collectedCharacters2.push({ ...selectedCharacter, amount: 1 })
    }

    console.log('collectByName2', collectedCharacters2)
}

const mediaDeAltura2 = () => {
    const mediaAltura = collectedCharacters2.reduce((acc, character) => acc + Number(character.height), 0) / collectedCharacters2.length;

    console.log('mediaDeAltura()', mediaAltura)
}

const removeByName2 = (charactersName) => {
    const r = collectedCharacters2.filter(character => character.name != charactersName);
    console.log('removeByName2', r)
}
fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        getWomansName();
        getSmallerPeople();
        sumaDePeso();
        mediaDeAltura();
        collectByIndex(3);
        collectByName('Luke Skywalker');
        removeByName('Luke Skywalker')
        getCharacterFilms('Luke Skywalker')
        collectByName2('Luke Skywalker')
        collectByName2('Luke Skywalker')
        mediaDeAltura2()
        removeByName2('Luke Skywalker')
    });

