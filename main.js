const marker = document.querySelector("#marker");
const items = document.querySelectorAll("#home nav ul li a");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const navItem = document.querySelectorAll(".nav-item");

// Sliding Indicator

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    indicator(e.target);
  });
});

// Hamburger Menu
let ShowMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  document.body.classList.toggle("show");
}
