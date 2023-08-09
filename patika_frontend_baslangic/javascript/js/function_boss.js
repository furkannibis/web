let plus = document.querySelector("button#plus");
plus.addEventListener("click", clickEvent);

let minus = document.querySelector("button#minus");
minus.addEventListener("click", clickEvent);

function clickEvent() {
  let counterNumber = document.querySelector("h3#counter");
  this.id == "plus" ? counterNumber.innerHTML++ : counterNumber.innerHTML--;
}
