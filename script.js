"use strict";
const saxeli = document.getElementById("saxeli");

const gvari = document.getElementById("gvari");

const submitButton = document.getElementById("battoni");

const changeText = document.getElementById("changeText");

submitButton.addEventListener("click", function () {
  if (saxeli.value === "admin" && gvari.value === "1234") {
    changeText.textContent = "Welcome";
  } else {
    changeText.textContent = "Wrong Person";
  }
});
