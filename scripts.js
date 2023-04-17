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



/* Add this code to your scripts.js file */
const carousel2 = document.querySelector('.carousel2');
const carousel2Slides = document.querySelector('.carousel2-slides');
let imageIndex = 0;

// Clone the first five images and append them to the end of the carousel
for (let i = 0; i < 5; i++) {
    const clonedImage = carousel2Slides.children[i].cloneNode(true);
    carousel2Slides.appendChild(clonedImage);
}

function moveRight() {
    imageIndex++;
    carousel2Slides.style.transition = 'transform 0.5s';
    carousel2Slides.style.transform = `translateX(-${imageIndex * (100 / 5)}%)`;

    // When the last cloned image is displayed, reset the image index and translateX property
    if (imageIndex === carousel2Slides.children.length - 5) {
        setTimeout(() => {
            carousel2Slides.style.transition = 'none';
            carousel2Slides.style.transform = 'translateX(0)';
            imageIndex = 0;
        }, 500);
    }
}

setInterval(moveRight, 4050); // Adjust the timing as needed




/* Add this code to your scripts.js file */
let currentTestimonial = 0;
const testimonials = document.getElementsByClassName('testimonial-slide');

function changeTestimonial(direction) {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial += direction;

  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  } else if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  testimonials[currentTestimonial].classList.add('active');
}


