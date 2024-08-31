document.addEventListener('mousemove', (e) => {
    const image = document.querySelector('.moving-image');
    if (!image) {
        console.error('Image element not found');
        return;
    }

    // Get mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    // Center the image on the mouse pointer
    const offsetX = image.clientWidth / 2;
    const offsetY = image.clientHeight / 2;

    // Calculate rotation angle
    const angle = Math.atan2(y - window.innerHeight / 2, x - window.innerWidth / 2) * (180 / Math.PI);

    // Set the position and rotation of the image
    image.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px) rotate(${angle}deg)`;
});
