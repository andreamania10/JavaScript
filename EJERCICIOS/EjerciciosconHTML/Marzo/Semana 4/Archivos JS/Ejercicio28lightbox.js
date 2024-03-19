
const lightboxContainer = document.querySelector('#lightboxContainer');

const showUp = () => {
    document.querySelector('#lightboxContainer').style.display = 'block';
}

const hideIt = () => {
    document.querySelector('#lightboxContainer').style.display = 'none';
}

document.querySelector('.btn').addEventListener('click', showUp)
document.querySelector('#ocultar').addEventListener('click', hideIt)
document.querySelector('#overlay').addEventListener('click', hideIt)



