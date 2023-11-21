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
    stepsList[i][x].classList.remove("bg-violet");
    iconList[i][x].classList.remove("icon-white");
  }
}

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

// Formulário
const formBtn = document.querySelector(".form__btn");

formBtn.addEventListener("click", () => {
  const formName = document.forms["form"]["name"].value;
  const formPhone = document.forms["form"]["cellphone"].value;
  const formEmail = document.forms["form"]["email"].value;
  const formService = document.forms["form"]["service"].value;

  if (formName && formPhone && formEmail && formService) {
    const url =
      "https://api.sheety.co/1c246bf7633079cbc31ec3828a5ae5c0/lyaContatos/página1";

    const body = {
      página1: {
        nome: formName,
        telefone: formPhone,
        email: formEmail,
        serviço: formService,
      },
    };

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
});
