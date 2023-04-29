import "./menu.css";
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

  body.classList.add("menuBody");
  menuHead.classList.add("menuHead");
  menus.classList.add("menus");
  food.classList.add("food");
  drinks.classList.add("drinks");
  desserts.classList.add("desserts");
  foodList.classList.add("foodList");
  drinksList.classList.add("drinksList");
  dessertsList.classList.add("dessertsList");

  menuHead.innerHTML = "Menus";
  food.innerHTML = "Food";
  drinks.innerHTML = "Drinks";
  desserts.innerHTML = "Desserts";

  let foodItems = [
    { name: "Fried rice", price: "$2" },
    { name: "Omelette", price: "$1" },
    { name: "Porridge", price: "$1" },
    { name: "Hamburger", price: "$1.5" },
  ];

  foodList.append(
    ...foodItems.map((item) => {
      const foodItem = document.createElement("div");
      foodItem.classList.add("foodItem");
      const name = document.createElement("p");
      const price = document.createElement("p");
      name.innerHTML = item.name;
      price.innerHTML = item.price;
      foodItem.append(name);
      foodItem.append(price);
      return foodItem;
    }),
  );
  let drinksItems = [
    { name: "Water", price: "$0.5" },
    { name: "Apple Juice", price: "$1" },
    { name: "Orange Juice", price: "$1" },
    { name: "Chrysanthemum", price: "$0.75" },
  ];

  drinksList.append(
    ...drinksItems.map((item) => {
      const drinksItem = document.createElement("div");
      drinksItem.classList.add("drinksItem");
      const name = document.createElement("p");
      const price = document.createElement("p");
      name.innerHTML = item.name;
      price.innerHTML = item.price;
      drinksItem.append(name);
      drinksItem.append(price);
      return drinksItem;
    }),
  );
  let dessertsItems = [
    { name: "Ice cream", price: "$0.5" },
    { name: "Bingsu", price: "$1" },
    { name: "Grass jelly", price: "$0.75" },
  ];

  dessertsList.append(
    ...dessertsItems.map((item) => {
      const dessertsItem = document.createElement("div");
      dessertsItem.classList.add("dessertsItem");
      const name = document.createElement("p");
      const price = document.createElement("p");
      name.innerHTML = item.name;
      price.innerHTML = item.price;
      dessertsItem.append(name);
      dessertsItem.append(price);
      return dessertsItem;
    }),
  );

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
