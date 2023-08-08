// eger (username.lenght > 0) {console.log(username)}
// if (username.lenght > 0) {console.log(username)}
let username = "Furkan";
if (username) {
  console.log(`Kullanici bilginiz: ${username}`);
} else {
  console.log("Bilgi yok");
}

let info = document.querySelector("h3#info");
let username2 = "Furkan";
let age = 23;
if (!username2 && !age) {
  info.innerHTML = "Kullanıcı adı bilgisi verilmemiş";
  info.innerHTML += "<br>Kullanıcı yaş bilgisi verilmemiş";
} else if (!username2) {
  info.innerHTML = "Kullanıcı adı bilgisi verilmemiş";
} else if (!age) {
  info.innerHTML = "Kullanıcı yaş bilgisi verilmemiş";
} else {
  if (age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz.";
  }
}
