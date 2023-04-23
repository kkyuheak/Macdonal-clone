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

//스크롤시 헤더 영역 축소
const headerLogo = document.querySelector(".header_logo");
const hiddenMenuList = document.querySelector(".hidden_menu-list");

window.addEventListener("scroll", () => {
  if (window.scrollY > 130) {
    header.style.height = "80px";
    headerLogo.style.width = "51px";
    headerLogo.style.height = "45px";
    headerLogo.style.transition = "1s";
    hiddenMenu.style.top = "60px";
    hiddenMenuList.style.right = "265px";
  } else {
    header.style.height = "140px";
    headerLogo.style.width = "106px";
    headerLogo.style.height = "93px";
    hiddenMenu.style.top = "140px";
    hiddenMenuList.style.right = "165px";
  }
});
