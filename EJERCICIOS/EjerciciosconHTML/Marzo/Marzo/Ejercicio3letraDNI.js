//EJERCICIO4: Vamos a desarrollar una aplicación que recibirá el número identificador de tu DNI y te devolverá la correspondiente letra. 

const a = prompt('Introduce tu DNI, por favor');

const letraDni = (a) => {
    if (a.length === 8 && Number(a)) {
        console.log(11111)
        const resto = a % 23;
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const letra = letras.charAt(resto);
        return letra;
    } else {
        return null;

    }
}

const dnientero = letraDni(a);
console.log(dnientero)
