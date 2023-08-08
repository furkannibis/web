// let fullName = prompt();
// console.log(fullName);

let fullName1 = prompt("Lutfen adinizi giriniz");
console.log(fullName1);

let greeting = document.querySelector("#title");
greeting.innerHTML = `${greeting.innerHTML} <small style="color: red;">${fullName1}</small>`;
