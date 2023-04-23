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

//더보기 버튼

const moreBtn = document.querySelector(".more_btn");
const hiddenCards = document.querySelector(".hidden_cards");

moreBtn.addEventListener("click", () => {
  hiddenCards.style.display = "flex";
  moreBtn.style.display = "none";
});

//top_btn 버튼 누를 때 페이지 상단 이동

const topBtn = document.querySelector(".top_btn");

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//fixedbtn하단 내려올때 포지션 fixed 해제

const fixBtn = document.querySelector(".fixed_btns");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1120) {
    fixBtn.style.position = "absolute";
  } else {
    fixBtn.style.position = "fixed";
  }
});
