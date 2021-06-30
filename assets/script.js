const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const txtElement = ["Welcome to my portfolio, enjoy"];
let count = 0;
let txtIndex = 0;
let currentText = "";
let word = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }
  currentText = txtElement[count];
  word = currentText.slice(0, ++txtIndex);
  document.querySelector(".efekNgetik").textContent = word;

  setTimeout(ngetik, 200);
})();
const submitForm = document.getElementById("form");
submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const btn = document.getElementsByClassName("btn-submit");
  btn.innerText = "Mengirim...";
});
