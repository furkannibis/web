const users = [
  { userName: "Furkan", password: "123" },
  { userName: "Mehmet", password: "321" },
];

// Push
console.log(users.push({ userName: "Ali", password: "456" }));
console.log(users);

// Map
users.map((item) => console.log(item.userName));

// Find
console.log(users.find((item) => item.userName[0] == "F"));

// Filter
console.log(
  users.filter((item) => item.userName != "Furkan" && item.password[0] != "3")
);

// Some
console.log(users.some((item) => item.password > 123));

// Every
console.log(users.every((item) => item.password == "123"));
