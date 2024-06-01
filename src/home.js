// src/home.js
import koreanFoodImage from "./images/koreanfood.jpg";

export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <img src="${koreanFoodImage}" alt="Restaurant Image">
    <p>Enjoy the finest dining experience!</p>
  `;
}
