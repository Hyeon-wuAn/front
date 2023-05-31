// jQuery => Selection, manipulation, ajax // ios, android [react-native, flutter]
// angular(svelte) react(facebook 구글) vue(제일쉬움) 프론트3대장

const ldsEllipsis = document.querySelector(".lds-ellipsis");
const coronaList = document.querySelector(".coronaList ul");
const removeItem = () => {
  const imgItem = document.querySelectorAll(".coronaList ul li");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};
const loadCoronaData = async (date) => {
  removeItem();
  ldsEllipsis.classList.remove("off");
  const corona = await fetch(
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=ooL%2Bq%2BBAai%2F8uoIQqCOcZIvNh%2BLkmKaZ%2BbZvK8fNCEypvgvGe8QBxgR%2FDUxVzBkPxarX43Yp%2FvfXK2%2B2UZkNYA%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}`
  );
  const response = await corona.json();
  // .then((response) => response.json())
  const items = response.items;
  ldsEllipsis.classList.add("off");
  const sortedItems = _.sortBy(items, ["gubun"]); // 원본을 훼손하지 않는 method

  // console.log(items);
  // items.sort(function (a, b) {
  //   if (a.gubun > b.gubun) return 1;
  //   if (a.gubun === b.gubun) return 0;
  //   if (a.gubun < b.gubun) return -1;
  // });

  sortedItems.forEach((item, idx) => {
    console.log(item.gubun + "===" + item.incDec);
    const li = document.createElement("li");
    const region = document.createElement("span");
    region.classList.add("region");
    const incDec = document.createElement("span");
    incDec.classList.add("incDec");
    region.textContent = item.gubun;
    incDec.textContent = item.incDec;
    li.append(region);
    li.append(incDec);
    coronaList.append(li);
  });
  gsap.from(".coronaList ul li", { scale: 0, duration: 0.5, stagger: 0.02 });
};

const datePicker = new Lightpick({
  field: document.querySelector(".date-picker"),
  format: "YYYY-MM-DD",
  onSelect: function (date) {
    //console.log(date.format("YYYY-MM-DD"));
    loadCoronaData(date.format("YYYY-MM-DD"));
  },
});
datePicker.setDate(new Date());
//loadCoronaData("2023-05-30");

// console.log(
//   numbers.sort(function (a, b) {
//     // if (a > b) return 1; //1아니라100도 상관없음. 양음수 구별만.
//     // if (a === b) return 0;
//     // if (a < b) return -1;
//     return a - b;
//     return b - a;
//   })
// );

const numbers = [2, 1, 4, 3, 44, 5, 11];
console.log(numbers.sort((a, b) => a - b));
// numbers.sort(function (a,b) {return a-b});
// numbers.sort((a,b) => {return a-b});

// const chars = ["a", "z", "f", "c", "b"];
// console.log(chars.sort((a, b) => b - a));

// 첫번째 방법 (원본에 변형)
// const chars = ["다", "나", "가", "라", "나라"];
// console.log(
//   chars.sort((a, b) => {
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
//   })
// );

// 두번째 방법
const chars = ["다", "나", "가", "라", "나라"];
const sortedChars = chars.sort((a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
// console.log(chars[2]);
console.log(chars);
console.log(sortedChars);

// 문자는 a-b 로 연산되지 않기 때문에 위처럼 써줘야함
// sort 는 원본에 변형을 가함.
// lodash의 sortby 는 새로운 내용을 만듦.

const animals = ["chicken", "cat", "puppy"];
const myAnimals = animals;
animals.push("camel");
console.log(myAnimals);
console.log(animals);
//
let a = 100;
let b = a;
a += 100;
console.log(b); //100
console.log(a); //200
//
const person = { name: "장성호", age: 30 };
const person02 = person; //얕은 복사(shallow copy)
const person03 = { nickName: "마동석", ...person };
// ... spread operator 배열 또는 객체의 원본을 훼손하지 않고 복사해갈 때 사용.
console.log(person02);
person.name = "장동건";
console.log(person03.name); // 장동건
console.log(person03.nickName);
