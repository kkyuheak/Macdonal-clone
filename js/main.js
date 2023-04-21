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
