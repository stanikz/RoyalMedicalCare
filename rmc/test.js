// JavaScript for the slider
const sliderImages = document.querySelectorAll('.slider-image');
let currentSlide = 0;

function showSlide(slideIndex) {
    sliderImages.forEach((image, index) => {
        if (index === slideIndex) {
            image.style.opacity = 1; // Show the selected image
        } else {
            image.style.opacity = 0; // Hide other images
        }
    });
    updateSlideIndicators(); // Update the active dot
}

// Function to add slide indicators (dots)
function addSlideIndicators() {
    const sliderDots = document.querySelector('.slider-dots');

    // Clear any existing dots
    sliderDots.innerHTML = '';

    sliderImages.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (index === 0) {
            dot.classList.add('active-dot');
        }
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
        sliderDots.appendChild(dot);
    });
}

// Function to update slide indicators (dots)
function updateSlideIndicators() {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active-dot');
        } else {
            dot.classList.remove('active-dot');
        }
    });
}

// Initialize slide indicators and show the first slide
addSlideIndicators();
showSlide(currentSlide);
