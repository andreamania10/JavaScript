const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

let hemosGanado = false;

const palabras = ['mar', 'montaña', 'cielo', 'aire']
const posicionaleatoria = Math.floor(Math.random() * palabras.length)
const palabraSecreta = palabras[posicionaleatoria]

let palabraConGuiones = palabraSecreta.replace(/./g, "_ ");

while (!hemosGanado) {
    alert(palabraConGuiones)

    const letra = prompt('Introduce una letra, por favor');
    let letraEncontrada = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (letra === palabraSecreta[i]) {
            palabraConGuiones = replaceAt(palabraConGuiones, letra, i * 2);
            letraEncontrada = true;
        }
    }
    if (!letraEncontrada) {
        alert("Has fallado")
    }
    if (palabraConGuiones.indexOf("_") == -1) {
        alert("Has ganado");
        hemosGanado = true;
    }

}


