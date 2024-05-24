// JavaScript for the slider
const sliderImages = document.querySelectorAll('.slider-image');
const sliderDotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(slideIndex) {
    sliderImages.forEach((image, index) => {
        console.log("image", image);
        if (index === slideIndex) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

// Function to update slide indicators (dots)
function updateSlideIndicators() {
    const dots = sliderDotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active-dot', index === currentSlide);
    });
}

// Function to add slide indicators (dots)
function addSlideIndicators() {
    sliderImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) {
            dot.classList.add('active-dot');
        }
        dot.addEventListener('click', () => {
            currentSlide = index;
            console.log("slideindex", currentSlide);
            showSlide(currentSlide);
            updateSlideIndicators();
        });
        sliderDotsContainer.appendChild(dot);
    });
}

// Initialize slide indicators and show the first slide
addSlideIndicators();

// Debugging: Log the click event on slider dots
sliderDotsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('slider-dot')) {
        const dotIndex = Array.from(sliderDotsContainer.children).indexOf(event.target);
        currentSlide = dotIndex;
        console.log('Clicked on dot. Current slide:', currentSlide); // Add this line for debugging
        showSlide(currentSlide);
        updateSlideIndicators();
    }
});

// Initialize slide indicators and show the first slide
showSlide(currentSlide);
