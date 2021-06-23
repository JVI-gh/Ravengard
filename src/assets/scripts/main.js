const MENUBUTTONS = document.getElementsByClassName("menu-button");
const MENUBUTTONSNAMES = [
  "Main",
  "Profile",
  "News",
  "Friendlist",
  "Communities",
  "Options",
];
const TABS = document.getElementsByClassName("tabs-view");
MENUBUTTONS[0].className += " active";
TABS[0].style.display = "block";

for (let c = 0; c < MENUBUTTONS.length; c++) {
  MENUBUTTONS[c].addEventListener("click", (e) => {
    openTab(e, MENUBUTTONSNAMES[c]);
  });
}

function openTab(evt, tab) {
  for (let i = 0; i < TABS.length; i++) {
    TABS[i].style.display = "none";
  }

  for (let i = 0; i < MENUBUTTONS.length; i++) {
    MENUBUTTONS[i].className = MENUBUTTONS[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}
