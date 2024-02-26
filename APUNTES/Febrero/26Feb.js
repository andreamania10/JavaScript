//Callback : El ejecutar una función que se ha puesto antes pero que se realiza en la siguiente función. 
function callback() {
    console.log('Llamada al callback');
}

function empezarTodo(a, b, myCallback) {
    console.log(a, b);
    myCallback();
}

empezarTodo(3, 4, callback);

//Llamar a una función al cabo de un tiempo: 
- setTimeout(miFuncion, 2000): cada 2 segundos: cada numero que pasa, aumenta el número. 
- setInterval(miFuncion, 2000): cada 2 segundos: para hacer un cronómetro.

//MÉTODOS PARA TRABAJO CON CADENAS: 
Una constante llamada nombre = "ramona"
    - nombre.substring(1, 3): sería //am
        - nombre.substring(2): //mona
- nombre.slice(-2): //na: Acepta negativos. Substring no
- nombre.length: //numero de letras. 6
- nombre.toUpperCase: //palabra en mayúsculas: RAMONA
- nombre.toLowerCase(): //palabra en minúsculas: ramona
- nombre.includes("a"): //Booleano: true
- nombre.indexOf("a"): //La posición de la primera 'a' de la palabra: 1
- nombre.lastIndexOf("a"): //La posición de la última 'a' de la palabra: 5
- nombre.charAt(0): //Primera letra de la palabra: R; 
- nombre[0]: //Primera letra de la palabra: R.
