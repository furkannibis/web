fetch("./data/settings.json")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

const listDOM = document.querySelector("#userList");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) =>
    responseJson.forEach((element) => {
      let liDOM = document.createElement("li");
      liDOM.innerHTML = element.title;
      listDOM.appendChild(liDOM);
    })
  );
