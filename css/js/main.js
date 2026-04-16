// PROTEGIDO PARA QUE NO ROMPA LA WEB

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


// TOGGLE IA (PROTEGIDO)
const toggle = document.getElementById("iaToggle");
const text = document.getElementById("iaText");

if (toggle && text) {
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      text.innerHTML = "🤖 IA activada";
    } else {
      text.innerHTML = "IA desactivada";
    }
  });
}


// IMAGEN DINÁMICA (SOLO SI EXISTE)
const dynamicImage = document.getElementById("dynamicImage");

if (dynamicImage) {
  const images = [
    "https://picsum.photos/800/400?1",
    "https://picsum.photos/800/400?2",
    "https://picsum.photos/800/400?3"
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    dynamicImage.src = images[index];
  }, 3000);
}


// TYPING (PROTEGIDO)
const typingElement = document.getElementById("typing");

if (typingElement) {
  const textTyping = "QA Automation + IA + CI/CD";
  let i = 0;

  function typingEffect() {
    if (i < textTyping.length) {
      typingElement.innerHTML += textTyping.charAt(i);
      i++;
      setTimeout(typingEffect, 80);
    }
  }

  typingEffect();
}