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

// Función para manejar el movimiento en dispositivos táctiles
function handleTouchMove(event) {
    const touch = event.touches[0];
    const x = touch.clientX - gameArea.getBoundingClientRect().left - circle.offsetWidth / 2;
    const y = gameHeight - (touch.clientY - gameArea.getBoundingClientRect().top) - circle.offsetHeight / 2;

    // Verificar límites del área de juego
    if (x >= 0 && x <= gameWidth - circle.offsetWidth) {
        circleX = x;
    }
    if (y >= 0 && y <= gameHeight - circle.offsetHeight) {
        circleY = y;
    }

    updatePosition();
}

// Agregar evento para el movimiento táctil
gameArea.addEventListener("touchmove", handleTouchMove, false);
