const character = document.getElementById('character');

character.addEventListener('mouseover', () => {
    character.style.backgroundPosition = '0 -64px'; // Cambiar la posición en el spritesheet para la animación de hover
});

character.addEventListener('mouseout', () => {
    character.style.backgroundPosition = '0 0'; // Restablecer la posición en el spritesheet cuando no está en hover
});