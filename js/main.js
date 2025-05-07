document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("side-menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});

const track = document.querySelector('.slider-track');
const next = document.querySelector('.slider-btn.next');
const prev = document.querySelector('.slider-btn.prev');
const slides = document.querySelectorAll('.slider-track img');

let currentIndex = 0;
const visibleSlides = 3;

// Calculamos el ancho real de cada imagen (incluido el gap de 20px)
const slideWidth = slides[0].clientWidth + 20;

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Evento flecha derecha
next.addEventListener('click', () => {
    if (currentIndex < slides.length - visibleSlides) {
        currentIndex++;
        updateSlider();
    }
});

// Evento flecha izquierda
prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});