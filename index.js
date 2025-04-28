const colores = [
    { nombre: "Rojo", valor: "red" },
    { nombre: "Azul", valor: "blue" },
    { nombre: "Verde", valor: "green" },
];

const botones = document.querySelectorAll(".cart button");
const cartas = document.querySelectorAll(".cart");
const titulos = document.querySelectorAll(".cart h2");
const reiniciarBtn = document.getElementById("reiniciar");
const reiniciarColoresBtn = document.getElementById("reiniciar-colores"); // Nuevo botón para reiniciar colores

// Botones de puntos
const sumarJugador1Btn = document.getElementById("sumar-jugador-1");
const restarJugador1Btn = document.getElementById("restar-jugador-1");
const puntosJugador1 = document.getElementById("puntos-jugador-1");

const sumarJugador2Btn = document.getElementById("sumar-jugador-2");
const restarJugador2Btn = document.getElementById("restar-jugador-2");
const puntosJugador2 = document.getElementById("puntos-jugador-2");

let estadoCartas = [false, false, false];
let coloresDisponibles = [...colores];
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

// Función para obtener color único
function obtenerColorUnico() {
    if (coloresDisponibles.length === 0) {
        coloresDisponibles = [...colores];
    }
    const indiceAleatorio = Math.floor(Math.random() * coloresDisponibles.length);
    const color = coloresDisponibles[indiceAleatorio];
    coloresDisponibles.splice(indiceAleatorio, 1);
    return color;
}

// Evento para los botones de las cartas
botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        if (!estadoCartas[index]) {
            const colorUnico = obtenerColorUnico();
            cartas[index].style.backgroundColor = colorUnico.valor;
            titulos[index].textContent = colorUnico.nombre;
            estadoCartas[index] = true;
            boton.disabled = true;
        }
    });
});

// Eventos para sumar y restar puntos
sumarJugador1Btn.addEventListener("click", () => {
    if (puntajeJugador1 < 5) {
        puntajeJugador1++;
        puntosJugador1.textContent = puntajeJugador1;
        if (puntajeJugador1 === 5) {
            alert("¡El jugador 1 ha ganado!");
            desactivarBotones();
        }
    }
});

restarJugador1Btn.addEventListener("click", () => {
    if (puntajeJugador1 > 0) {
        puntajeJugador1--;
        puntosJugador1.textContent = puntajeJugador1;
    }
});

sumarJugador2Btn.addEventListener("click", () => {
    if (puntajeJugador2 < 5) {
        puntajeJugador2++;
        puntosJugador2.textContent = puntajeJugador2;
        if (puntajeJugador2 === 5) {
            alert("¡El jugador 2 ha ganado!");
            desactivarBotones();
        }
    }
});

restarJugador2Btn.addEventListener("click", () => {
    if (puntajeJugador2 > 0) {
        puntajeJugador2--;
        puntosJugador2.textContent = puntajeJugador2;
    }
});

// Función para desactivar los botones una vez que alguien gane
function desactivarBotones() {
    sumarJugador1Btn.disabled = true;
    restarJugador1Btn.disabled = true;
    sumarJugador2Btn.disabled = true;
    restarJugador2Btn.disabled = true;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    cartas.forEach((carta, index) => {
        carta.style.backgroundColor = "gray";
        titulos[index].textContent = "Gris";
        estadoCartas[index] = false;
        botones[index].disabled = false;
    });
    coloresDisponibles = [...colores];
    puntajeJugador1 = 0;
    puntajeJugador2 = 0;
    puntosJugador1.textContent = 0;
    puntosJugador2.textContent = 0;
    // Habilitar botones
    sumarJugador1Btn.disabled = false;
    restarJugador1Btn.disabled = false;
    sumarJugador2Btn.disabled = false;
    restarJugador2Btn.disabled = false;
}

// Función para reiniciar solo los colores
function reiniciarColores() {
    cartas.forEach((carta, index) => {
        carta.style.backgroundColor = "gray"; // Restablece el color gris
        titulos[index].textContent = "Gris";  // Cambia el texto a "Gray"
        estadoCartas[index] = false;         // Restablece el estado de la carta
        botones[index].disabled = false;     // Habilita los botones de las cartas
    });
    coloresDisponibles = [...colores]; // Restaura los colores disponibles
}

// Botón manual de reiniciar
reiniciarBtn.addEventListener("click", reiniciarJuego);

// Botón para reiniciar solo los colores
reiniciarColoresBtn.addEventListener("click", reiniciarColores);
