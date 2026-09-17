(function () {
  var cfg = window.MAXWELL_CONFIG || {};
  var cta = document.getElementById('book-cta');
  if (cta && cfg.CALENDLY_URL) {
    cta.setAttribute('href', cfg.CALENDLY_URL);
  }
})();
