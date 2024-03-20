const botonrojo = document.querySelector('.botonrojo');
const showMenu = () => {
    document.querySelector('.botonrojo').classList.toggle('active');
}

document.querySelector('.hamburguer').addEventListener('click', showMenu)

window.addEventListener('click', (e) => {
    if (!botonrojo.contains(e.target)) {
        botonrojo.classList.remove('active');
    }
});
r. .