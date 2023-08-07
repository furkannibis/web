let price = 100;
let tax = 0.18;
let totalTax = price * tax;
let total = price + totalTax;
console.log("Fiyat: ", price, "KDV Oranı: ", tax, "Total Fiyat: ", total);

let counter = 0;
counter += 1;
counter++;
++counter;
counter--;
--counter;
counter *= 10;
console.log(counter);

console.log(2 + 3 * 6 * (10 / 2));
console.log(3 % 2);
console.log(15 % 2);

console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

console.log("Aşağı yuvarlama (1.9): ", Math.floor(1, 9));
console.log("Yukarı yuvarlama (1.9): ", Math.ceil(1.9));
console.log("Yakına yuvarlama (1.9): ", Math.round(1.9));

let stringNumber = "11";
console.log(typeof stringNumber == typeof parseInt(stringNumber));

let newNumber = Number(stringNumber);
console.log(newNumber);

console.log("Number Constractor içinde bilgi gönderildi: ", Number(100));
