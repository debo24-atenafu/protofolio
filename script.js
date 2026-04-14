const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.onclick = () => {
    nav.classList.remove("active");
  };
});
