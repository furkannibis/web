// for (let index = 0; index < 100; index++) {
//   console.log(index);
// }

let users = ["Lorem", "Ipsum", "Dolor"];
let ulDom = document.querySelector("ul#userList");

for (let i = 0; i < users.length; i++) {
  let liDom = document.createElement("li");
  liDom.innerHTML = users[i];
  ulDom.appendChild(liDom);
}

let counter = 0;
for (counter; counter < 10; counter++) {
  if (counter === 5) {
    break;
  }
}

for (counter = 0; counter < 10; counter++) {
  if (counter === 5) {
    continue;
  }
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

const ulDOM = document.querySelector("ul#userList");
for (counter = 0; counter < LOREM_LIST.length; counter++) {
  if (LOREM_LIST[counter] === "elit.") {
    // continue;
    break;
  }
  let liDOM = document.createElement("li");
  liDOM.innerHTML = LOREM_LIST[counter];
  ulDOM.appendChild(liDOM);
}
