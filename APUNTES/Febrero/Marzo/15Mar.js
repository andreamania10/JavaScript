//SOME Y EVERY

//SOME
La instrucción some devuelve un booleano que será true cuando al menos uno de los items cumple la condición.
const v = people.some(person => person.age === 35); //devolverá true

//EVERY
Devuelve un booleano que será true cuando los ítems cumplan la condición.
const v = people.some(person => person.age === 35); //devolverá false

//ERRORES EN JAVASCRIPT

//TIPO DE ERRORES: 
-SyntaxError: Error de sintaxis.El intérprete ni siquiera podrá ejecutar el código. 

- TypeError: Se produce cuando intentamos realizar una operación sobre un valor que es de un tipo de dato que no permite realizar la operación. 

- ReferenceError: ocurre cuando intentas utilizar una variable o función que no ha sido declarada o no está accesible en el ámbito actual.

//TRY/CATCH
Permite gestionar errores que pueden ocurrir en un bloque de código, en tiempo de ejecución.
Producen un mensaje de error y interrupe la aplicación.
    Bloque *try* contiene el código que pensamos que puede arrojar errores.
        Bloque *catch* contiene la gestión del error que se pudiera haber producido dentro del bloque try. No puede haber un catch sin un try.

        El bloque *finally* estará necesariamente vinculado a una estructura try-catch. Se ejecutará siempre después de un bloque try-catch.
const v = 4;

try {
    v = 7;
} catch (err) {
    console.log('El error es:', err);
} finally {
    console.log('Ejecución del finally');
}

call stack window - pila de llamadas

debugger: buscar errores.
    breakpoint:

//DOM: Document Object Modem 
Todas las etiquetas son objetos.Puedes modificar todo lo que hay en tu página web. 
Para acceder, se utiliza el Queryselector. 

El value es lo que hay escrito.El id es el #campoNombre

    < form >
    Escribe tu nombre, por favor:
<input type="text" id="campoNombre">
    <input type="button" id="btn" value="Enviar formulario">
    </form>

    <script>
	const saludar = () =>{
            document.querySelector('#campoNombre').value =
            document.querySelector('#campoNombre2').value
        }
        document.querySelector('#btn').addEventListener('click', saludar);
    </script>