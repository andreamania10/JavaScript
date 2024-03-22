const table = document.querySelectorAll('tr');

table.forEach((tr) => {
    tr.addEventListener('click', () => {
        table.forEach((tr) => {
            tr.style.backgroundColor = 'transparent';
        })
        tr.style.backgroundColor = 'olive';
        tr.querySelector('input[type=radio]').checked = true;
    })
})
