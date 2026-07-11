function initReveal() {
  const run = () => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return;
    const groups = new Map();
    els.forEach((el) => {
      const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
      if (!groups.has(top)) groups.set(top, []);
      groups.get(top).push(el);
    });
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.setAttribute('data-on', '')); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          const sibs = groups.get(Math.round(en.target.getBoundingClientRect().top + window.scrollY)) || [en.target];
          sibs.forEach((s, i) => { s.style.transitionDelay = (i * 70) + 'ms'; });
          en.target.setAttribute('data-on', '');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    setTimeout(() => els.forEach(e => e.setAttribute('data-on', '')), 1800);
  };
  requestAnimationFrame(() => requestAnimationFrame(run));
}
document.addEventListener('DOMContentLoaded', initReveal);
