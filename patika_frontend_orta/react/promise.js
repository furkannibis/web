import axios from "axios";

(async () => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { data: post1 } = await axios(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const { data: post2 } = await axios(
    "https://jsonplaceholder.typicode.com/posts/2"
  );

  // console.log(users);
  // console.log(post1);
  // console.log(post2);
})();

const getUsers = (number = 1) => {
  return new Promise(async (resolve, reject) => {
    // console.log("Comments");
    // if (number === 1) resolve({ text: "Selam" });
    // reject("Bir problem oldu");

    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );
    resolve(users);
    reject("Bir problem oluştu");
  });
};

const getPosts = () => {
  return new Promise(async (resolve, reject) => {
    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts"
    );
    resolve(posts);
    reject("PROBLEM");
  });
};

const getAlbums = () => {
  return new Promise(async (resolve, reject) => {
    const albums = await axios("https://jsonplaceholder.typicode.com/albums");
    resolve(albums);
    reject("PROBLEM");
  });
};

// (async () => {
//   try {
//     const users = await getUsers();
//     // .then((data) => console.log(data))
//     // .catch((e) => console.log(e));

//     const posts = await getPosts();
//     // .then((posts) => console.log(posts))
//     // .catch((e) => console.log(e));

//     const albums = await getAlbums();
//     // .then((albums) => console.log(albums))
//     // .catch((e) => console.log(e));

//     console.log(users);
//     console.log(posts);
//     console.log(albums);
//   } catch (error) {
//     console.log(error);
//   }
// })();

Promise.all([getUsers(), getPosts(), getAlbums()])
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
