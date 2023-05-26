const word = document.querySelector(".word");
const wordList = document.querySelector(".word-list ul");
// 1. 주어진 단어를 하나 만든다. 배열에다 값을 넣고 그 중에 하나 골라서 뿌리기
const wordArray = []; // 배열은 참조 reference. 재할당은 안된다.
const firstWords = ["강아지", "소나기", "기상청", "청소기", "부잣집", "호랑이"];
const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];

wordArray.push(firstWord);
// console.log("🚀 ~ file: main.js:9 ~ wordArray:", wordArray);

// console.log(firstWords.includes("기상청"));

const appendWord = (inputWord) => {
  const li = document.createElement("li");
  li.textContent = inputWord;
  wordList.append(li);
  wordArray.push(inputWord);
};

const fault = () => {
  word.value = "";
  gsap.from(".input-box", { x: 100, duration: 1, ease: "elastic.out(1, 0.2)" });
};

appendWord(firstWord);

// 2. word 에 글자를 입력하고 enter 쳤을 때 마지막 단어의 끝글자랑 입력한 단어의 첫글자가 같은지 따져야함.

word.addEventListener("keyup", (e) => {
  //   console.log(e);
  if (e.key === "Enter" || e.keyCode === 13) {
    if (word.value.length !== 3) {
      //   alert("3글자만 입력가능합니다.");
      fault();
      return;
    }
    //   console.log(word.value.substring(0, 1));
    //   console.log(word.value.charAt(0))    괄호에 숫자 하나만 쓸 수 있음. ;
    const lastWord = document.querySelector(".word-list ul li:last-child").textContent;
    const lastChar = lastWord.substring(2);
    // console.log(lastWord + "===" + lastChar);
    if (word.value.substring(0, 1) !== lastChar) {
      fault();
      return;
    }
    if (wordArray.includes(word.value)) {
      fault();
      return;
    }

    fetch(`https://opendict.korean.go.kr/api/search?key=30A9C554CFB7EBE2793796CDF2C80291&q=${word.value}&req_type=json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.channel.total <= 0) {
          fault();
          word.value = "";
        } else {
          appendWord(word.value);
          word.value = "";
        }
      });
  }
});

const checkDic = (question) => {
  fetch(`https://opendict.korean.go.kr/api/search?key=30A9C554CFB7EBE2793796CDF2C80291&q=${question}&req_type=json`)
    .then((response) => response.json())
    .then((data) => {
      return data.channel.total;
    });
};
