const imageRef = document.querySelectorAll('.card__image');

const options = {
  rootMargin: '100px',
};

const observer = new IntersectionObserver(onEntry, options);

imageRef.forEach(image => observer.observe(image));

function onEntry(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;

      image.src = src;

      observer.unobserve(image);
    }
  });
}
