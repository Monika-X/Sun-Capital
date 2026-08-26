/* ==========================================================================
   SUNCAPITAL INTERACTIVE COMPONENTS MODULE - ACCORDION, MODALS & FORMS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initAssessmentModal();
  initGalleryFilter();
  initFormValidation();
  initMythCards();
  initLightbox();
});

/* --- FAQ Accordion --- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other accordion items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
    });
  });
}

/* --- Free Site Assessment Modal --- */
function initAssessmentModal() {
  const modal = document.getElementById('assessmentModal');
  const triggerBtns = document.querySelectorAll('.trigger-assessment-modal');
  const closeBtn = modal?.querySelector('.modal-close-btn');
  const backdrop = modal?.querySelector('.modal-backdrop-close');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --- Project Gallery Masonry Filter --- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter') || 'all';

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          item.style.display = 'block';
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            if (btn.getAttribute('data-filter') !== 'all' && item.getAttribute('data-category') !== filterVal) {
              item.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
}

/* --- Form Validation & Toast Feedback --- */
function initFormValidation() {
  const forms = document.querySelectorAll('form:not(.newsletter-form)');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#E74C3C';
        } else {
          input.style.borderColor = '';
        }
      });

      if (isValid) {
        // Trigger Toast
        if (window.showToast) {
          window.showToast('Request submitted successfully! Our solar engineer will call you shortly.', 'success');
        }

        form.reset();

        // Close modal if inside modal
        const modal = form.closest('.modal-backdrop');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      } else {
        if (window.showToast) {
          window.showToast('Please fill out all required fields marked in red.', 'error');
        }
      }
    });
  });

  // Newsletter forms
  const newsForms = document.querySelectorAll('.newsletter-form');
  newsForms.forEach(nf => {
    nf.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = nf.querySelector('input[type="email"]');
      if (input && input.value.includes('@')) {
        if (window.showToast) window.showToast('Thank you for subscribing to SunCapital Clean Energy Journal!', 'success');
        input.value = '';
      } else {
        if (window.showToast) window.showToast('Please enter a valid email address.', 'error');
      }
    });
  });
}

/* --- Myth Flip Cards --- */
function initMythCards() {
  const mythCards = document.querySelectorAll('.myth-card');
  mythCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

/* --- Lightbox Zoom for Gallery Images --- */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery-img');
      const title = item.querySelector('.gallery-title')?.textContent || 'SunCapital Solar Installation';
      
      if (!img) return;

      const lightboxOverlay = document.createElement('div');
      lightboxOverlay.className = 'modal-backdrop active';
      lightboxOverlay.style.zIndex = '3000';
      lightboxOverlay.innerHTML = `
        <div style="position: relative; max-width: 90vw; max-height: 90vh; text-align: center;">
          <img src="${img.src}" alt="${title}" style="max-width: 100%; max-height: 80vh; border-radius: 16px; border: 2px solid var(--color-solar-gold); box-shadow: var(--shadow-lg);">
          <p style="color: #FFF; margin-top: 1rem; font-family: var(--font-heading); font-size: 1.4rem;">${title}</p>
          <button class="modal-close-btn" style="position: absolute; top: -20px; right: -20px; background: var(--color-solar-gold); color: #000;">✕</button>
        </div>
      `;

      document.body.appendChild(lightboxOverlay);

      lightboxOverlay.addEventListener('click', () => lightboxOverlay.remove());
    });
  });
}
