const slides = document.querySelector('.slides');
  const indicatorsContainer = document.querySelector('.indicators');

  // Create indicators
  for (let i = 0; i < slides.children.length; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicatorsContainer.appendChild(indicator);

    indicator.addEventListener('click', () => {
      currentSlide = i;
      updateSlider();
    });
  }

  let currentSlide = 0;

  function updateSlider() {
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;

    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    updateSlider();
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds