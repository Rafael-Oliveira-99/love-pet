let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(n) {
    // Remove classes e atributos ARIA do slide anterior
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.removeAttribute('aria-current');
    });
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
        dot.setAttribute('tabindex', '-1');
    });
    
    // Adiciona classe e atributos ARIA ao novo slide
    slides[n].classList.add('active');
    slides[n].setAttribute('aria-current', 'true');
    
    dots[n].classList.add('active');
    dots[n].setAttribute('aria-selected', 'true');
    dots[n].setAttribute('tabindex', '0');
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Suporte para navegação com teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Auto-advance carousel a cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);
