const capa = document.querySelector('.color');


const animate = () => {
    capa.classList.add('animate__animated', 'animate__bounce');
    capa.addEventListener('animationend', () => {
        capa.classList.remove('animate__animated', 'animate__bounce');
    });
}

document.querySelector('button').addEventListener('click', animate);