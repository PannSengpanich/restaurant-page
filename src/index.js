import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./index.css";

function pageLoad() {
  const content = document.querySelector("#content");
  const tab = document.createElement("div");
  const bodyContainer = document.createElement("div");
  const resName = document.createElement("div");

  resName.innerHTML = "Pann";
  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "Food & Drinks";
  const contactBtn = document.createElement("button");
  contactBtn.innerHTML = "Contact";
  const me = document.createElement("div");
  me.classList.add("me");
  me.innerHTML = "created by Pann Sengpanich";

  bodyContainer.classList.add("bodyContainer");
  resName.classList.add("name");
  tab.classList.add("tab");
  tab.appendChild(resName);
  tab.appendChild(homeBtn);
  tab.appendChild(menuBtn);
  tab.appendChild(contactBtn);
  tab.appendChild(me);
  content.appendChild(tab);
  content.appendChild(bodyContainer);

  function initPage() {
    const body = home();
    bodyContainer.appendChild(body);
  }

  function changePage(page) {
    bodyContainer.innerHTML = "";
    const body = page();
    bodyContainer.appendChild(body);
  }

  homeBtn.addEventListener("click", () => {
    changePage(home);
  });

  menuBtn.addEventListener("click", () => {
    changePage(menu);
  });

  contactBtn.addEventListener("click", () => {
    changePage(contact);
  });

  initPage();
}

pageLoad();
