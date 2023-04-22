const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

//마우스 호버 이벤트
const headerMenu = document.querySelector(".header_menu");
const hiddenMenu = document.querySelector(".hidden_menu");
const header = document.querySelector("header");

headerMenu.addEventListener("mouseover", () => {
  hiddenMenu.style.display = "block";
  header.style.borderColor = "rgba(0,0,0,0.2)";
});

hiddenMenu.addEventListener("mouseover", () => {
  hiddenMenu.style.display = "block";
  header.style.borderColor = "rgba(0,0,0,0.2)";
});

headerMenu.addEventListener("mouseout", () => {
  hiddenMenu.style.display = "none";
  header.style.borderColor = "#ffbc0d";
});

hiddenMenu.addEventListener("mouseout", () => {
  hiddenMenu.style.display = "none";
  header.style.borderColor = "#ffbc0d";
});
