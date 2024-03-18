

const cambiaContenidoCapaDos = () => {
    document.querySelector("#capa2").innerHTML = "Has pasado el mouse por encima del cuadrado 2"
}

document.querySelector('#capa2').addEventListener('click', cambiaContenidoCapaDos)