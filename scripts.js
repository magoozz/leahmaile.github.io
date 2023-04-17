const scrollSections = document.querySelectorAll('.scroll-section');

function checkScroll() {
  scrollSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop <= screenHeight / 1.3) {
      section.style.opacity = '1';
    } else {
      section.style.opacity = '0';
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);


const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function moveCarousel() {
  carouselSlides[currentSlide].style.left = '-100%';
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  carouselSlides[currentSlide].style.left = '0';
}

setInterval(moveCarousel, 3000);



const carousel2Slides = document.querySelector('.carousel2-slides');
let imageIndex = 0;

function moveRight() {
    imageIndex++;
    if (imageIndex >= carousel2Slides.children.length - 2) { // Update this line to stop at the correct image
        imageIndex = 0;
    }
    carousel2Slides.style.transform = `translateX(-${imageIndex * (100 / 3)}%)`; // Update the translate percentage
}

setInterval(moveRight, 3000); // Adjust the timing as needed

