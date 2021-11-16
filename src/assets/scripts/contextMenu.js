const DESCRIPTIONTITLE = document.querySelector("#Dinamic-Title");
const DESCRIPTIONCONTENT = document.querySelector("#Dinamic-Content");

const ITEMS = document.querySelectorAll(".item");

ITEMS.forEach(element => {
    element.addEventListener("click", () => {
        updateDescriptionContent(element)
    })
});

function updateDescriptionContent (element) {
    DESCRIPTIONTITLE.innerText = element.querySelector(".item-Title").innerText;
    DESCRIPTIONCONTENT.innerText = element.querySelector(".item-Description").innerText;
}