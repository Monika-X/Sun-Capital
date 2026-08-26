/* ==========================================================================
   SUNCAPITAL SLIDER MODULE - HERO SLIDER & CAROUSELS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initTestimonialSlider();
});

function initHeroSlider() {
  const sliderWrapper = document.querySelector('.hero-slider-wrapper');
  if (!sliderWrapper) return;

  const slides = sliderWrapper.querySelectorAll('.hero-slide');
  const prevBtn = sliderWrapper.querySelector('.slider-prev');
  const nextBtn = sliderWrapper.querySelector('.slider-next');
  const dotsContainer = sliderWrapper.querySelector('.slider-dots');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  // Build Dots if container exists
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    const dots = dotsContainer?.querySelectorAll('.slider-dot');
    if (dots && dots[currentIndex]) dots[currentIndex].classList.remove('active');

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    if (dots && dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 6000);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });

  sliderWrapper.addEventListener('mouseenter', stopAutoplay);
  sliderWrapper.addEventListener('mouseleave', startAutoplay);

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  sliderWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sliderWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    if (touchEndX < touchStartX - 40) {
      nextSlide();
      startAutoplay();
    }
    if (touchEndX > touchStartX + 40) {
      prevSlide();
      startAutoplay();
    }
  }

  startAutoplay();
}

function initTestimonialSlider() {
  const container = document.querySelector('.testimonial-carousel');
  if (!container) return;

  const slides = container.querySelectorAll('.testimonial-slide');
  const prevBtn = container.querySelector('.testi-prev');
  const nextBtn = container.querySelector('.testi-next');
  if (!slides.length) return;

  let current = 0;

  function show(index) {
    slides[current].classList.remove('active');
    slides[current].style.display = 'none';
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    slides[current].style.display = 'block';
  }

  slides.forEach((s, i) => {
    if (i !== 0) s.style.display = 'none';
    else s.classList.add('active');
  });

  if (prevBtn) prevBtn.addEventListener('click', () => show(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => show(current + 1));
}
