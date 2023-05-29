new Swiper(".main-visual .mask", {
  slidesPerView: "auto",
  loop: true,
  loopSlides: 1,
  autoplay: {
    delay: 4000,
  },
});

const header = document.querySelector(".header");
const img = document.querySelector(".logo img");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const maxScroll = 57; // 이미지의 최대 작아질 크기 (max-width와 동일하게 설정)

  // 스크롤 위치에 따라 이미지 크기 조절
  const imgWidth = Math.max(100 - scrollTop, maxScroll);
  img.style.width = imgWidth + "%";
});
