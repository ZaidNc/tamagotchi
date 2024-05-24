// Obtener elementos del DOM
const tamagushiSprite = document.getElementById('tamagushiSprite');
const tamagushiStatus = document.getElementById('tamagushiStatus');
const feedButton = document.getElementById('feed');
const cleanButton = document.getElementById('clean');
const playButton = document.getElementById('play');

// Estado inicial del Tamagushi
let tamagushi = {
    happiness: 100,
    hunger: 0,
    cleanliness: 100
};

// Funciones para actualizar el estado del Tamagushi
function feed() {
    tamagushi.hunger -= 10;
    tamagushi.happiness += 5;
    updateTamagushi();
}

function clean() {
    tamagushi.cleanliness = 100;
    tamagushi.happiness += 10;
    updateTamagushi();
}

function play() {
    tamagushi.happiness += 15;
    tamagushi.cleanliness -= 5;
    updateTamagushi();
}

// Función para actualizar la apariencia del Tamagushi según su estado
function updateTamagushi() {
    if (tamagushi.hunger <= 0 || tamagushi.cleanliness <= 0) {
        tamagushiSprite.textContent = '😢';
        tamagushiStatus.textContent = 'Estado: Triste';
    } else if (tamagushi.happiness >= 100) {
        tamagushiSprite.textContent = '😄';
        tamagushiStatus.textContent = 'Estado: Feliz';
    } else {
        tamagushiSprite.textContent = '😐';
        tamagushiStatus.textContent = 'Estado: Neutral';
    }
}

// Agregar event listeners a los botones
feedButton.addEventListener('click', feed);
cleanButton.addEventListener('click', clean);
playButton.addEventListener('click', play);

// Actualizar estado inicial
updateTamagushi();
