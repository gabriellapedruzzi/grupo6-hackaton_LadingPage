// JavaScript mínimo: interação apenas no botão final.
const button = document.getElementById("confirm");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  button.textContent = "CONFIRMADO ✓";
  message.textContent = "Escolha registrada.";
  setTimeout(() => {
    button.textContent = "CONFIRMA NO SISTEMA!";
    message.textContent = "";
  }, 1500);
});
