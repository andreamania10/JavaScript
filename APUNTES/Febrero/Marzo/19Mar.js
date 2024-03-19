Propiedad style: 
Le das style a  un elemento.Se pone normalmente obj.style(y lo que quieres, como puede ser color): obj.style.color = 'ff0000'

    //AÑADIR CLASE, BORRAR CLASE, ALTERNAR CLASE, EVALUAR SI TIENE UNA CLASE
    - Añadir clase: obj.classList.add('nombreClase');
- Cambiar clase: obj.classList.toggle('nombreClase');
- Eliminar clase: obj.classList.remove('nombreClase');
- Evaluar si tiene una clase: if (obj.classList.contains('thatClass')) {
    // do some stuff
}