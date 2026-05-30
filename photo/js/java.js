document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const images = document.querySelectorAll('.gallery img');

  const prev = document.getElementById('prev');
const next = document.getElementById('next');

function showImage(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
}

next.addEventListener('click', e => {
  e.stopPropagation();
  showImage((currentIndex + 1) % images.length);
});

prev.addEventListener('click', e => {
  e.stopPropagation();
  showImage((currentIndex - 1 + images.length) % images.length);
});

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
    }

    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex].src;
    }

    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
    }
  });
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});
