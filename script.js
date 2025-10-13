const btn = document.getElementById("supportButton");
const chat = document.getElementById("supportChat");
const close = document.getElementById("closeChat");
const sendBtn = document.querySelector(".sendBtn");
const textarea = document.querySelector("textarea");

btn.addEventListener("click", () => {
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
});

close.addEventListener("click", () => {
  chat.style.display = "none";
});

sendBtn.addEventListener("click", () => {
  const message = textarea.value.trim();
  
  if (message === "") {
    alert("Digite uma mensagem antes de enviar!");
    return;
  }

  alert("Mensagem enviada com sucesso! ✅");

  textarea.value = "";

  chat.style.display = "none";
});

chat.style.display = "none";

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  sidebar.classList.toggle('active');
});
