"use strict";

const postBox = document.querySelector(".post-box");
const openBtn = document.querySelector(".open-btn");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", function () {
  postBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  postBox.classList.add("hidden");
  overlay.classList.add("hidden");
});
