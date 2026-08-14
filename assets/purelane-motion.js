(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealSelector = '.purelane-hero__copy, .purelane-hero__visual, .purelane-section-heading, .purelane-product-card, .purelane-combo-card, .purelane-bundle-card, .purelane-review-card';
  const reveal = (root = document) => {
    const nodes = [...root.querySelectorAll(revealSelector)].filter((node) => !node.dataset.purelaneReveal);
    nodes.forEach((node) => { node.dataset.purelaneReveal = node.classList.contains('purelane-hero__visual') ? 'visual' : 'content'; if (reducedMotion) node.classList.add('is-visible'); });
    if (reducedMotion || !('IntersectionObserver' in window)) { nodes.forEach((node) => node.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver((entries, currentObserver) => { entries.forEach((entry) => { if (!entry.isIntersecting) return; entry.target.classList.add('is-visible'); currentObserver.unobserve(entry.target); }); }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
  };
  const enableHeroMotion = (root = document) => {
    if (reducedMotion || !window.matchMedia('(min-width: 901px)').matches) return;
    root.querySelectorAll('.purelane-hero:not([data-purelane-hero-motion])').forEach((hero) => {
      hero.dataset.purelaneHeroMotion = 'true';
      hero.addEventListener('pointermove', (event) => { const rect = hero.getBoundingClientRect(); const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2; const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2; hero.style.setProperty('--purelane-product-x', (x * -11).toFixed(1) + 'px'); hero.style.setProperty('--purelane-product-y', (y * -7).toFixed(1) + 'px'); hero.style.setProperty('--purelane-pointer-x', (x * 16).toFixed(1) + 'px'); hero.style.setProperty('--purelane-pointer-y', (y * 12).toFixed(1) + 'px'); }, { passive: true });
      hero.addEventListener('pointerleave', () => { ['--purelane-product-x', '--purelane-product-y', '--purelane-pointer-x', '--purelane-pointer-y'].forEach((property) => hero.style.removeProperty(property)); });
    });
  };
  const enableReviewMarquee = (root = document) => {
    if (reducedMotion || !window.matchMedia('(hover: hover)').matches) return;
    root.querySelectorAll('.purelane-reviews:not([data-purelane-marquee])').forEach((section) => {
      const rail = section.querySelector('.purelane-reviews__rail'); const cards = rail ? [...rail.children] : [];
      if (!rail || cards.length < 2) return;
      section.dataset.purelaneMarquee = 'true';
      const track = document.createElement('div'); track.className = 'purelane-reviews__track'; cards.forEach((card) => track.append(card));
      cards.map((card) => { const clone = card.cloneNode(true); clone.setAttribute('aria-hidden', 'true'); clone.inert = true; return clone; }).forEach((clone) => track.append(clone));
      rail.append(track);
      const syncDuration = () => { const distance = track.scrollWidth / 2; section.style.setProperty('--purelane-marquee-distance', distance + 'px'); section.style.setProperty('--purelane-marquee-duration', Math.max(32, distance / 28) + 's'); };
      syncDuration(); new ResizeObserver(syncDuration).observe(track); section.classList.add('is-marquee');
    });
  };
  const init = (root = document) => { document.documentElement.classList.add('purelane-motion-ready'); reveal(root); enableHeroMotion(root); enableReviewMarquee(root); };
  document.addEventListener('DOMContentLoaded', () => init(), { once: true });
  document.addEventListener('shopify:section:load', (event) => init(event.target));
})();