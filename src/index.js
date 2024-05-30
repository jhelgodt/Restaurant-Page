import ".style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from ".contact";

function init() {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  menuBtn.addEventListener("click", () => {
    clearContent();
    loadHomeN();
  });

  contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
  });

  loadHome(); // Load home page initially
}

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}
