import "./style.css";
import { loadHome } from "./home";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";

function init() {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
  contactBtn.addEventListener("click", loadContact);

  loadHome(); // Load home tab by default
}

init();
console.log("Webpack is working!");
