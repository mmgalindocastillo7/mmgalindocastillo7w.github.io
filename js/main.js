// MODO IA
const toggle = document.getElementById('toggleIA');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('ai-mode');
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});