function fromLocalStory() {
  const items = { ...localStorage };
  console.log(items);
  for (let k in items) {
    let liDOM = document.createElement("li");
    liDOM.classList.add("listLI");
    liDOM.innerHTML = `<span>${k}</span><a href="#" class="listLink"><span class="exitLI">X</span></a>`;
    liDOM.querySelector(".exitLI").addEventListener("click", function () {
      ulDOM.removeChild(liDOM);
      localStorage.removeItem(k);
    });
    ulDOM.appendChild(liDOM);
  }
}

function batmanSentence() {
  let sentenceList = [
    "I'm Batman.",
    "I Think We Can Take Them. Do You Think We Can Take Them?",
    "I’m Still Here",
    "I’m The Goddamn Batman",
    "If You Are Good, The Shadow's Wings Are A Welcome, Protective Blanket.",
    "I Wear A Mask. And That Mask, It’s Not To Hide Who I Am, But To Create What I Am.",
    "I've Put Out A Few Fires, Yes. Won A Few Battles. But The War Goes On, Alfred... On And On...",
    "The Idea Was To Be A Symbol. Batman Could Be Anybody, That Was The Point.",
    "Maybe That's What Batman Is About. Not Winning. But Failing, And Getting Back Up.",
    "You Can Never Escape Me. Bullets Don't Harm Me. Nothing Harms Me. But I Know Pain.",
    "The Voice Kept Calling Me Bruce. In My Mind, That's Not What I Call Myself.",
    "No Miracles. No Mercy. No Redemption. No Heaven. No Hell.",
    "You Either Die A Hero Or You Live Long Enough To See Yourself Become The Villain.",
    "If I Allow Myself To Go Down Into That Place… I’ll Never Come Back.",
    "All Men Have Limits ... I Ignore Mine",
    "Batman Punches People In The Face.",
    "Death Is Powerless Against You If You Leave A Legacy Of Good Behind.",
    "I Chose This Life. I Know What I'm Doing.",
    "Criminals Are A Cowardly And Superstitious Lot.",
    "It’s Not Who I Am Underneath, But What I Do That Defines Me.",
    "Sometimes It's Only Madness That Makes Us What We Are.",
    "When That Light Hits The Sky, It’s Not Just A Call. It’s A Warning.",
    "I Am Vengeance. I Am The Night. I Am Batman!",
    "Shut Up And Fight.",
    "The World Only Makes Sense If You Force It To.",
    "Vengeance Won't Change The Past. I Have To Become More.",
    "Yes, Father. I Shall Become A Bat",
  ];
  const parag = document.querySelector("#smallParagraph");
  let selectedSentence = `<i>${
    sentenceList[Math.floor(Math.random() * sentenceList.length)]
  }</i>`;
  parag.style.fontSize = "15px";
  parag.innerHTML = selectedSentence;
}

function addToList(event) {
  event.preventDefault();
  if (!userFormTextDOM.value || !userFormTextDOM.value.trim()) {
    alert("Düzgün bir isim vermen gerekiyor?");
  } else {
    let liDOM = document.createElement("li");
    liDOM.classList.add("listLI");
    liDOM.innerHTML = `<span>${userFormTextDOM.value}</span><a href="#" class="listLink"><span class="exitLI">X</span></a>`;
    liDOM.querySelector(".exitLI").addEventListener("click", function () {
      ulDOM.removeChild(liDOM);
      localStorage.removeItem(userFormTextDOM.value);
    });
    localStorage.setItem(`${userFormTextDOM.value}`, liDOM.innerHTML);
    ulDOM.appendChild(liDOM);
    alert("Bu iş bende!");
  }
}

document.body.style.backgroundImage = `url(media/image${
  Math.floor(Math.random() * 6) + 1
}.jpg)`;

batmanSentence();

let liList = [];
const ulDOM = document.querySelector("#listUL");
const userFormTextDOM = document.querySelector("#formText");
const userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", addToList);
fromLocalStory();
