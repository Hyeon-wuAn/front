// 1. computer li 3개 중에 하나만 보이게 하기
// 2. computer li 무작위로 나오게 setInterval 만들기
// 3. 밑에 human li 에 이벤트 걸기
// 4. human li 클릭했을때 멈추게 하기. clearInterval
// 5. 승패 확인하기.
computerList = document.querySelectorAll(".computer ul li");
humanList = document.querySelectorAll(".human ul li");
resultList = document.querySelector(".result ul");

const appendItems = (className) => {
  const apppendItem = document.createElement("li");
  apppendItem.classList.add(className);
  apppendItem.textContent = className.substring(0, 1);
  resultList.appendChild(apppendItem);
};

let computerChoice = 0;
const makeRandom = function () {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3);
  computerList[computerChoice].style.display = "block";
};

const computerIdx = setInterval(makeRandom, 100);
makeRandom();

humanList.forEach((item, idx) => {
  //   console.log(item);
  //   console.log(idx);
  item.addEventListener("click", function () {
    clearInterval(computerIdx);
    if (computerChoice === idx) {
      appendItems("draw");
    } else if ((computerChoice === 0 && idx === 1) || (computerChoice === 1 && idx === 2) || (computerChoice === 2 && idx === 0)) {
      appendItems("win");
    } else {
      appendItems("lose");
    }
  });
});
