const LOGINBUTTON = document.querySelector("#Login");
const NEWCHARACTERBUTTON = document.querySelector("#NewChar");
const NEXTBUTTON = document.querySelectorAll(".next");
const NEWCHARACTERCREATOR = document.querySelectorAll(".character-creator");
let creationStep = 0;
const APIserver = "https://IGAPI.callmecrow.repl.co/";

LOGINBUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./assets/screens/main.html";
  //login(username, password);
});

let playerName = document.querySelector("#PlayerInput");
let playerClass = document.querySelector("#ClassInput");
let playerStats = document.querySelector("#StatsInput");


NEWCHARACTERBUTTON.addEventListener("click", (e) => {
  e.preventDefault();

  let controls = document.querySelector("#BasicControls");
  controls.classList.add("hide");
  
  characterCreationHandler();
});


NEXTBUTTON.forEach(button => {
  button.addEventListener("click", () => {
    let siblingInputValue = button.parentElement.querySelector("input").value;
    if(siblingInputValue != undefined) {
      hideCurrentSection();
      creationStep++;
      characterCreationHandler();
    }
  });
});

function hideCurrentSection() {
  NEWCHARACTERCREATOR[creationStep].classList.add("hide");
}

function characterCreationHandler() {
  NEWCHARACTERCREATOR[creationStep].classList.remove("hide");
}

const CLASSOPTION = document.querySelectorAll(".class-button");

CLASSOPTION.forEach(option => {
  option.addEventListener("click", () => {
    playerClass.value = option.innerText;
  });
});

const STATSCOUNTERS = document.querySelectorAll(".player-stat");

let stats = [STATSCOUNTERS[0].value,STATSCOUNTERS[1].value,STATSCOUNTERS[2].value,STATSCOUNTERS[3].value,STATSCOUNTERS[4].value,STATSCOUNTERS[5].value];
let counter = 33;
let uiCounter = document.querySelector("#point-counter");
uiCounter.innerText = counter;


STATSCOUNTERS.forEach((stat) => {
  stat.addEventListener("change", () => {
    counterUpdate(stat);
    stats = [STATSCOUNTERS[0].value,STATSCOUNTERS[1].value,STATSCOUNTERS[2].value,STATSCOUNTERS[3].value,STATSCOUNTERS[4].value,STATSCOUNTERS[5].value];
  });
});

function counterUpdate(stat) {
  uiCounter.innerText = counter;
}

login = (username, password) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    username: username,
    password: password,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(APIserver + "login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.token) {
        window.location.href = "./assets/screens/main.html";
        try {
        } catch (e) {
          // saving error
        }
      }
    })
    .catch((error) => console.log("error", error));
};
