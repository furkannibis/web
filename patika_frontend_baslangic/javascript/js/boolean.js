let isActive = false;
isActive = true;
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

// Boolean("11") --> true
// Boolean("0") --> true
// Boolean("") --> false

userName = "User";
console.log("Username var mı: ", Boolean(userName));

// console.log(0) false
// console.log(-0) false
// console.log(-0.1) true
console.log(Boolean(0 == 0));

if (userName.length > 0) {
  console.log("username var mı: ", true);
}
