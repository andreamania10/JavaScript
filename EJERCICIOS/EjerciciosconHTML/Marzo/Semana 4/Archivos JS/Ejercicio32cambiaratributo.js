const img = document.querySelector('img');
let i = 0;

const change = () => {
    i++
    if (i % 2 === 0) img.setAttribute('src', '/EJERCICIOS/EjerciciosconHTML/Marzo/Semana 4/Fotos/img/PinguLinux_Yoda.jpg')
}

img.addEventListener('click', change)