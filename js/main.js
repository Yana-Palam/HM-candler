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

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon-title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const currentText =
      accordeonTitle.parentElement.querySelector(".accordeon-text");
    accordeonTitle.classList.toggle("accordeon-title-active");
    currentText.classList.toggle("accordeon-text-visible");

    if (currentText.classList.contains("accordeon-text-visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = 0;
    }
  });
});
