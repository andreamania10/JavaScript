//EJERCICIO5: Vamos a hacer una aplicación que se encargará de calcular el coste de un viaje. Para ello, solicitaremos al usuario el número de noches que pasará fuera y el destino del viaje:

const numNoches = prompt('Cuántas noches quieres pasar fuera?')

const destino = prompt('Donde quieres ir?')

const costeHotel = (numNoches) => numNoches * 140;

const costeAvion = (numNoches, destino) => {
    let coste;
    if (destino === "oviedo") {
        coste = 15;
    } else if (destino === "tokio") {
        coste = 700;
    } else if (destino === "madrid" || destino === "barcelona") {
        coste = 90;
    }
    if (numNoches > 3) {
        coste *= 0.9;
    }
    return coste;
}

const costeAlquierCoche = (numNoches) => {
    let coste = numNoches * 40
    if (numNoches > 7) {
        coste -= 50;
    }
    else if (numNoches > 3) {
        coste -= 20
    }
    return coste
}

const resultado1 = Number(costeHotel(numNoches))
const resultado2 = Number(costeAvion(numNoches, destino.toLowerCase()))
const resultado3 = Number(costeAlquierCoche(numNoches));

console.log("Coste hotel:", resultado1)
console.log("Coste avion:", resultado2)
console.log("Coste alquiler del coche:", resultado3)