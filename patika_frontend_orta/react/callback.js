// setTimeout(() => {
//   console.log("Hello, World!");
// }, 2000);

// setInterval(() => {
//   console.log("Her saniye çalışacak");
// }, 1000);

// const sayHello = (cb) => {
//   cb();
// };

// sayHello(() => {
//   console.log("Hello, World!");
// });

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("USERS YUKLENDI");
//     console.log(users);
//     console.log("POSTLAR YUKLENDI");
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((data) => data.json())
//       .then((posts) => console.log(posts));
//   });

async function getData() {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();
  console.log(data);
  console.log(post1);
  console.log(post2);
}
getData();

(async () => {
  console.log("Selam");
})();
