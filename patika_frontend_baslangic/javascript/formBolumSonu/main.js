function formHandler(event) {
  event.preventDefault();

  const alertFunction = (title, message, className = "danger") => `
  <div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> <br >
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");
  const LESSON_NAME = document.querySelector("#lessonName");
  if (USER_NAME.value && SCORE.value && LESSON_NAME.value) {
    addItem(USER_NAME.value, LESSON_NAME.value, SCORE.value);
    USER_NAME.value = "";
    LESSON_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunction(
      "Lütfen Boş Alan Bırakmayın!",
      "Sistemimiz gerekli alanları boş bıraktığınızı tespit etti.<br>Lütfen gerekli tüm alanları doldurunuz."
    );
  }
}

const addItem = (userName, lessonName, score) => {
  let liDOM = document.createElement("li");
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start"
  );
  liDOM.innerHTML = `
    <div class="ms-2 me-auto">
        <div class="fw-bold">${userName}</div>
        ${lessonName}
    </div> 
    <span class="badge bg-primary rounded-pill">
        ${score}
    </span>`;

  userListDOM.append(liDOM);
};

let alertDOM = document.querySelector("#alert");
let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
let userListDOM = document.querySelector("#userList");
