// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const dailyTemp1 = [0, 3, 30, -12, "error", 8, 39];
const dailyTemp2 = [8, 3, 30, -52, "error", 8, 39];

//aim: calculate the ampliitude
//steps: create a function that does
// 1. loop through the array
//2. find the min and the max
// 3. subtract the min from the max
// 4. return the difference calculated
function calcTempAmpl(t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    } else if (temps[i] < min) {
      min = temps[i];
    }
  }
  return max - min;
}
const ampliitude = `The amplitude of the temprature is ${calcTempAmpl(
  dailyTemp1,
  dailyTemp2
)}`;
console.log(ampliitude);
