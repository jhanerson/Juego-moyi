window.onload = function () {

    $('#onload').fadeOut();
    $('body').removeClass('no-scroll')
}



// Obtener el elemento del círculo
const circle = document.getElementById("circle");

// Área del juego
const gameArea = document.querySelector(".game-area");

// Movimiento del círculo
let circleX = 0;
let circleY = 0;

// Tamaño del área del juego
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;

// Función para actualizar la posición del círculo
function updatePosition() {
    circle.style.left = circleX + "px";
    circle.style.bottom = circleY + "px";
}

// Función para manejar las teclas presionadas
document.addEventListener("keydown", function (event) {
    const step = 10; // Cantidad de píxeles para moverse

    switch (event.key) {
        case "ArrowUp":
            if (circleY < gameHeight - circle.offsetHeight) {
                circleY += step;
            }
            break;
        case "ArrowDown":
            if (circleY > 0) {
                circleY -= step;
            }
            break;
        case "ArrowLeft":
            if (circleX > 0) {
                circleX -= step;
            }
            break;
        case "ArrowRight":
            if (circleX < gameWidth - circle.offsetWidth) {
                circleX += step;
            }
            break;
    }

    updatePosition();
});
