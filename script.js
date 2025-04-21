// script.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleMode");
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  