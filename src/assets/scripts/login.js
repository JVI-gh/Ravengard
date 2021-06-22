const SUBMITBUTTON = document.querySelector("#Login");
const USERINPUT = document.querySelector("#UserInput");
const PASSWORDINPUT = document.querySelector("#PasswordInput");
const APIserver = "https://IGAPI.callmecrow.repl.co/";

SUBMITBUTTON.addEventListener("click", (e) => {
    e.preventDefault();
    let username = USERINPUT.value;
    let password = PASSWORDINPUT.value;

    login(username, password);
});

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
      }).catch((error) => console.log("error", error));
  };