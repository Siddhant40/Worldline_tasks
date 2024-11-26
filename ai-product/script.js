  
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
      const stats = document.getElementById('stats');
      const aiStats = [
          'AI is expected to create 2.3 million jobs by 2025.',
          'The AI market is projected to reach $190 billion by 2025.',
          'AI can increase business productivity by up to 40%.',
          '85% of customer interactions will be managed without a human by 2025.'
      ];

      function displayStats() {
          stats.innerHTML = aiStats.map(stat => `<div class="stat-box w-full md:w-1/4 p-2"><p>${stat}</p></div>`).join('');
      }

      displayStats();



      let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}