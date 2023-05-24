Splitting();
AOS.init();

const header = document.querySelector(".header");
// header.classList.add("on");
// 사용자가 scoll 을 해서 스크롤의 높이가 0보다 커지면 on 을 단다.
// 매게변수는 속성, 메서드를 가지고 있다.

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const scollY = window.scrollY;
  if (scrollY > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

new Swiper(".banner .mask", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: ".banner .mask .btn-prev",
    nextEl: ".banner .mask .btn-next",
  },
  pagination: {
    el: ".banner .mask .pagination",
    clickable: true,
  },
});

gsap.from(".main-visual .txt .char ", { y: 100, opacity: 0, ease: "power3", duration: 1, delay: 2, stagger: 0.04 });

new Swiper(".partner .brand", {
  slidesPerView: "auto",
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  autoplay: {
    delay: 10,
    disableOnInteraction: false,
  },
});

new Swiper(".recruit .text-box .rolling", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 1500,
  },
});
