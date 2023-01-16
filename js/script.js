new Swiper(".testimonials__comments", {
  navigation: {
    nextEl: ".comments__slider-next",
    prevEl: ".comments__slider-prev",
  },
  // Навигация
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".swiper-pagination",
    // Буллеты
    type: "bullets",
    clickable: true,
    // Динамические буллеты
    dynamicBullets: true,
  },
  grabCursor: true,
  direction: "vertical",
  slidesPerView: "auto",
});

// // подключаем jQuery!
// // кнопка меню бургер

// $(".menu__btn").on("click", function () {
//   $(".menu__btn").toggleClass("menu__btn--active");
//   $(".menu__list").toggleClass("menu__list--active");
// });

// // для скрывания меню и крестика с помощью класса эктив
// $(".menu__list-link").on("click", function () {
//   $(".menu__btn").removeClass("menu__btn--active");
//   $(".menu__list").removeClass("menu__list--active");
// });

// Меню бургер на чистом JS=========================================

const menuIcon = document.querySelector(".menu__btn"),
  menu = document.querySelector(".menu__list"),
  menuLink = document.querySelector(".menu__list-link"),
  body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu__btn--active");
  menu.classList.toggle("menu__list--active");
  body.classList.toggle("no-scroll");
});

menuLink.addEventListener("click", () => {
  menuIcon.classList.remove("menu__btn--active");
  menu.classList.remove("menu__list--active");
  body.classList.remove("no-scroll");
});
