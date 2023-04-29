import "./home.css";

function home() {
  console.log("home");
  const body = document.createElement("div");
  const intro = document.createElement("div");
  const credit = document.createElement("div");

  body.classList.add("homeBody");
  intro.classList.add("intro");
  credit.classList.add("credit");

  intro.innerHTML = `" The poor eat to end their hunger, but when you have more than enough to eat, your hunger doesn't end. "`;
  credit.innerHTML = "Hunger (2023)";

  body.appendChild(intro);
  body.appendChild(credit);

  return body;
}
export default home;
