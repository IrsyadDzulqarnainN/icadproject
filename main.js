/* ============================================================
   APEX SPORT — main.js
   ============================================================ */

/* ---------- HAMBURGER MENU ---------- */
const hamburger = document.getElementById('hamburger');
const mainNav   = document.querySelector('.main-nav');

if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close on nav link click (mobile)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

/* ---------- STICKY HEADER SHADOW ---------- */
const siteHeader = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    siteHeader?.classList.add('scrolled');
  } else {
    siteHeader?.classList.remove('scrolled');
  }
});

/* ---------- PRODUCT FILTER (Products page) ---------- */
const filterBtns  = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide products
    productItems.forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeInUp 0.4s ease both';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ---------- ADD TO CART FEEDBACK ---------- */
const cartBtns = document.querySelectorAll('.btn-cart');

cartBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const originalText = this.textContent;
    this.textContent = '✓ Ditambahkan!';
    this.style.background = '#7CFF6B';
    this.style.color = '#0e0e0e';
    this.disabled = true;

    setTimeout(() => {
      this.textContent = originalText;
      this.style.background = '';
      this.style.color = '';
      this.disabled = false;
    }, 1800);
  });
});

/* ---------- CONTACT FORM ---------- */
const contactForm   = document.getElementById('contactForm');
const formSuccess   = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');
  });
}

/* ---------- FAQ ACCORDION ---------- */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // Close all
    faqItems.forEach(i => i.classList.remove('open'));
    // Toggle clicked
    if (!isOpen) item.classList.add('open');
  });
});

/* ---------- SCROLL REVEAL ---------- */
const revealEls = document.querySelectorAll(
  '.cat-card, .prod-card, .product-item, .testi-card, .info-card, .faq-item'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.5s ease both';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));