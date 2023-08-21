const users = [
  { username: "Mehmet", age: 20 },
  { username: "Ahmet", age: 18 },
  { username: "Murat", age: 40 },
];

// push
// map
// find
// filter
// some
// every
// includes

users.push({ username: "Ayşe", age: 50 });
console.log(users);

users.map((item) => {
  console.log(item);
});

const result = users.find((item) => item.age < 20 || item.username == "Mehmet");
console.log(result);

const filtered = users.filter(
  (item) => item.age > 20 || item.username[0] == "M"
);
console.log(filtered);

const some = users.some((item) => item.age > 20);
console.log(some);

const every = users.every((item) => item.age > 20);
console.log(every);

const meyveler = ["Elma", "Armut", "Muz"];
const isExist = meyveler.includes("Muz");
console.log(isExist);
