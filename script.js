var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  var els = document.querySelectorAll('.reveal');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
    });
  }, {threshold:0.15});
  els.forEach(function(el){ obs.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in-view'); });
}

var copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
  var copyNote = document.getElementById('copyNote');
  var email = 'Matinmontakhabi660@gmail.com';
  copyBtn.addEventListener('click', function(){
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(function(){
        copyNote.textContent = 'ایمیل کپی شد ✓';
      }).catch(function(){
        copyNote.textContent = email;
      });
    } else {
      copyNote.textContent = email;
    }
    setTimeout(function(){ copyNote.textContent = ''; }, 3000);
  });
}

// lightbox for logo gallery
var lightbox = document.getElementById('lightbox');
if (lightbox) {
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  var thumbs = document.querySelectorAll('.logo-thumb');

  thumbs.forEach(function(thumb){
    thumb.addEventListener('click', function(){
      var img = thumb.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  function closeLightbox(){
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e){
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeLightbox();
  });
}
