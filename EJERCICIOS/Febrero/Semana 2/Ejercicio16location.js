//EJERCICIO LOCATION.HREF. Obtener el nombre de la página actual
const url = location.href;
const lastSlash = url.lastIndexOf('/')
const page = url.substring(lastSlash)

console.log(page)