function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array; // Se agrega la declaración de return

}

const btnPulsado = (e) => {
    document.querySelector('.correct').innerHTML += e.target.innerHTML + ' ';
}

const comprobar = () => {
    if (frase === document.querySelector('.correct').textContent.trim()) {
        alert('exito');
    } else {
        alert('fracaso');
    }
}

const frases = ["Si una serra, serra un xiprer, sis serres serren, sis xiprers.", "setze jutges d'un jutjat mengen fetge d'un penjat"];
const frase = frases[Math.floor(Math.random() * frases.length)];
const palabras = frase.split(" ");
const palabrasDesordenadas = shuffle(palabras);

const palabrasHTML = palabrasDesordenadas.map(palabra => `<span class="button">${palabra}</span>`).join(' ');

// const pulsacionAbajo = () => {
//     document.querySelectorAll('.originales span').forEach(o => {
//         o.addEventListener('click', () => {
//             document.querySelector('.result').innerHTML += '<span>' + o.innerHTML + '</span> '


//             document.querySelectorAll('.result span').forEach((o, i) => {
//                 o.addEventListener('click', () => {
//                     const code = document.querySelector('.result').innerHTML;
//                     const codeArr = code.split('');
//                     codeArr.splice(i, 1)
//                     document.querySelector('.result').innerHTML = codeArr.join(' ')
//                     pulsacionAbajo()
//                 })
//             })
//         })
//     })
// }
// Es un ejemplo para poder borrar en el console por si  me he equivocado



document.querySelector('.frase').innerHTML = palabrasHTML;

document.querySelectorAll('.button').forEach(obj => obj.addEventListener('click', btnPulsado));


document.querySelector('button').addEventListener('click', comprobar);