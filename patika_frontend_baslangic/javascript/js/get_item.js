let alternate = document.querySelectorAll("ul.liste>li.alternate");
console.log(alternate[0].innerHTML);
alternate[0].style.color = "red";
console.log(alternate[1].innerHTML);
alternate[1].style.color = "red";

let walterwhite = document.querySelector("ul.liste>li#walterwhite");
console.log(walterwhite.innerHTML);
walterwhite.style.color = "blue";

let items = document.querySelectorAll("ul.liste>li:not([class]):not([id])");
items.forEach((element) => {
  console.log(element.innerHTML);
  element.style.color = "green";
});
