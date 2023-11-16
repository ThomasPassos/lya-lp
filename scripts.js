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
const stepCardsOg = document.querySelectorAll(".steps-block__cards");
const stepIconsOg = document.querySelectorAll(".steps-block__icon");
const stepTexts = document.querySelectorAll(".full-step");

const stepsList = [];
const iconList = [];
for (let i = 0; i < stepCardsOg.length; i++) {
  let stepsArray = [];
  let iconArray = [];
  for (let x = 0; x < stepCardsOg.length; x++) {
    if (x !== i) {
      stepsArray.push(stepCardsOg[x]);
      iconArray.push(stepIconsOg[x]);
    }
  }
  stepsList.push(stepsArray);
  iconList.push(iconArray);
}

function changeCardStyles(i) {
  stepCardsOg[i].classList.add("bg-violet");
  stepIconsOg[i].classList.add("icon-white");

  for (let x = 0; x < stepsList.length - 1; x++) {
    console.log(stepsList[i])
    console.log(stepsList[i][x])
    stepsList[i][x].classList.remove("bg-violet");
    iconList[i][x].classList.remove("icon-white");
  }
}

// TODO: Terminar o alterador de textos
function changeStepBlock(i) {
  for (let x = 0; x < stepTexts.length; x++) {
    if (x === i) {
      stepTexts[i].classList.remove("hidden");
    } else {
      stepTexts[x].classList.add("hidden");
    }
  }
}

for (let i = 0; i < stepCardsOg.length; i++) {
  stepCardsOg[i].addEventListener("click", () => {
    changeStepBlock(i);
    changeCardStyles(i);
  });
}
