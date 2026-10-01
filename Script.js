const boton = document.querySelector(".continuar");

boton.addEventListener("click", function() {
    document.querySelector(".sorpresa").classList.add("ocultar");
    setTimeout(function() {
    document.querySelector(".escena-hotwheels").classList.add("mostrar");

  setTimeout(function() {
    document.querySelector(".recuerdos").classList.add("mostrar");
    setTimeout(function() {
    document.querySelector(".mensaje-final").classList.add("mostrar");
}, 6000);
}, 5000);
}, 600);
});
setTimeout(function() {

    const mensajeFinal = document.querySelector(".mensaje-final");
    const carta = document.querySelector(".carta");

    // Aparece la carta
    mensajeFinal.classList.add("mostrar");

    // Después de aparecer, se abre sola
    setTimeout(function() {
        carta.classList.add("abierta");
    }, 4000);

}, 6000);
