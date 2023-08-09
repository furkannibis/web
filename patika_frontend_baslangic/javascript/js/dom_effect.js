function domClick() {
  console.log("Tıklandı");
  console.log(this.innerHTML);

  this.innerHTML = "TIKLANDIGI ICIN YAZI VE REK DEGISTI";

  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
}

let greeting = document.querySelector("h3#greeting");
// greeting.addEventListener("click", domClick);
greeting.addEventListener("click", domClick);
