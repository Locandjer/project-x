const mySunny = document.getElementById('mySunny');
let angle = 0;

function moveImage() {
    const xOffset = 10 * Math.sin(angle); // Spostamento orizzontale su una curva sinusoidale
    const yOffset = 5 * Math.sin(angle); // Spostamento verticale su una curva sinusoidale
    const rotation = 2 * Math.sin(angle); // Inclinazione leggera

    mySunny.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;

    angle += 0.05; // Aumenta l'angolo per il movimento continuo
    requestAnimationFrame(moveImage);
}

moveImage(); 
