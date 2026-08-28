/* ==========================================================================
   SUNCAPITAL MAIN JAVASCRIPT MODULE - THEMES, RTL, NAVIGATION, COUNTERS & TOAST
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initRtlManager();
  initNavigation();
  initScrollReveal();
  initAnimatedCounters();
  initBackToTop();
  initPageTransitions();
});

/* --- Theme Manager (Light / Dark Mode) --- */
function initThemeManager() {
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('suncapital_theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('suncapital_theme', newTheme);
      updateThemeIcons(newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} mode`, 'info');
    });
  });
}

function updateThemeIcons(theme) {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    const textSpan = btn.querySelector('.theme-text');
    if (textSpan) {
      textSpan.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
    const sunIcon = btn.querySelector('.theme-icon-sun');
    const moonIcon = btn.querySelector('.theme-icon-moon');
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
      } else {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
      }
    }
  });
}

/* --- LTR / RTL Manager --- */
function initRtlManager() {
  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
  const savedDir = localStorage.getItem('suncapital_dir') || 'ltr';

  document.documentElement.setAttribute('dir', savedDir);
  updateRtlButtons(savedDir);

  rtlToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('suncapital_dir', newDir);
      updateRtlButtons(newDir);
      showToast(`Layout switched to ${newDir.toUpperCase()}`, 'info');
    });
  });
}

function updateRtlButtons(dir) {
  const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlBtns.forEach(btn => {
    const textSpan = btn.querySelector('.rtl-text');
    if (textSpan) {
      textSpan.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    }
  });
}

/* --- Navigation & Mobile Drawer --- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileOverlay) {
    let menuScrollPos = 0;

    const openMenu = () => {
      menuScrollPos = window.scrollY || window.pageYOffset || 0;
      mobileOverlay.classList.add('active');
      mobileToggle.classList.add('open');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${menuScrollPos}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.documentElement.classList.add('menu-open');
    };

    const closeMenu = () => {
      mobileOverlay.classList.remove('active');
      mobileToggle.classList.remove('open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.documentElement.classList.remove('menu-open');
      window.scrollTo(0, menuScrollPos);
    };

    mobileToggle.addEventListener('click', () => {
      if (mobileOverlay.classList.contains('active')) closeMenu();
      else openMenu();
    });

    mobileOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

/* --- Scroll Reveal Animations --- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --- Animated Counter Numbers --- */
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.counter-val');

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetNum = parseFloat(target.getAttribute('data-target') || '0');
        const suffix = target.getAttribute('data-suffix') || '';
        const prefix = target.getAttribute('data-prefix') || '';
        const decimals = parseInt(target.getAttribute('data-decimals') || '0', 10);
        
        let currentNum = 0;
        const duration = 2000; // ms
        const steps = 60;
        const increment = targetNum / steps;
        const stepTime = duration / steps;

        const timer = setInterval(() => {
          currentNum += increment;
          if (currentNum >= targetNum) {
            currentNum = targetNum;
            clearInterval(timer);
          }
          target.textContent = prefix + currentNum.toFixed(decimals) + suffix;
        }, stepTime);

        observer.unobserve(target);
      }
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => counterObserver.observe(el));
}

/* --- Back to Top --- */
function initBackToTop() {
  const backBtn = document.querySelector('.back-to-top');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Toast Notification Helper --- */
function showToast(message, type = 'success') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* --- Page Entrance Transition --- */
function initPageTransitions() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
}

window.showToast = showToast;
