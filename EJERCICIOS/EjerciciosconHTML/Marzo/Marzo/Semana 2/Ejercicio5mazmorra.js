
let isPlaying = true
while (isPlaying) {
    const puertaCorrecta = Math.floor(Math.random() * 2) + 1;

    const askdoor = Number(prompt('Entras en una mazmorra con dos puertas. La puerta 1 y la puerta 2. Tras una de las dos puertas, se encuentra una muuerte segura. ¿Qué puerta escoges? 1/2'))

    if (askdoor === puertaCorrecta) {
        alert("Has escogido sabiamente")
    } else {
        alert("Mala suerte. Un dragón te come")
        isPlaying = false
    }
}


const p = puerta(askdoor)
console.log(p)