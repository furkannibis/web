import { getData } from "./data.js";

getData(1)
  .then((result) => result.map((item) => console.log(item)))
  .catch((e) => console.log(e));
