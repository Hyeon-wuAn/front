// async / await

/*
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("success");
    // reject("fail");
  }, 1000);
});
console.log(myPromise);

myPromise
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  })
  .finally(function () {    // 무조건 실행하는 함수
    console.log("이건 무조건 출력");
    console.log(myPromise);
  });
*/

const user = {
  id: "jjang051",
  name: "장성호",
};

//async await 는 비동기적 실행을 동기적으로 바꾼다.
//async 는 함수 앞에만 쓸 수 있고 await 는 단독으로 사용할 수 없다.

function fetchUser() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  return fetch(url).then((response) => response.json());
}

async function checkName() {
  const user = await fetchUser(); //비동기, await 로 동기적으로 바꿈.
  console.log(user);
  if (user.id === 1) {
    // 동기
    console.log(user.name);
  }
}
// checkName();
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => data.userId)
  .then(function (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then(function (user) {
        // console.log(user.name);
      });
  });

async function fetchUserName(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  const userId = post.userId;
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userResponse.json();
  return user.name;
}
fetchUserName(1).then(function (name) {
  console.log(name);
});
