const palabras = ['mar', 'montaña', 'cielo', 'aire'].
const posicionaleatoria = Math.floor(Math.random() * palabras.length)
const palabraSecreta = palabras[posicionaleatoria]

let palabraConGuiones = palabraSecreta.replace(/./g, "_ ");
const pregunta = prompt('Introduce una letra, por favor');

for (let i = 0; i < posicionaleatoria.length; i++) {
    if (pregunta === posicionaleatoria[i]) {

    }
}