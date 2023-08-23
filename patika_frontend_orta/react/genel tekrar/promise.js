import axios from "axios";

const getNumber = (x, y) => {
  return new Promise((resolve, reject) => {
    if (x === y) resolve("Sayılar eşit");
    else if (x > y) resolve("X > Y");
    else if (y > x) resolve("Y > X");
    else reject("ERROR");
  });
};

// getNumber("a", 2)
//   .then((value) => console.log(value))
//   .catch((e) => console.log(e));

const getUser = (userID) => {
  return new Promise(async (resolve, reject) => {
    const { data: userInfo } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    resolve(userInfo);
    reject("ERROR");
  });
};

getUser(1)
  .then((value) => console.log(value))
  .catch((e) => console.log(e));
