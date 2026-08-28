/* ==========================================================================
   SUNCAPITAL INTERACTIVE COMPONENTS MODULE - ACCORDION, MODALS & FORMS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initAssessmentModal();
  initGalleryFilter();
  initBlogPagination();
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

/* --- Project Gallery & Blog Category Filter --- */
function initGalleryFilter() {
  const filterBars = document.querySelectorAll('.gallery-filter-bar');
  if (!filterBars.length) return;

  filterBars.forEach(bar => {
    const btns = bar.querySelectorAll('.filter-btn');
    const container = bar.closest('.container') || bar.parentElement;
    const viewMoreBtn = container.querySelector('#blogViewMoreBtn');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // If this section has a blog View More button, reset pagination step to 4
        if (viewMoreBtn && window.resetBlogPagination) {
          window.resetBlogPagination();
          return;
        }

        const filterVal = btn.getAttribute('data-filter') || 'all';
        const targetItems = container.querySelectorAll('.gallery-item');

        targetItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterVal === 'all' || category === filterVal) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              const activeVal = bar.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
              if (activeVal !== 'all' && item.getAttribute('data-category') !== activeVal) {
                item.style.display = 'none';
              }
            }, 250);
          }
        });
      });
    });
  });
}

/* --- Blog Search, Trending Tags & View More Pagination --- */
function initBlogPagination() {
  const blogGrid = document.querySelector('.blog-grid');
  const viewMoreBtn = document.getElementById('blogViewMoreBtn');
  const searchInput = document.getElementById('blogSearchInput');
  const trendingTags = document.querySelectorAll('.blog-trending-tag');

  if (!blogGrid) return;

  let currentStep = 4;
  const stepSize = 4;

  function updateCardVisibility() {
    const activeFilterBtn = document.querySelector('.gallery-filter-bar .filter-btn.active');
    const filterVal = activeFilterBtn ? (activeFilterBtn.getAttribute('data-filter') || 'all') : 'all';
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const allCards = Array.from(blogGrid.querySelectorAll('.blog-card'));

    // Filter cards matching category AND live search query
    const matchingCards = allCards.filter(card => {
      const cat = card.getAttribute('data-category') || '';
      const textContent = card.textContent.toLowerCase();

      const matchesCat = (filterVal === 'all' || cat === filterVal);
      const matchesSearch = !searchQuery || textContent.includes(searchQuery);

      return matchesCat && matchesSearch;
    });

    // Hide cards that don't match active filter or search query
    allCards.forEach(card => {
      if (!matchingCards.includes(card)) {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });

    // Show matching cards up to currentStep
    matchingCards.forEach((card, index) => {
      if (index < currentStep) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });

    // Handle View More button state
    if (viewMoreBtn) {
      if (currentStep >= matchingCards.length) {
        viewMoreBtn.style.display = 'none';
      } else {
        viewMoreBtn.style.display = 'inline-block';
        const remaining = matchingCards.length - currentStep;
        const countToShow = Math.min(stepSize, remaining);
        viewMoreBtn.textContent = `View More Articles (${countToShow} More) ↓`;
      }
    }
  }

  window.resetBlogPagination = function() {
    currentStep = 4;
    updateCardVisibility();
  };

  // Bind live typing search input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentStep = 4;
      updateCardVisibility();
    });
  }

  // Bind trending tag pill buttons
  trendingTags.forEach(tagBtn => {
    tagBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const tagText = tagBtn.getAttribute('data-tag') || tagBtn.textContent.replace('#', '');

      if (searchInput && searchInput.value.toLowerCase() === tagText.toLowerCase()) {
        searchInput.value = '';
        tagBtn.style.background = 'transparent';
        tagBtn.style.color = 'var(--text-primary)';
      } else {
        if (searchInput) searchInput.value = tagText;
        trendingTags.forEach(t => {
          t.style.background = 'transparent';
          t.style.color = 'var(--text-primary)';
        });
        tagBtn.style.background = 'var(--color-solar-gold)';
        tagBtn.style.color = '#000000';
      }
      currentStep = 4;
      updateCardVisibility();
    });
  });

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      currentStep += stepSize;
      updateCardVisibility();
    });
  }

  updateCardVisibility();
}

/* --- Form Validation & Toast Feedback ---
   Intercepts every form on the site: prevents the full-page reload,
   shows a tailored success toast on a valid submit, and only resets the
   submitted form's own input fields (partial refresh). --- */
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // never reload the whole page

      // Respect native HTML5 constraints (required, email, etc.)
      if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
        return;
      }

      // Choose an appropriate success message per form type
      let message = 'Form submitted successfully!';
      if (form.matches('.newsletter-form, .newsletter-form-inline')) {
        message = 'Thank you for subscribing to the SunCapital Clean Energy Journal!';
      } else if (form.id === 'contactPageForm') {
        message = 'Thanks for reaching out! Our team will be in touch shortly.';
      } else if (form.id === 'commentForm') {
        message = 'Your comment has been posted successfully!';
      } else if (form.id === 'privacyRequestForm') {
        message = 'Your privacy request has been submitted successfully!';
      } else if (form.closest('.modal-backdrop') || form.id === 'assessmentForm') {
        message = 'Request submitted successfully! Our solar engineer will call you shortly.';
      } else if (form.querySelector('input[type="search"]') || /\b(search|zip|postal)\b/i.test(form.className)) {
        const q = form.querySelector('input')?.value || '';
        message = q ? `Showing results for "${q}"` : 'Search submitted successfully!';
      }

      if (window.showToast) {
        window.showToast(message, 'success');
      }

      // Only refresh THIS form's input columns, not the entire page
      form.reset();

      // Close the modal if the form lives inside one
      const modal = form.closest('.modal-backdrop');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Standalone search / zip-code inputs that are not wrapped in a <form>.
  // Give feedback on Enter without reloading the page.
  document.querySelectorAll('input[type="text"], input[type="search"]').forEach(input => {
    const ph = (input.getAttribute('placeholder') || '').toLowerCase();
    const token = `${input.name} ${input.id}`.toLowerCase();
    const isSearch = ph.includes('search') || /\b(zip|postal|search)\b/.test(token);
    if (!isSearch) return;

    input.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      if (window.showToast) {
        window.showToast(`Searching for "${q}"...`, 'success');
      }
      input.value = ''; // clear only this input column
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
