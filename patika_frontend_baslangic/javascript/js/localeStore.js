localStorage.setItem("myCat", "Code Kedisi");
console.log(localStorage.getItem("myCat"));
localStorage.removeItem("myCat");
console.log(localStorage.getItem("myCat"));

let user = { username: "erlik.furkan", isActive: true };
localStorage.setItem("userInfo", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("userInfo")));
console.log(JSON.parse(localStorage.getItem("userInfo")).username);
console.log(JSON.parse(localStorage.getItem("userInfo")).isActive);

localStorage.setItem("number", 11);
console.log(localStorage.getItem("number"));

let items = JSON.stringify([1, 2, 3, 4, user]);
console.log(items);
localStorage.setItem("newItem", items);
console.log(JSON.parse(localStorage.getItem("newItem"))[4].username);

let counter = localStorage.getItem("counter")
  ? Number(localStorage.getItem("counter"))
  : 0;
let counterDom = document.querySelector("h3#counter");
let plusDom = document.querySelector("button#plus");
let minusDom = document.querySelector("button#minus");

counterDom.innerHTML = counter;

plusDom.addEventListener("click", clickEvent);
minusDom.addEventListener("click", clickEvent);

function clickEvent() {
  this.id == "plus" ? (counter += 1) : (counter -= 1);
  localStorage.setItem("counter", counter);
  counterDom.innerHTML = counter;
}
