let firstChild = document.querySelector("ul#liste>li:first-child");
let lastChild = document.querySelector("ul#liste>li:last-child");
firstChild.innerHTML = "Furkan.";
lastChild.innerHTML = "İBİŞ";

let ulDOM = document.querySelector("ul#liste");
let liDOM = document.createElement("li");
liDOM.innerHTML = "Kendi oluşturduğumuz öğe";
ulDOM.append(liDOM);
ulDOM.prepend(liDOM);
