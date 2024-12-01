window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = 0;
        heroText.style.transition = 'opacity 2s ease';
        heroText.style.opacity = 1;
    }
});
let currentImageIndex = 0;
function showNextImage()
 {
    const images = document.querySelectorAll('.carousel-image');
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}
setInterval(showNextImage, 3000); // Change image every 3 seconds