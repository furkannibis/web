for (let index = 0; index < 100; index++) {
  console.log(index);
}

let users = ["Lorem", "Ipsum", "Dolor"];
let ulDom = document.querySelector("ul#userList");

for (let i = 0; i < users.length; i++) {
  let liDom = document.createElement("li");
  liDom.innerHTML = users[i];
  ulDom.appendChild(liDom);
}

const LOREM_LIST = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit.",
  "Eius,",
  "accusantium!",
];
