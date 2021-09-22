"strict";

const bill_input = document.getElementById("bill");
const people_input = document.getElementById("people");
const tip_price = document.getElementById("tip_price");
const total_price = document.getElementById("total_price");
const btn_percent = document.querySelectorAll(".btn_percent");
const input_percent = document.querySelector(".percent_input");
const reset_btn = document.querySelector(".reset_btn");
const error = document.querySelector(".err");

let percent = 0,
  bill = 0,
  people = 0;
btn_percent.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    btn_percent.forEach((btn) => {
      btn.classList.remove("btn_click");
    });
    btn.classList.add("btn_click");

    input_percent.value = "";
    switch (index) {
      case 0:
        percent = 0.05;
        break;
      case 1:
        percent = 0.1;
        break;
      case 2:
        percent = 0.15;
        break;
      case 3:
        percent = 0.25;
        break;
      case 4:
        percent = 0.5;
        break;
    }
    updateUI();
  });
});

input_percent.addEventListener("input", () => {
  btn_percent.forEach((btn) => {
    btn.classList.remove("btn_click");
  });
  percent = input_percent.value / 100;
  updateUI();
});

bill_input.addEventListener("input", () => {
  bill = parseFloat(bill_input.value);
  updateUI();
});
people_input.addEventListener("input", () => {
  people = parseInt(people_input.value);
  updateUI();
});

function updateUI() {
  if (people_input.value == "") {
    error.style.display = "block";
  } else if (bill_input.value == "" || bill == 0) {
    tip_price.textContent = "0.00";
    total_price.textContent = "0.00";
  } else {
    error.style.display = "none";
    calc();
  }
}
function calc() {
  tip_price.textContent = (
    (parseFloat(bill) * parseFloat(percent)) /
    parseInt(people)
  ).toFixed(2);
  total_price.textContent = (
    bill / people +
    parseFloat(tip_price.textContent)
  ).toFixed(2);
}
reset_btn.addEventListener("click", () => {
  bill_input.value = "";
  people_input.value = "";
  input_percent.value = "";
  tip_price.textContent = "0.00";
  total_price.textContent = "0.00";
  percent = 0;
  error.style.display = "none";
  btn_percent.forEach((btn) => {
    btn.classList.remove("btn_click");
  });
});
