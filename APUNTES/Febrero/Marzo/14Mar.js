const arr1 = [1, 2, 3, 4, 5];

const arr2 = [...arr1, 5, 6, 7];

const person = {
    name: 'John',
    age: 25
}

const person2 = {
    ...person,
    email: 'rqr@pp.com'
}

const hacerCosas = (a, ...b) => {
    console.log('hola', b)
}

hacerCosas('aaaa', 12, 23, 4, 54, 5)