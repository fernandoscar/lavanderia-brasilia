// ═══════════════════════════════════════════
//  LAVANDERIA BRASÍLIA — SCRIPT PRINCIPAL
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Marca o link ativo no nav com base na página atual ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage ||
       (currentPage === '' && href === 'index.html') ||
       (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Animação de entrada nos elementos ao rolar ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.service-card, .client-card, .pricing-card, .stat-item, .process-step, .info-card, .hours-card')
    .forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

  // ── Formulário de contato ──
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Proposta enviada!';
        btn.style.background = 'var(--green)';
        form.reset();
        setTimeout(() => {
          btn.textContent = '✈️  Enviar Proposta';
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }
});
