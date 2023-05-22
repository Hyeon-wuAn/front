const gnbList = document.querySelectorAll(".gnb .list > li");
const header = document.querySelector(".header");
gnbList.forEach((item, idx) => {
  item.addEventListener("mouseenter", () => {
    header.classList.add("on");
  });
});
header.addEventListener("mouseleave", () => {
  header.classList.remove("on");
});

new Swiper(".media .mask", {
  slidesPerView: "auto",
  //한번에 볼 수 있는 갯수 4개에 맞춰 li의 크기를 줄인다.
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
});
