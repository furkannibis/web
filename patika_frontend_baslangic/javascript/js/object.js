let arrayObj = [1, 2, 3];
let object1 = { obj: 1 };

console.log("Array Object: ", typeof arrayObj);
console.log("object 1: ", typeof object1);

let item1 = new Object();
let item2 = {};
console.log("item1", typeof item1);
console.log("item2", typeof item2);

let item3 = {};
let item4 = new Object();

let laptop1 = {
  brand: "Apple",
  model: "MacBook Pro",
  "2kg": 2,
};

laptop1.brand = "Mac";
laptop1.version = "10.15.7";

keys = Object.keys(laptop1);
console.log(keys);

keys.forEach((key, value) => {
  //   console.log(key, " ", laptop1[key]);
  console.log(key, " ", value);
});

values = Object.values(laptop1);
values.forEach((value) => {
  console.log(value);
});

console.log(laptop1);
console.log(laptop1.brand);
console.log(laptop1.model);
console.log(laptop1["2kg"]);

let user1 = {
  firstName: "Bilgin",
  lastName: "Uzman",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
  },
};

console.log(user1.shortName());

let settings = {
  userName: "Lorem Ipsum.",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};
// let userName = settings.userName;
// console.log(userName);

let { userName: user, password, isActive, ip: serverIP, serverName } = settings;
console.log(user, password, isActive, serverIP, serverName);
console.log(settings);

let {
  userName: userName2,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;
console.log(newSettings);
console.log(userName2, password2, isActive2, newSettings);

let settings2 = { ...settings };

let score = [100, 200, 300, 400];
let [score1, score2, ...scoreOthers] = score;
console.log(score1, score2, scoreOthers);

let score3 = [...score];
console.log(score3);
