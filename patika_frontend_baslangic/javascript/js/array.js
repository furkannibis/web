let domain = "kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

// items += [1, 2, 3];
// console.log(items);
// 1,2,3,false,kodluyoruz1,2,3 array.js:7:9

let emptyArray = [];

// console.log(items.length);
// document.querySelector("#info").innerHTML = items.length;

console.log(items[0], "İlk eleman");
console.log(items[items.length - 1], "Son eleman");
console.log(items[parseInt(items.length / 2)], "ortadaki eleman");
console.log(typeof items); // object
console.log(Array.isArray(items));

items.push(50); // Sona Eleman Ekleme
console.log(items);

items.unshift(5); // Başa Eleman Ekleme
console.log(items);

items.pop(); // Sondaki elemanı silme
console.log(items);

items.shift(); // Baştaki elemanı siler
console.log(items);

items[0] = "Baştaki Eleman";
console.log(items);

let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);
items.push(maleUsers);

console.log(items);
console.log(items.length);
console.log(items[0].length, items[0][1]);
console.log(items[items.length - 1].length, items[items.length - 1][1]);

let newItems = items.splice(1, 2);
console.log(newItems);
console.log(items);

items.unshift("Lorem.");
items.push("Ipsum.");

console.log(items.indexOf("Ipsum."));

let copyItems = items;
console.log(items);
copyItems.pop();
console.log(items);

copyItems = items.slice();
copyItems.pop();
console.log("items", items);

let allUsers = [...femaleUsers, ...maleUsers];
console.log(allUsers);
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

allUsers.splice(allUsers.length - 1, 0, "Melisa");
console.log(allUsers);
