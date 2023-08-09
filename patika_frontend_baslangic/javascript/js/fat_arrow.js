function sayHello(firstName) {
  console.log(`Merhaba, ${firstName}`);
}
sayHello("Furkan");

const helloFuncV1 = (firstName) => {
  console.log(`Merhaba, ${firstName}`);
};
helloFuncV1("Furkan");

const helloFuncV2 = (firstname) => console.log(`Hello, ${firstname}`);
helloFuncV2("Furkan");

const helloFuncV3 = (firstname, lastname) =>
  console.log(`Hello, ${firstname} ${lastname}`);
helloFuncV3("Furkan", "IBIS");

const helloFuncV4 = (firstname, lastname) => {
  let info = `Hello, ${firstname} ${lastname}`;
  console.log(info);
  return info;
};
helloFuncV4("Furkan", "IBIS");
