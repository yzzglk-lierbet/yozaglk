// Selecionar elementos
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const messagesContainer = document.getElementById("messages");

// Enviar mensagem ao pressionar o botão ou Enter
sendButton.addEventListener("click", handleMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleMessage();
  }
});

// Lidar com envio de mensagem
function handleMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  // Adicionar mensagem do usuário no chat
  addMessage("Você", userMessage);

  // Simular resposta do bot
  setTimeout(() => {
    const botReply = generateBotReply(userMessage);
    addMessage("Bot", botReply);
  }, 500);

  // Limpar o campo de entrada
  userInput.value = "";
}

// Adicionar mensagem ao chat
function addMessage(sender, text) {
  const message = document.createElement("div");
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  message.style.marginBottom = "10px";
  messagesContainer.appendChild(message);

  // Rolar para a última mensagem
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Gerar resposta do bot
function generateBotReply(message) {
  return `Você disse: "${message}". Eu sou um bot e posso conversar sobre qualquer coisa!`;
}
