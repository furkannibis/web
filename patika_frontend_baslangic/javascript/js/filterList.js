const USERS = [
  { fullName: "Furkan IBIS", isActive: false },
  { fullName: "Emre KALAYCI", isActive: true },
  { fullName: "Cemail KULAKSIZ", isActive: false },
  { fullName: "Aksel DURMAZ", isActive: true },
];

const activeUsers = USERS.filter((item) => item.isActive);
console.log(activeUsers);

const person = [
  { name: "Adem", age: 25, languages: ["JavaScript", "CSS"] },
  { name: "Oğuz", age: 33, languages: ["Java", "HTML"] },
];

const BIGGER30 = person.filter((person) => person.age > 30);
console.log(BIGGER30);

const knowJS = person.filter((person) =>
  person.languages.includes("JavaScript")
);
console.log(knowJS);

const USERS_1 = ["FurKan", "AhmeT", "LeyLA", "akSEL"];
const NEW_USERS = USERS_1.map((users) => users.toLowerCase());
console.log(NEW_USERS);

// const USERS_OBJECT = USERS_1.map((item) => {
//   return {
//     userName: item,
//     shortName: `${item[0].toUpperCase()}.`,
//     newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
//   };
// });

const USERS_OBJECT = USERS_1.map((item) => ({
  userName: item,
  shortName: `${item[0].toUpperCase()}.`,
  newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
}));
console.log(USERS_OBJECT);
