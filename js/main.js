const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".header-menu-list");

menuBtn.addEventListener("click", onToggleMenuBtn);

function onToggleMenuBtn() {
  menuMobile.classList.toggle("menu-open");
}

const swiperFeedback = new Swiper(".feedback-slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperCertificates = new Swiper(".certificates-slider", {
  loop: true,
  slidesPerView: 3,

  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
