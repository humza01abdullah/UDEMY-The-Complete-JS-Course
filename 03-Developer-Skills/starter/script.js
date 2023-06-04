// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//LECTURE 62: Coding Challenge #1
console.log("%c \nLECTURE 62: Coding Challenge #1", "color: #00F055");

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = `... `;

  for (let i = 0; i < arr.length; i++) {
    forecast = forecast + `${arr[i]}°C in ${i + 1} days ... `;
  }

  return forecast.slice(0, -1);
};

console.log(printForecast(data1));
console.log(printForecast(data2));
