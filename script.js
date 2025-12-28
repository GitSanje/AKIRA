const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel(animate = true) {
  track.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex === totalSlides - 1) {
    currentIndex = 0;
    updateCarousel(false); 
  } else {
    currentIndex++;
    updateCarousel(true);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = totalSlides - 1;
    updateCarousel(false); 
  } else {
    currentIndex--;
    updateCarousel(true);
  }
});
