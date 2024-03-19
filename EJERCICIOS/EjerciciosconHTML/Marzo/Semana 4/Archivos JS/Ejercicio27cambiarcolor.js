const selectColor = () => {
    const color = document.querySelector('#color').value;
    document.querySelector('body').style.backgroundColor = color
}

document.querySelector('#color').addEventListener('change', selectColor)