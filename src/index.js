import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./index.css";

function pageLoad() {
  const tab = document.createElement("div");
  const resName = document.createElement("div");
  resName.classList.add("name");
  resName.innerHTML = "Pann";
  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = "HOME";
  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "MENU";
  const contactBtn = document.createElement("button");
  contactBtn.innerHTML = "CONTACT";

  tab.classList.add("tab");
  tab.appendChild(resName);
  tab.appendChild(homeBtn);
  tab.appendChild(menuBtn);
  tab.appendChild(contactBtn);
  content.appendChild(tab);

  homeBtn.addEventListener("click", home);
  menuBtn.addEventListener("click", menu);
  contactBtn.addEventListener("click", contact);

  return tab;
}

const content = document.querySelector("#content");
const tab = pageLoad();
document.content.appendChild(tab);
