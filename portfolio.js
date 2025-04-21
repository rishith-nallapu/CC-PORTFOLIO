// script.js

// Smooth scroll is handled via CSS scroll-behavior: smooth
// This is just for alert and reset on form submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      alert("Thanks, " + name + "! Your message has been sent.");
      contactForm.reset();
    });
  });
  