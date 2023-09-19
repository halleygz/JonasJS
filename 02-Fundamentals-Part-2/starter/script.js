"use strict";
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// function checkWinner(avgDolphins, avgKoalas) {
//   avgDolphins = calcAverage(85, 54, 41);
//   avgKoalas = calcAverage(23, 34, 27);
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log('no winner at all')
//   }
// }
// checkWinner();
/* 
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) 
GOOD LUCK 
*/
// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(total);
// const obj = {
//   shal: "mal",
// };
// const input = prompt('choose something');

// obj[input] ? console.log(obj[input]): console.log(`${input} is not in the object`)
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: 'teacher',
//   hasDL: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     this.summury = `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} and ${this.hasDL ? 'has a drivers licence': "don't have a drivers licence"}`;
//     return this.summury;
//   },
// };
// jonas.calcAge();
// jonas.getSummary();
// console.log(jonas.age);
// console.log(jonas.summury);
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 
*/
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.8,
//   clacBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 85,
//   height: 1.68,
//   clacBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// mark.clacBMI();
// john.clacBMI();
// console.log(
//   mark.BMI > john.BMI
//     ? `Mark's BMI(${mark.BMI}) is higher than John's(${john.BMI})!`
//     : `John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!`
// );
// const jonas = ["protugal", 2037 - 1991, "jacon", true];
// const reverted = []
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
//   reverted.unshift(jonas[i])
// }
// console.log(reverted)
// Steve's tip again
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// const calcTip = function (bills) {
//   for (let i = 0; i < bills.length; i++) {
//     bills[i] >= 50 && bills[i] <= 300
//       ? tips.push(bills[i] * 0.15)
//       : tips.push(bills[i] * 0.2);
//     total.push(bills[i] + tips[i]);
//   }
// };
// calcTip(bills);
// console.log(bills);
// console.log(tips);
// console.log(total);
// const nums = [
//   545, 5, 5, 655, 5545, 54, 545, 5, 54, 54, 5, 6, 5, 4, 56, 4, 56, 4, 5,
// ];
// const calcAverage = function (numbers) {
//   let holder = 0;
//   for (let i = 1; i < numbers.length; i++) {
//     holder += numbers[i];
//   }
//   return holder / numbers.length;
// };
// console.log(calcAverage(total));

const dailyTemp = [0, 3, 30, -12, "error", 8, 39];
//aim: calculate the ampliitude
//steps: create a function that does
// 1. loop through the array
//2. find the min and the max
// 3. subtract the min from the max
// 4. return the difference calculated
function calcTempAmpl(temps) {
  let max = [0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
}
