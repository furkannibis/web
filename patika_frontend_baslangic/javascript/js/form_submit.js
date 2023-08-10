function formSubmit(event) {
  event.preventDefault(); // Default islem engellendi
  console.log("Islem tamamlandi");

  let scorInputDOM = document.querySelector("#score");
  console.log(scorInputDOM.value);
  localStorage.setItem("username", scorInputDOM.value);
}

let formDOM = document.querySelector("form#userForm");
formDOM.addEventListener("submit", formSubmit);
