(function () {
  var header = document.querySelector('header');
  if (!header) return;

  var nav = header.querySelector('nav');
  var actions = header.querySelector('div[style*="gap:10px"]');
  if (nav) nav.classList.add('rsp-nav');
  if (actions) actions.classList.add('rsp-nav-actions');

  // Burger button
  var burger = document.createElement('button');
  burger.className = 'mob-burger';
  burger.setAttribute('aria-label', 'Menu');
  burger.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect y="3" width="20" height="2" rx="1" fill="#20271E"/><rect y="9" width="20" height="2" rx="1" fill="#20271E"/><rect y="15" width="20" height="2" rx="1" fill="#20271E"/></svg>';
  header.appendChild(burger);

  // Mobile menu
  var menu = document.createElement('div');
  menu.className = 'mob-menu';
  menu.innerHTML = [
    '<div class="mob-menu-header">',
      '<a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:#20271E;">',
        '<span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:#FFD43B;border:1.5px solid #20271E;border-radius:7px;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:15px;">A</span>',
        '<span style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:18px;letter-spacing:-0.03em;">Institut <span style="font-weight:400;">alhazen</span></span>',
      '</a>',
      '<button class="mob-menu-close" aria-label="Fermer">✕</button>',
    '</div>',
    '<div class="mob-menu-links">',
      '<a href="index.html" class="mob-menu-link">Accueil</a>',
      '<div class="mob-menu-sublabel">L\'École</div>',
      '<a href="ecole.html" class="mob-menu-link">L\'École — Vue d\'ensemble</a>',
      '<a href="notre-histoire.html" class="mob-menu-link" style="padding-left:24px;">Notre histoire</a>',
      '<a href="notre-equipe.html" class="mob-menu-link" style="padding-left:24px;">Notre équipe</a>',
      '<a href="nos-valeurs.html" class="mob-menu-link" style="padding-left:24px;">Nos valeurs</a>',
      '<div class="mob-menu-sublabel">Formations</div>',
      '<a href="formations.html" class="mob-menu-link">Toutes les formations</a>',
      '<a href="formation.html" class="mob-menu-link" style="padding-left:24px;">Seconde</a>',
      '<a href="formation.html" class="mob-menu-link" style="padding-left:24px;">Première</a>',
      '<a href="formation.html" class="mob-menu-link" style="padding-left:24px;">Terminale</a>',
      '<div class="mob-menu-sublabel">Autres</div>',
      '<a href="pedagogie.html" class="mob-menu-link">Pédagogie</a>',
      '<a href="faq.html" class="mob-menu-link">FAQ</a>',
    '</div>',
    '<div class="mob-menu-footer">',
      '<a href="contact.html" class="mob-menu-rdv">Prendre RDV →</a>',
      '<a href="https://wa.me/212539000000" target="_blank" rel="noopener" class="mob-menu-wa">',
        '<svg viewBox="0 0 32 32" width="18" height="18" fill="#fff"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.6 1.4 5.6 1.4h.2c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7.7.7-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C5.2 9.9 10 5.2 16 5.2S26.8 9.9 26.8 15 22 24.8 16 24.8z"/><path d="M22.1 17.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-.9-.8-1.6-1.8-1.8-2.2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.3 4.7.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z"/></svg>',
        'WhatsApp',
      '</a>',
    '</div>'
  ].join('');
  document.body.appendChild(menu);

  function openMenu() { menu.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { menu.classList.remove('open'); document.body.style.overflow = ''; }

  burger.addEventListener('click', openMenu);
  menu.querySelector('.mob-menu-close').addEventListener('click', closeMenu);
})();
