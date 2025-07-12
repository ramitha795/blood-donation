function showAlert() {
  const messages = [
    "Be a Hero: Donate Blood 🩸",
    "You can save a life today!",
    "One donation can save up to 3 lives.",
    "Your blood is precious. Donate it!",
    "Give blood. Give life."
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").textContent = message;
}