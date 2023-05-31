function getData(callbackFunc) {
  $.get("https://jsonplaceholder.typicode.com/users/1", function (response) {
    callbackFunc(response);
  });
}

getData(function (tableData) {
  console.log(tableData);
});
