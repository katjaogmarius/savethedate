
const envelopeButton = document.querySelector("#envelopeButton");
const instruction = document.querySelector("#instruction");

envelopeButton.addEventListener("click", () => {
  const isOpen = envelopeButton.classList.toggle("is-open");

  envelopeButton.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    instruction.textContent = "En særlig dag venter på os...";
  } else {
    instruction.textContent = "Tryk på konvolutten for at åbne";
  }
});
