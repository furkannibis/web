import axios from "axios";

export const getData = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data: userInfo } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const { data: userPosts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    resolve([userInfo, userPosts]);
    reject("PROBLEM");
  });
};
