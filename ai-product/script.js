const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showCarouselItem(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    showCarouselItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    showCarouselItem(currentIndex);
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Display AI statistics
// const stats = document.getElementById('stats');
// const aiStats = [
//     'AI is expected to create 2.3 million jobs by 2025.',
//     'The AI market is projected to reach $190 billion by 2025.',
//     'AI can increase business productivity by up to 40%.',
//     '85% of customer interactions will be managed without a human by 2025.'
// ];

// function displayStats() {
//     stats.innerHTML = aiStats.map(stat => `<p>${stat}</p>`).join('');
// }

// displayStats();