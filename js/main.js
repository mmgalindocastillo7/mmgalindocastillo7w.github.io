// TYPING
const typing = document.getElementById("typing");

if (typing) {
  const text = "QA Automation | Playwright | CI/CD";
  let i = 0;

  function write() {
    if (i < text.length) {
      typing.innerHTML += text[i];
      i++;
      setTimeout(write, 50);
    }
  }
  write();
}

// IA MODE
const toggle = document.getElementById("toggleIA");
if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("ai-mode");
  });
}

// CHATBOT
const input = document.getElementById("chat-input");
const body = document.getElementById("chat-body");

function addMsg(text, type) {
  const msg = document.createElement("div");
  msg.className = type;
  msg.innerText = text;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
}

function response(text) {
  text = text.toLowerCase();

  if (text.includes("proyecto")) return "Tengo un proyecto QA automatizado con Playwright.";
  if (text.includes("tecnologia")) return "Uso Playwright, JS y CI/CD.";
  if (text.includes("experiencia")) return "Soy Full Stack + QA Automation.";
  if (text.includes("contacto")) return "Puedes ver mi LinkedIn o GitHub.";

  return "Puedo contarte sobre QA, proyectos o tecnologías.";
}

if (input) {
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      addMsg(input.value, "user");

      setTimeout(() => {
        addMsg(response(input.value), "bot");
      }, 500);

      input.value = "";
    }
  });
}