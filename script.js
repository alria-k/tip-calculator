"use strict";

let billValue = { val: 0 };
let tipValue = { val: 0 };
let customValue = { val: 0 };
let peopleValue = { val: 0 };
let tipAmount = 0;
let billAmount = 0;

function calculateTip(first, second) {
  let tipPerson = document.querySelector(first);
  let totalPerson = document.querySelector(second);
  let tipAmount = (billValue.val * (tipValue.val / 100)) / peopleValue.val;
  let billAmount = billValue.val / peopleValue.val + tipAmount;

  if (
    tipAmount != Infinity &&
    billAmount != Infinity &&
    !isNaN(tipAmount) &&
    !isNaN(billAmount)
  ) {
    tipPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    totalPerson.innerHTML = `$${billAmount.toFixed(2)}`;
  }
}

function resetBtn(first, second, third, fourth, fifth, sixth, seventh) {
  let reset = document.querySelector(second);
  let custom = document.querySelector(third);
  let bill = document.querySelector(fourth);
  let people = document.querySelector(fifth);
  let tipPerson = document.querySelector(sixth);
  let totalPerson = document.querySelector(seventh);
  if (peopleValue.val != 0 && billValue.val != 0) {
    reset.disabled = false;
    reset.addEventListener("click", () => {
      reset.disabled = true;
      let activeReset = document.querySelectorAll(first);
      for (let removeActive of activeReset) {
        removeActive.classList.remove("calculator__input-procent--active");
      }
      billValue.val = 0;
      customValue.val = 0;
      peopleValue.val = 0;
      custom.value = "Custom";
      bill.value = "";
      people.value = "";
      tipPerson.innerHTML = `$0.00`;
      totalPerson.innerHTML = `$0.00`;
    });
  }
}

function inputsVal(first, second) {
  let input = document.querySelector(first);
  input.addEventListener("keyup", () => {
    input.value = input.value.replace(/[^\d]/g, "");
    second.val = input.value;
    calculateTip(".tip", ".total");
    resetBtn(
      ".calculator__input-procent",
      ".calculator__reset",
      ".calculator__input-custom",
      ".calculator__input-bill",
      ".calculator__input-people",
      ".tip",
      ".total"
    );
  });
}

function tipProccent(first, second) {
  let tip = document.querySelectorAll(first);
  tip.forEach((e) => {
    e.addEventListener("click", () => {
      second.val = e.value;
      for (let active of tip) {
        active.classList.remove("calculator__input-procent--active");
      }
      e.classList.add("calculator__input-procent--active");
      calculateTip(".tip", ".total");
      resetBtn(
        ".calculator__input-procent",
        ".calculator__reset",
        ".calculator__input-custom",
        ".calculator__input-bill",
        ".calculator__input-people",
        ".tip",
        ".total"
      );
    });
  });
}

tipProccent(".calculator__input-procent", tipValue);
inputsVal(".calculator__input-custom", customValue);
inputsVal(".calculator__input-bill", billValue);
inputsVal(".calculator__input-people", peopleValue);
