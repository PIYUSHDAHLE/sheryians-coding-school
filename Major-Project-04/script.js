//  banner carousel section
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startAutoplay() {
    slideInterval = setInterval(nextSlide, 4000);
}

function stopAutoplay() {
    clearInterval(slideInterval);
}

function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

document.querySelector('.carousel').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.carousel').addEventListener('mouseleave', startAutoplay);

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
});

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
});

startAutoplay();


