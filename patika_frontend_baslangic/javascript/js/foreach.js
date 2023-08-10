const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
);
console.log(PRODUCTS);

const userListDOM = document.querySelector("ul#userList");
PRODUCTS.forEach((product) => {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = product;
  userListDOM.appendChild(liDOM);
});
