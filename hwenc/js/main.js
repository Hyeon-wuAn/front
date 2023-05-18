/*
const menu01 = document.querySelector(".master-piece .menu li:nth-child(1)");
const menu02 = document.querySelector(".master-piece .menu li:nth-child(2)");

menu01.addEventListener("click", function () {
  alert("menu01을 눌렀습니다.");
});
menu02.addEventListener("click", callFunc);

// 사용자가 이벤트를 발생시켰을때 나중에 호출된다.call back
function callFunc() {
  console.log("함수를 실행합니다.");
}
// callFunc();

const menu03 = document.querySelector(".case .menu li:nth-child(3)");
menu03.addEventListener("click", function () {
  alert("menu03을 눌렀습니다.");
});
*/

// 배열처럼 보이지만 진짜 배열은 아님(유사배열). 그러므로 배열의 매서드는 쓸 수 없다.
// console.log(menu);
const menu = document.querySelectorAll(".master-piece .menu li");
// for (let i = 0; i < menu.length; i++) {
//   menu[i].addEventListener("click", function () {
//     alert(i + 1 + "번째입니다.");
//   });
// }

const header = document.querySelector(".header");
const gnbList = document.querySelectorAll(".gnb .list >li");
gnbList.forEach(function (item, idx) {
  item.addEventListener("mouseenter", function () {
    header.classList.add("on");
  });
  item.addEventListener("mouseleave", function () {
    header.classList.remove("on");
  });
});

// 일급 객체
// 함수를 변수에 할당할 수 있다.
// 일급 객체 함수를 변수에 할당할 수 있다.
// 다른 함수를 인자(argument)로 전달 받을 수 있다.
// 다른 함수의 결과로서 리턴 가능하다. 데이터처럼 다룰 수 있다.

function bb() {
  console.log("함수 선언문입니다.");
}
// const aa = () => {
const aa = function () {
  console.log("함수 표현식입니다.");
};
aa(); //선언되기 전에 호출을 하면 안된다. const aa 위에 있음 안됨.

const sum = (a, b) => a + b;
//한줄일때, 괄호, return 도 생략가능.
console.log(sum(100, 100));

//prettier-ignore
const double = num => num * 2;
// num의 괄호도 생략 가능하다. (하나일때)

// menu.forEach( (item, idx) => {} 이런식으로 쓰기도 함.
// (화살표 함수) fat arrow function

const contentsList = document.querySelectorAll(".master-piece .contents li");

// nth-child는 1부터 시작, idx는 0부터 시작.

menu.forEach((item, idx) => {
  item.addEventListener("mouseenter", () => {
    // console.log(idx + "번째 입니다.");
    contentsList.forEach((item02, idx02) => {
      item02.classList.remove("on");
    });
    const target = document.querySelector(`.master-piece .contents li:nth-child(${idx + 1})`);
    console.log(target);
    target.classList.add("on");
  });
  item.addEventListener("mouseleave", () => {
    contentsList.forEach((item02, idx02) => {
      item02.classList.remove("on");
    });
  });
});

// const fruits = ["apple", "melon", "peach"];

// prettier-ignore
const swiper = new Swiper(".social .mask", {
  speed: 600, 
  slidesPerView: 4, 
  spaceBetween: 25, 
  loop:true ,
  // loopedSlides:10,
  navigation: {
    nextEl: ".social .btns .btn-next",
    prevEl: ".social .btns .btn-prev",
  },
  pagination: {
    el: ".social .pagination .inner",
    type: "progressbar",
  },
  // centeredSlides:true

});

// prettier-ignore
const mainSwiper = new Swiper(".main-visual .mask", {
  speed: 600,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".main-visual .btns .btn-next",
    prevEl: ".main-visual .btns .btn-prev",
  },
  pagination: {
    el: ".main-visual .pagination",
    type: "fraction",
  },
});
