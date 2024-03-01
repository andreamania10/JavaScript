
//EJERCICIO2: Calcular número secreto

const p = Math.floor(Math.random() * (5)) + 1;
let isPlaying = true;
let attempts = 0;

while (isPlaying) {
    const d = Number(prompt('Introduce el numero, por favor. '));
    if (p == d) {
        alert('Número acertado, hemos ganado');
        isPlaying = false;
    } else {
        alert('Numero fallado.');
        attempts++;
        if (attempts === 3) {
            isPlaying = false;
            alert('Hemos perdido')
        }
    }

}

alert('Fin del juego')