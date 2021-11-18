let playerData = JSON.parse(window.localStorage.getItem("playerData"));

const PLAYERNAMEINPUT = document.querySelectorAll(".pName");
const PLAYERCLASSINPUT = document.querySelectorAll(".pClass");
const PLAYERLEVELINPUT = document.querySelectorAll(".pLevel");
const PLAYERGOLDINPUT = document.querySelectorAll(".pGold");
const PLAYEREQUIPMENT = document.querySelectorAll(".gear");
const PLAYERINVENTORY = document.querySelectorAll(".pInventory");

const DATAINPUT = [
  PLAYERNAMEINPUT,
  PLAYERCLASSINPUT,
  PLAYERLEVELINPUT,
  PLAYERGOLDINPUT,
  PLAYEREQUIPMENT,
  PLAYERINVENTORY,
];

DATAINPUT.forEach((inputList, index) => {
  inputList.forEach((element) => {
    switch (index) {
      case 0:
        element.innerText = playerData.name;
        break;
      case 1:
        element.innerText = playerData.class;
        break;
      case 2:
        element.innerText = playerData.level;
        break;
      case 3:
        element.innerText = playerData.gold;
        break;
      case 4:
        equipmentUpdate(element);
        break;
      case 5:
        inventoryUpdate(element);
        break;
      default:
        break;
    }
  });
});

function equipmentUpdate(container) {
  playerData.inventory.forEach((item) => {
    if (container.id === item[4]) {
      container.innerHTML +=
        "<option value='" + item[0] + "'>" + item[0] + "</option>";
    }
  });
}

function inventoryUpdate(container) {
  playerData.inventory.forEach((item) => {
    container.innerHTML +=
      "<div class='item'><img src='../svg/gem-svgrepo-com.svg' alt='item image'><p class='item-Title overflow'>" +
      item[0] +
      "</p><div class='hide'><p class='item-Description'>" +
      item[2] +
      "</p</div></div>";
  });
}
