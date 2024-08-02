document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("ball");
    const shootButton = document.getElementById("shootButton");

    // Function to start the throw animation
    function throwBall() {
        // Add the 'shoot' class to start the animation
        ball.classList.add("shoot");

        // Optionally remove the class after the animation ends to allow retriggering
        setTimeout(() => {
            ball.classList.remove("shoot");
        }, 2000); // Match the duration of the animation
    }

    // Trigger the ball throw on button click
    shootButton.addEventListener("click", throwBall);
});
