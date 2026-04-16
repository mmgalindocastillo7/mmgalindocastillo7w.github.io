// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade-in');

const showOnScroll = () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();


// TOGGLE IA
const toggle = document.getElementById("iaToggle");
const text = document.getElementById("iaText");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    text.innerHTML = "🤖 IA activada: análisis inteligente de pruebas.";
  } else {
    text.innerHTML = "IA desactivada";
  }
});


// IMÁGENES DINÁMICAS
const images = [
const images = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3"
];];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("dynamicImage").src = images[index];
}, 3000);


// TYPING EFFECT
const textTyping = "QA Automation + IA + CI/CD";
let i = 0;

function typingEffect() {
  if (i < textTyping.length) {
    document.getElementById("typing").innerHTML += textTyping.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}

typingEffect();