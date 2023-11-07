"use strict";

// Dropdown menu
const openNav = document.querySelector(".navbar__ico");

let closed = true;
openNav.addEventListener("click", () => {
  document.querySelector(".navbar__hidden").classList.toggle("hidden");
  openNav.src = closed ? "close_menu.svg" : "open_menu.svg";
  closed = !closed;
  document.querySelector(".navbar__dropdown").classList.toggle("bg-violet");
});

// Change steps
const stepCards = document.querySelectorAll(".steps-block__cards");
const stepIcons = document.querySelectorAll(".steps-block__icon");


for (let i = 0; i < stepCards.length; i++) {
  stepCards[i].addEventListener("click", () => {
    stepCards[i].classList.toggle("bg-violet");
    stepIcons[i].classList.toggle("icon-white");
  });
}
