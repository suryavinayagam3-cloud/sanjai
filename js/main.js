// main.js - Core Portfolio Interactivity & Animations

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initTypewriter();
  initProjects();
  initModal();
  initStatsCounter();
  initContactForm();
  initBackToTop();
  initCopyEmail();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Listen for system theme adjustments
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Navbar Scroll, Active Links & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-links');

  // Sticky border shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Spy
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when clicking outside or clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const el = document.getElementById('hero-role-text');
  if (!el) return;

  const roles = [
    'Full-Stack Developer',
    'Modern Web Specialist',
    'Scalable API Architect',
    'Clean Code Enthusiast',
    'Open Source Contributor'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseEnd = 1800;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === current.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 350;
    }

    setTimeout(type, delay);
  }

  type();
}

/* --------------------------------------------------------------------------
   4. Projects Rendering & Filter Tabs
   -------------------------------------------------------------------------- */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || !window.projectsData) return;

  function render(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' 
      ? window.projectsData 
      : window.projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);

      const thumbSvg = (window.projectSvgThumbnails && window.projectSvgThumbnails[project.id]) 
        ? window.projectSvgThumbnails[project.id] 
        : '';

      const techBadges = project.tech
        .slice(0, 4)
        .map(t => `<span class="project-tech-tag">${t}</span>`)
        .join('');

      card.innerHTML = `
        <div class="project-thumbnail">
          <span class="project-badge-type">${project.categoryLabel}</span>
          ${thumbSvg}
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.summary}</p>
          <div class="project-tech-stack">
            ${techBadges}
          </div>
          <div class="project-footer">
            <button class="btn btn-sm btn-secondary open-case-study-btn" data-project-id="${project.id}">
              <span>View Details</span>
              <svg class="btn-icon" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div class="project-links">
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source Code" aria-label="GitHub Repository">
                <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Live Interactive Demo" aria-label="Live Demo">
                <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // Reattach modal triggers
    attachModalTriggers();
  }

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      render(cat);
    });
  });

  render('all');
}

/* --------------------------------------------------------------------------
   5. Project Modal Window
   -------------------------------------------------------------------------- */
function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal || !closeBtn) return;

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function attachModalTriggers() {
  const buttons = document.querySelectorAll('.open-case-study-btn');
  const modal = document.getElementById('project-modal');
  const modalInner = document.getElementById('modal-body-content');
  if (!modal || !modalInner) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project-id');
      const project = window.projectsData.find(p => p.id === pid);
      if (!project) return;

      const featuresHtml = project.features
        .map(f => `<li>${f}</li>`)
        .join('');

      const techPills = project.tech
        .map(t => `<span class="skill-pill">${t}</span>`)
        .join('');

      modalInner.innerHTML = `
        <span class="modal-tag">${project.categoryLabel} Project</span>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-desc">${project.description}</p>

        <h4 class="modal-section-title">Key Architectural Features</h4>
        <ul class="modal-features-list">
          ${featuresHtml}
        </ul>

        <h4 class="modal-section-title">System Architecture Overview</h4>
        <p class="modal-desc" style="font-size: 0.95rem;">${project.architecture}</p>

        <h4 class="modal-section-title">Technologies & Tools</h4>
        <div class="modal-tech-pills">
          ${techPills}
        </div>

        <div class="modal-actions">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <span>Explore Live Demo</span>
            <svg class="btn-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>GitHub Repository</span>
            <svg class="btn-icon" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
        </div>
      `;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
}

/* --------------------------------------------------------------------------
   6. Animated Stats Counter
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let triggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        statNumbers.forEach(el => {
          const target = parseFloat(el.getAttribute('data-target'));
          const suffix = el.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          let count = 0;
          const duration = 1500;
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            el.textContent = (isDecimal ? count.toFixed(1) : Math.floor(count)) + suffix;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-strip');
  if (statsSection) observer.observe(statsSection);
}

/* --------------------------------------------------------------------------
   7. Contact Form Handler
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showStatus('Please fill out all required fields.', 'error');
      return;
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Submit Simulation State
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending Message...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showStatus('Thank you, Sanjai has received your message and will reply shortly!', 'success');
      form.reset();
      showToast('Message sent successfully!');
    }, 1200);
  });

  function showStatus(msg, type) {
    if (!statusBox) return;
    statusBox.textContent = msg;
    statusBox.className = `form-status ${type}`;
    setTimeout(() => {
      statusBox.style.display = 'none';
      statusBox.className = 'form-status';
    }, 6000);
  }
}

/* --------------------------------------------------------------------------
   8. Copy Email to Clipboard
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const emailText = copyBtn.getAttribute('data-email') || 'sanjai.developer@example.com';
    navigator.clipboard.writeText(emailText).then(() => {
      showToast('Email address copied to clipboard!');
      const origText = copyBtn.querySelector('span').textContent;
      copyBtn.querySelector('span').textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.querySelector('span').textContent = origText;
      }, 2000);
    }).catch(() => {
      showToast('Could not copy automatically. Email: ' + emailText);
    });
  });
}

/* --------------------------------------------------------------------------
   9. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   10. Toast Notification Helper
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

