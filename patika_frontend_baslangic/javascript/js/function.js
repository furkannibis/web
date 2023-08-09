function hello() {
  console.log("Hello, World!");
  merhaba();
}

function merhaba() {
  console.log("Merhaba, Dünya!");
}

function userCheck(username, age) {
  let info = document.querySelector("h3#info");
  if (!username && !age) {
    info.innerHTML = "Kullanıcı adı bilgisi verilmemiş";
    info.innerHTML += "<br>Kullanıcı yaş bilgisi verilmemiş";
  } else if (!username) {
    info.innerHTML = "Kullanıcı adı bilgisi verilmemiş";
  } else if (!age) {
    info.innerHTML = "Kullanıcı yaş bilgisi verilmemiş";
  } else {
    if (age >= 18) {
      info.innerHTML = "Ehliyet alabilirsiniz.";
    }
  }
}

hello();
userCheck("Furkan", 20);

let firstname = "Furkan";
function greetings(firstname = "", lastname = "") {
  console.log(
    `Merhaba, ${firstname ? firstname : "Guest"} ${
      lastname ? lastname : "Guest"
    }`
  );
}
console.log(firstname);
let info = greetings("", "");
console.log(info);

function greetings2(firstname = "", lastname = "") {
  let info = `Merhaba, ${firstname ? firstname : "Guest"} ${
    lastname ? lastname : "Guest"
  }`;
  return info;
}
console.log(greetings2("Furkan", "IBIS"));

function greeting2h3(id, info) {
  let domObject = document.querySelector(`${id}`);
  domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red";>color red</span>`;
greeting2h3("h3#greeting", htmlInfo);
