//LAS FUNCIONES ALERT, PROMPT Y CONFIRM
Estas funcoines muestran un popup que permitirá al usuario interactuar con la aplicación introduciendo datos, pero sin necesidad de que programemos un formulario HTML 
Estas funciones son mala opción para recoger valores introducidos por el usuario, pero son opciones cómodas para usar con fines didáctcos.Estas funciones dependen del objeto window, y por tanto pueden llamarse de la siguiente forma:
<script>
    window.alert("Hola, que tal?");
    const nombre = window.prompt("Introduce un nombre por favor");
    const respuesta = window.confirm("Los datos introducidos ¿Son correctos?");
</script>
window = Objeto del navegador, representa el navegador y tiene objetos vinculados al navegador, cmo el location, el alert, etc. 

Sin embargo, para los métodos que dependen del objeto window es posible hacer una simplificación y evitar ponerlo. 
< script >
    alert("Hola, que tal?");
const nombre = prompt("Introduce un nombre por favor");
const respuesta = confirm("Los datos introducidos ¿Son correctos?");
</script >

    ALERT: Alerta que sale como un popup con un mensaje.
        PROMPT: Nos muestra un popup con un mensaje que habitualmente indica que es lo que debemos escribir en un cuadro de texto adyacente.De esta matchMedia, podremos recoger valores introducidos por el usuario sin necesidad de maquetar un formulario HTML. 
        < script >
    const nombre = prompt("Introduce un nombre por favor");
console.log(typeof nombre); // string
</script >


    CONFIRM: Esta función nos muestra un popup con un mensaje que habitualmente indica que es lo que debemos responder pulsando entre dos botones.Uno devuelve el valor booleano true y el otro el valor booleano false. 
    < script >
        const respuesta = confirm("Los datos introducidos ¿Son correctos?");
console.log(typeof respuesta); // boolean
</script >

    //CONVERTIR NUMERO COMO TEXTO EN NÚMERO
    Los valores que recogemos de un prompt son siempre texto, aunque escribamos un número.Para poder operarlos en una suma, debemos convertirlos a número, ya que el signo de sumar sirve para sumar números y para concatenar texto, y si el valor recogido es un texto, en lugar de sumarlo lo vamos a concatenar.Para convertir el valor recogido de un prompt en número, podemos hacer varias cosas:
const n = prompt("Introduce un número");
const n1 = parseInt(n); // Esta conversión a número nos lo deja como entero, eliminando los decimales.
const n2 = Number(n);
const n3 = +n;