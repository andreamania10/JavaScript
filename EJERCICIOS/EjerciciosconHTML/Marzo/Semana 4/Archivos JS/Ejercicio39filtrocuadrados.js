const filterThings = (e) => {
    const link = e.target;
    let thingsToFilter = '';
    if (link.classList.contains('orange')) {
        thingsToFilter = 'orange';
    } else if (link.classList.contains('blue')) {
        thingsToFilter = 'blue';
    } else if (link.classList.contains('gray')) {
        thingsToFilter = 'gray';
    } else {
        thingsToFilter = 'all';
    }

    document.querySelectorAll('.box').forEach(box => {
        if (box.classList.contains(thingsToFilter) || thingsToFilter === 'all') {
            box.classList.remove('disabled');
        } else {
            box.classList.add('disabled');
        };
    });
}

document.querySelectorAll('.link a').forEach(a => {
    a.addEventListener('click', filterThings);
})