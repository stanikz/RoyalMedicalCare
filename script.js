// Function to adjust scroll position when clicking on navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Adjust the offset to leave space for the navigation bar (e.g., 60 pixels)
            const offset = targetElement.getBoundingClientRect().top + window.scrollY - 60;

            // Smoothly scroll to the target section
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});

// Select the hero section
const heroSection = document.querySelector('.fade-in.section'); // Add '.section' class to the hero section

// Add a class to trigger the animation after a delay
setTimeout(() => {
    heroSection.classList.add('active');
}, 500); // Adjust the delay time as needed (in milliseconds)

// Function to handle the fade-in animation on scroll
function handleFadeInOnScroll() {
    const elementsToFadeIn = document.querySelectorAll('.fade-in'); // Remove .fade-in-left and .fade-in-right selectors

    elementsToFadeIn.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Attach the handleFadeInOnScroll function to the scroll event
window.addEventListener('scroll', handleFadeInOnScroll);

// Trigger the animation on page load (in case the element is already in the viewport)
handleFadeInOnScroll();
