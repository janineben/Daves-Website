document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-hamburger');
  var nav = document.querySelector('nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
