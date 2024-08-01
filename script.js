document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.glowing-title');
    const miniTitle = document.querySelector('.mini-title');
    const imageContainer = document.querySelector('.image-container');

    setTimeout(() => {
        document.body.classList.add('background-image');
        title.classList.add('title-up');
        miniTitle.classList.add('title-up');
        imageContainer.classList.add('image-visible');
    }, 2000); // 2 seconds delay before starting transition
});
