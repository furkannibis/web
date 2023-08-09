function sayWelcome(name = "Guest") {
  return `Merhaba, ${name}! Hoş geldin!`;
}

let helloDomObject = document.querySelector("h2#sayHello");
let name = prompt("Adınız: ");
helloDomObject.innerHTML = sayWelcome(name);

function setMinuteSecond(i) {
  if (i < 10 && i != "00") {
    i = "0" + i;

    return i;
  }
  return i;
}

function startTimer() {
  let timerDomObject = document.querySelector("h2#datetime");
  let second = timerDomObject.innerHTML.split(":")[2];
  let minute = timerDomObject.innerHTML.split(":")[1];
  let hour = timerDomObject.innerHTML.split(":")[0];

  if (second == "60") {
    minute++;
    second = "0";
  }
  if (minute == "60") {
    hour++;
    minute = "0";
  }
  second++;
  timerDomObject.innerHTML = `${hour}:${setMinuteSecond(
    minute
  )}:${setMinuteSecond(second)}`;
  if (run) {
    setTimeout(startTimer, 1000);
  }
}

function stopTimer() {
  run = false;
}

function resetTimer() {
  let timerDomObject = document.querySelector("h2#datetime");
  timerDomObject.innerHTML = `00:00:00`;
}

let run = true;

let startButton = document.querySelector("button#start");
let stopButton = document.querySelector("button#stop");
let resetButton = document.querySelector("button#reset");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
