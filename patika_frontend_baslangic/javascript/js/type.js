let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log(
  "Price:",
  typeof price,
  "\nString Price:",
  typeof stringPrice,
  "\nHas Password:",
  typeof hasPassword
);

// Converting
let number1 = "11";
number1 = parseInt(number1);
console.log("number1:", parseInt(number1), typeof number1);

let number2 = "11px";
number2 = parseInt(number2);
console.log("number2:", parseInt(number2), typeof number2);

let number3 = "px11";
number3 = parseInt(number3);
console.log("number3:", parseInt(number3), typeof number3);

let number4 = "11px";
number4 = Number(number4);
console.log("number4:", number4, typeof number4);

let number5 = "11.4px";
number5 = parseFloat(number5);
console.log("number5:", number5, typeof number5);

let number6 = 55;
number6 = number6.toString();
console.log("number6:", number6, typeof number6);
