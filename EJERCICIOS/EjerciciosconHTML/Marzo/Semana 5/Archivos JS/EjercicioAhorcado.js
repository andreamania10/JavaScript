const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

const palabras = ['amor', 'gato', 'bulevar', 'pasado']
const secretWord = palabras[Math.floor(Math.random() * palabras.length)]
let hiddenWord = secretWord.replace(/./g, "_ ");
document.querySelector('.hiddenWord').innerHTML = hiddenWord;

let errorContar = 0;
const evaluar = () => {
    const letra = document.querySelector('input').value;
    document.querySelector('input').value = '';
    let error = true;
    for (i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letra) {
            hiddenWord = replaceAt(hiddenWord, letra, i * 2)
            error = false;
        }
    }
    document.querySelector('.hiddenWord').innerHTML = hiddenWord

    if (error) {
        errorContar++;
        document.querySelector('.ahorcado').style.backgroundPosition = -errorContar * 300 + 'px';
        if (error == 4) {
            document.querySelector('.info').innerHTML = 'Has perdido';
        }
    }
    if (!hiddenWord.includes("_")) {
        document.querySelector('.info').innerHTML = "Has ganado";
    }
}

document.querySelector('button').addEventListener('click', evaluar);