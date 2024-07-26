document.addEventListener('DOMContentLoaded', () => {
    // Create a container for the cursor trails
    const trailContainer = document.createElement('div');
    trailContainer.className = 'cursor-trail-container';
    document.body.appendChild(trailContainer);

    // Create the cursor trail elements
    const trails = [];
    for (let i = 0; i < 10; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trailContainer.appendChild(trail);
        trails.push(trail);
    }

    let trailIndex = 0;

    document.addEventListener('mousemove', (e) => {
        const trail = trails[trailIndex];
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        trail.style.opacity = 1;
        trail.style.transform = `translate(-50%, -50%) scale(1)`;

        // Move to the next trail element
        trailIndex = (trailIndex + 1) % trails.length;

        // Fade out old trails
        trails.forEach((t, i) => {
            if (i !== trailIndex) {
                t.style.opacity = 0;
                t.style.transform = `translate(-50%, -50%) scale(0.5)`;
            }
        });
    });

    document.addEventListener('mouseleave', () => {
        trails.forEach(trail => {
            trail.style.opacity = 0; // Hide trails when leaving the document
        });
    });

    document.addEventListener('mouseenter', () => {
        trails.forEach(trail => {
            trail.style.opacity = 1; // Show trails when entering the document
        });
    });
});
