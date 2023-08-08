let price = 100;
let priceString = "100";
let user = "furkan";
console.log(` 100   == 1   --> ${price == 1}`);
console.log(`"100"  == 100 --> ${priceString == 100}`);
console.log(`"100" === 100 --> ${priceString === 100}`);
console.log(` 100   != 1   --> ${price != 1}`);
console.log(`user !== "guest"--> ${user !== "guest"}`);
console.log(`100 > 50 --> ${100 > 50}`);
console.log(`100 <   50 --> ${100 < 50}`);
console.log(`100 >= 100 --> ${100 >= 100}`);

price = 0;
console.log(`price && user !== "guest" --> ${price > 0 && user !== "guest"}`);

console.log(
  `price > 0 || user !== "guest" --> ${price > 0 || user !== "guest"}`
);

price = 1;
console.log(
  `price > 0 && !user === "guest" --> ${price > 0 && !user !== "guest"}`
);
