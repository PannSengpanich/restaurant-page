function menu() {
  console.log("menu");

  const body = document.createElement("div");
  const menuHead = document.createElement("div");
  const menus = document.createElement("div");
  const food = document.createElement("div");
  const drinks = document.createElement("div");
  const desserts = document.createElement("div");
  const foodList = document.createElement("div");
  const drinksList = document.createElement("div");
  const dessertsList = document.createElement("div");

  body.classList("body");
  menuHead.classList.add("menuHead");
  menus.classList.add("menus");
  food.classList.add("food");
  drinks.classList.add("drinks");
  desserts.classList.add("desserts");

  menuHead.innerHTML = "Menus";

  menus.appendChild(food);
  menus.appendChild(foodList);
  menus.appendChild(drinks);
  menus.appendChild(drinksList);
  menus.appendChild(desserts);
  menus.appendChild(dessertsList);
  body.appendChild(menuHead);
  body.appendChild(menus);
  return body;
}
export default menu;
