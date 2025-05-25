document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    
});

const track = document.querySelector('.slider-track');
const next = document.querySelector('.slider-btn.next');
const prev = document.querySelector('.slider-btn.prev');
const slides = document.querySelectorAll('.slider-track img');

let currentIndex = 0;
const visibleSlides = 3;

const slideWidth = slides[0].clientWidth + 20;

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

next.addEventListener('click', () => {
    if (currentIndex < slides.length - visibleSlides) {
        currentIndex++;
        updateSlider();
    }
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

document.querySelectorAll('.simple-sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

const galleryImages = document.querySelectorAll('.slider-track img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});