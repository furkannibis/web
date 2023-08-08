let username = "furkan";
let info = document.querySelector("h3#info");

info.innerHTML = `${username ? username : "Kullanıcı bilginiz bulunamadı"}`;
