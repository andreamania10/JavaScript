let r = 0;

const containerWidth = 512;
const capacontainer = document.querySelector(".fotos");
const move = () => {
    capacontainer.style.marginLeft = -containerWidth * r + 'px';
    r++
    if (r >= 3) {
        r = 0;
    }
}




document.querySelector(".btn").addEventListener('click', move)

