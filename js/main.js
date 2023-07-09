const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".header-menu-list");

menuBtn.addEventListener("click", onToggleMenuBtn);

function onToggleMenuBtn() {
  menuMobile.classList.toggle("menu-open");
}
