let isPlaying = false;

const hasNumber = (myString) => /\d/.test(myString)


while (!isPlaying) {
    const nombre = prompt("Introduzca su nombre, por favor")
    if (!hasNumber(nombre)) {
        const real = (prompt("El nombre introducido no tiene ningún número. ¿Es su nombre real? Si / No"))

        if (real.toLowerCase === "si") {
            isPlaying = true;
            alert("Seguimos con el proceso de registro")
        } else {
            alert("Como ese no es su nombre real, debe volver a empezar")
        }
    }
    else {
        alert("Los datos introducidos son incorrectos. El nombre introducido tiene un número")
    }
}
