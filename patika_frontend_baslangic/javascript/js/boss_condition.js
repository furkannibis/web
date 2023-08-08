let note = prompt("Sınav notunuzu giriniz: ");
let info = document.querySelector("h3#info");

info.innerHTML = `${
  100 >= note && note >= 90
    ? "AA"
    : note >= 85 && note <= 89
    ? "BA"
    : note >= 80 && note <= 84
    ? "BB"
    : note >= 75 && note <= 79
    ? "CB"
    : note >= 70 && note <= 74
    ? "CC"
    : note >= 65 && note <= 69
    ? "DC"
    : note >= 60 && note <= 64
    ? "DD"
    : note >= 50 && note <= 59
    ? "FD"
    : note >= 0 && note <= 49
    ? "FF"
    : "Hatalı not bilgisi girildi"
}`;

if (info.innerHTML === "FF") {
  info.innerHTML += " :(";
  info.classList.add("text-danger");
} else if (info.innerHTML === "Hatalı not bilgisi girildi") {
  info.innerHTML += " ???????";
  info.classList.add("text-danger");
} else {
  info.innerHTML += " :)";
  info.classList.add("text-primary");
}
