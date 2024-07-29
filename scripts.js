// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const catImg = document.querySelector('.cat-guide');
    const catGameImg = document.querySelector('.cat-game-img');
    const laserPointer = document.getElementById('laser-pointer');
    const catGame = document.querySelector('.cat-game');

    // Move laser pointer
    document.addEventListener('mousemove', (e) => {
        laserPointer.style.left = `${e.pageX}px`;
        laserPointer.style.top = `${e.pageY}px`;
    });

    // Make the cat chase the laser pointer
    catGame.addEventListener('mousemove', (e) => {
        const rect = catGame.getBoundingClientRect();
        const catPosX = e.clientX - rect.left - (catGameImg.width / 2);
        const catPosY = e.clientY - rect.top - (catGameImg.height / 2);
        catGameImg.style.left = `${catPosX}px`;
        catGameImg.style.top = `${catPosY}px`;
    });

    // Add animation to the cat
    function startChaseAnimation() {
        catGameImg.style.animation = 'chase 2s linear infinite';
    }

    // Start the chase animation after the page loads
    setTimeout(startChaseAnimation, 1000);
});
