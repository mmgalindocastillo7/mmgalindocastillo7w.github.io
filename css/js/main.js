// Animación al hacer scroll
const elements = document.querySelectorAll('.fade-in');

const showOnScroll = () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);

// Ejecutar al cargar
showOnScroll();