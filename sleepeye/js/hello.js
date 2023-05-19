let myName = "장성호";
const pi = 3.14; //상수는 바꾸면 오류
var num = 10;
// 변수 앞에는 let 과 const 를 붙일 수 있다.
// var는 잘 쓰이지 않음.
myName = 10;
console.log(10 + 10);
for (var i = 0; i < 5; i++) {
  console.log("hello js");
}
console.log(i);
function add(a, b) {
  return a + b;
}
const result = add(10, 20);
console.log(result);
