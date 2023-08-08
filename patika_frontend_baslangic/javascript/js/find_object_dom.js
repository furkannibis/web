let title = document.getElementById("title");
console.log(title.innerHTML); // Lorem.
title.innerHTML = "Deneme";
console.log(title.innerHTML); // Deneme

let link = document.querySelector("ul>li>a");
console.log(link.innerHTML);
link.innerHTML = "Link bilgisi degistirildi";
console.log(link.innerHTML);
link.style.color = "red";
link.style.textDecoration = "none";
link.classList.add("btn");
