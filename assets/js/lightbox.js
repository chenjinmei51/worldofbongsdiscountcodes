function showLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');

  lightbox.addEventListener('click', function (e) {
    if (e.target !== img) {
      lightbox.style.display = 'none';
      img.src = '';
    }
  });
});
