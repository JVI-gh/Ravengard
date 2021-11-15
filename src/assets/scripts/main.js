const NAVMENUITEMS = document.querySelectorAll("ul button");
const SECTIONS = document.querySelectorAll("section");

NAVMENUITEMS[0].classList.add("activeSection");
SECTIONS[0].classList.add("activeSection");

NAVMENUITEMS.forEach(function (element, i) {
  element.addEventListener("click", () => {
    removePreviousActiveSection();
    setActiveSection(element, i)
  })
});

function removePreviousActiveSection () {
  let activeSection = document.querySelectorAll(".activeSection");
  activeSection.forEach(element => {
    element.classList.remove("activeSection");
  })
}

function setActiveSection(element, index) {
  element.classList.add("activeSection");
  SECTIONS[index].classList.add("activeSection");
}