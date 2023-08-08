let h1DOM = document.querySelector("h1#greeting");
console.log(h1DOM.classList);

h1DOM.classList.add("text-primary");
h1DOM.classList.add("title");
h1DOM.classList.add("first-info", "second-info", "third-info");

h1DOM.classList.remove("title", "first-info", "second-info", "third-info");

console.log(h1DOM.classList);
