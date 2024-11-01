"use strict";

document.querySelector(".submit").addEventListener("click", function () {
  const value = document.querySelector(".input").value;
  const result = base10(value);
});

// //// FROM DECIMAL TO BINARY
function base10(value) {
  let remainders = [];
  //   console.log(typeof remainders);

  let number = value;
  const display = document.getElementById("display");
  while (number >= 1) {
    let quotient = Math.floor(number / 2);
    let remainder = number % 2;

    console.log(` ${quotient} R ${remainder}`);
    display.textContent += ` ${quotient} R ${remainder}.`;
    remainders.push(`${remainder}`);
    if (quotient === 0 && remainder === 1) {
      break;
    }
    number = quotient;
  }

  let remainderString = remainders.reverse().join("");
  console.log(remainderString);
  display.textContent = remainderString;
}
document.querySelector(".submit2").addEventListener("click", function () {
  const value = document.querySelector(".input2").value;
  const result = base2(value);
});
////////// FROM BINARY TO DECIMAL
function base2(value2) {
  let baseTwo = value2;
  let numberStr = baseTwo.toString();

  let reversedStr = numberStr.split("").reverse().join("");

  let baseContainer = [];

  for (let i = 0; i < reversedStr.length; i++) {
    let digit = parseInt(reversedStr[i]);
    let Multiply = digit * 2;
    let result;
    if (i === 0 && digit === 0) {
      result = 0;
    } else {
      //0^0
      result = Math.pow(Multiply, i); //  let  result = Math.pow(Multiply, i);
    }
    baseContainer.push(result);
  }
  let sum = baseContainer.reduce((acc, current) => acc + current, 0);
  display.textContent = sum;
  console.log(baseContainer);
  console.log(sum);
}
