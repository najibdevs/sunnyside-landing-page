const hamburgerIcon = document.querySelector(".hamburger-icon");
const navLinks = document.querySelector(".nav-links");

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});