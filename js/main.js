// =======================
// TYPING EFFECT
// =======================
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

// =======================
// IA MODE
// =======================
const toggle = document.getElementById("toggleIA");

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("ai-mode");
  });
}

// =======================
// CHATBOT
// =======================
const input = document.getElementById("chat-input");
const body = document.getElementById("chat-body");

function addMsg(text, type) {
  const msg = document.createElement("div");
  msg.className = type;
  msg.innerText = text;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
}

// =======================
// IA REAL + FALLBACK
// =======================
async function response(text) {
  try {
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();
    return data.reply;

  } catch (error) {
    // 🔥 FALLBACK INTELIGENTE
    text = text.toLowerCase();

    if (text.includes("proyecto")) return "Tengo un proyecto QA automatizado con Playwright.";
    if (text.includes("tecnologia")) return "Uso Playwright, JavaScript y CI/CD.";
    if (text.includes("experiencia")) return "Soy Full Stack + QA Automation.";
    if (text.includes("contacto")) return "Puedes ver mi LinkedIn o GitHub.";

    return "No pude conectar con IA, pero puedo ayudarte igual.";
  }
}

// =======================
// EVENTO CHAT
// =======================
if (input) {
  input.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {

      const userText = input.value;
      addMsg(userText, "user");

      const reply = await response(userText);
      addMsg(reply, "bot");

      input.value = "";
    }
  });
}
