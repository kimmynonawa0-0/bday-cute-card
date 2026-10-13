const openButton = document.getElementById("openButton");
const envelopeWrap = document.getElementById("envelopeWrap");
const envelopeHint = document.getElementById("envelopeHint");
const letter = document.getElementById("letter");
const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");
const confetti = document.getElementById("confetti");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function sprinkleConfetti(amount) {
  const colors = ["#e9a9a3", "#e8c571", "#91a17e", "#c58b82", "#f7e2b2"];
  confetti.replaceChildren();

  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti__piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[i % colors.length];
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.setProperty("--delay", `${Math.random() * 0.7}s`);
    piece.style.setProperty("--duration", `${2.5 + Math.random() * 1.7}s`);
    confetti.appendChild(piece);
  }

  window.setTimeout(() => confetti.replaceChildren(), 5000);
}

openButton.addEventListener("click", () => {
  if (!letter.hidden) {
    letter.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "center" });
    return;
  }

  envelopeWrap.classList.add("is-open");
  openButton.setAttribute("aria-expanded", "true");
  openButton.setAttribute("aria-label", "Read Kela's birthday card");
  envelopeHint.textContent = "your note is just below ♡";
  letter.hidden = false;

  if (!reducedMotion.matches) sprinkleConfetti(36);
  window.setTimeout(() => {
    letter.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
  }, reducedMotion.matches ? 0 : 450);
});

wishButton.addEventListener("click", () => {
  wishMessage.textContent = "Wish made. May all the lovely things find you, Kela. ✨";
  if (!reducedMotion.matches) sprinkleConfetti(55);
});
