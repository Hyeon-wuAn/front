// ajax (asynchronous javascript and xml)
// setTimeout, fetch 함수들은 비동기로 동작함.
const thumbsList = document.querySelector(".thumbs-box ul");
const search = document.querySelector(".search");
search.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    const searchWord = search.value;
    searchImg(searchWord);
  }
});

//promise

const removeItem = () => {
  const imgItem = document.querySelectorAll(".thumbs-box ul li");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};

// const searchImg = function (searchWord) {
//   //기존 이미지 없애기.. li 태그 없애기...
//   removeItem();
//   const aa = fetch(`https://dapi.kakao.com/v2/search/image?query=${searchWord}`, {
//     headers: {
//       Authorization: "KakaoAK 3594671693da7ee0ac5ab0213dafa8d8",
//     },
//   })
//     .then(function (response) {
//       // console.log(response.json());
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       const imgList = data.documents;
//       imgList.forEach(function (item, idx) {
//         const li = document.createElement("li");
//         const img = document.createElement("img");
//         const a = document.createElement("a");
//         li.append(a);
//         img.src = item.thumbnail_url;
//         a.href = item.image_url;
//         a.setAttribute("data-fancybox", "gallery");
//         a.append(img);
//         thumbsList.append(li);
//       });
//     });
//   console.log(aa);
//   Fancybox.bind("[data-fancybox]", {
//     // Your options go here
//   });
// };

const searchImg = async (searchWord) => {
  // 기존 이미지 없애기... li 태그 없애기... remove();
  removeItem();
  const imgResponse = await fetch(`https://dapi.kakao.com/v2/search/vclip?query=${searchWord}&size=26`, {
    headers: {
      Authorization: "KakaoAK 8a0584e2ec2cc7627ecb66e8d623dd86",
    },
  });
  const imgJson = await imgResponse.json();
  const imgList = imgJson.documents;
  imgList.forEach(function (item, idx) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");
    img.src = item.thumbnail;
    a.href = item.url;
    a.setAttribute("data-fancybox", "gallery");
    a.append(img);
    li.append(a);
    thumbsList.append(li);
  });
  gsap.from(".thumbsList li", { scale: 0, duration: 1, stagger: 0.02 });
  Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });
};
