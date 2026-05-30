document.addEventListener('DOMContentLoaded', () => {

  if (window.innerWidth <= 768) return;



  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const images = document.querySelectorAll('.gallery img');

  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      showImage(index);
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  next.addEventListener('click', e => {
    e.stopPropagation();
    showImage((currentIndex + 1) % images.length);
  });

  prev.addEventListener('click', e => {
    e.stopPropagation();
    showImage((currentIndex - 1 + images.length) % images.length);
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
    }

    if (e.key === 'ArrowRight') {
      showImage((currentIndex + 1) % images.length);
    }

    if (e.key === 'ArrowLeft') {
      showImage((currentIndex - 1 + images.length) % images.length);
    }
  });
});
