window.onscroll = function(){

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    console.log(posicion);
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");

    elemento1.style.bottom = posicion * 0.2 + "px";
    elemento2.style.top = posicion * 0.1 + "px";

}

/* Explicación:

En este caso, el elemento1 se desplaza hacia abajo y el elemento2 se desplaza hacia arriba. Para ello, se utiliza la propiedad bottom y top, que se utilizan para especificar la posición de un elemento desde la parte inferior y superior de su contenedor, respectivamente.

*/

/* Terminos:

window.pageYOffset: Devuelve la cantidad de píxeles que el documento se ha desplazado verticalmente.

document.documentElement.scrollTop: Devuelve la cantidad de píxeles que el documento se ha desplazado verticalmente.

onscroll: Evento que se produce cuando el usuario desplaza el contenido de un elemento.

La diferencia entre window.pageYOffset y document.documentElement.scrollTop es que el primero es compatible con todos los navegadores y el segundo es compatible con todos los navegadores menos IE8 y anteriores.

*/