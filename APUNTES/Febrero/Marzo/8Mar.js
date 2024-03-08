CALCULAR UN FACTORIAL EN JAVASCRIPT:
- Hay que dar una constante;
- Luego atribuirle una variable con el último número(en este caso el 1) y finalmente
    - Hacer un bucle for, donde el valor i, se le atribuye el valor de la constante;
- Para realizar la operación hay que multiplicar e igual la variable con la i. 

ARRAY EN JAVASCRIPT: 
Un dato complejo: varios datos. 
Declaración de un array: const cosas = ['corazon', 'cara sonriente', 'sol']
Puedes acceder a cada uno de los elementos del array utilizaremos un número que identifica su posición[0]: es el primer número. 

Métodos para manipular de arrays:
- Push / Pop: añadir elemento al final. / Elimina el último elemento. 
- Slice / Splice: Devuelve un recorde desde la posición indicada por el primer parámetro hasta la posición indicada por el segundo parámetro / elimina, a partir de cierta posición(primer parámetro), el número de elementos indicado(segundo parámetro). 
- Shift / unshift: Lo que hace es quitar el primer elemento del array y te lo devuelve en una nueva constante. / Añadir algo al principio
    - Concat / indexOf: se añade una palabra al final / se identifica en qué posción está. 
- Reverse: va al revés.Cambia el orden de las palabras. 

Recorrer los elementos del array:
for (index in cosas): sabremos la posición del array. //0 1 2
    for(element of cosas): elemento que estoy iterando. // corazon, cara sonriente, sol 


ESTRUCTURA FOREACH: Recorremos un array llendo de uno en uno, desde el primer elemento hasta el último, el bucle forEach nos ofrece una sintaxis más simplificada que utilizar el tradicional bucle for. 
