(function () {
  var body = document.body;
  var toggle = document.getElementById('theme-toggle');
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav-menu');

  /* ----- Theme: toggle a class on <body> ----- */
  function setTheme(dark) {
    body.classList.toggle('dark', dark);
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved ? saved === 'dark' : prefersDark);
  toggle.addEventListener('click', function () { setTheme(!body.classList.contains('dark')); });

  /* ----- Mobile menu ----- */
  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ----- Footer year ----- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
