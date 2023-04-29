import "./contact.css";
function contact() {
  console.log("contact");
  const body = document.createElement("div");
  const header = document.createElement("div");
  const info = document.createElement("div");

  body.classList.add("contactBody");
  header.classList.add("header");
  info.classList.add("info");
  header.innerHTML = "Contact";
  info.innerHTML = "sengpanichpann@gmail.com";

  body.appendChild(header);
  body.appendChild(info);
  return body;
}
export default contact;
