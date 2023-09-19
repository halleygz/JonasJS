// let js = "amaizing";
// // if(js === "amaizing") alert ("Hoooraw");
// let g =  4+8+23-0;
// console.log(typeof g);
// console.log(typeof js);
// g = 'sums';
// console.log(g);
// let malo;
// console.log(malo)
// console.log(typeof malo)
// let ageSomeone = 2020-1991;
// let ageNobody = 2020 - 2000;
// console.log(ageSomeone, ageNobody)

/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John
*/

// const heightMark = 1.69;
// const heightJohn = 1.95;
// const weightMark = 78;
// const weightJohn = 92;
// const calcMarkBMI = weightMark / heightMark ** 2;
// const calcJohnBMI = weightJohn / heightJohn ** 2;
// const isMarkHigherBMI = calcMarkBMI > calcJohnBMI;
// console.log(calcMarkBMI, calcJohnBMI, isMarkHigherBMI)
// if (isMarkHigherBMI == true) {
//     console.log(`Mark has a higher BMI than John 😎`)
// } else {
//     console.log(`John has a higher BMI than Mark`)
// }
// const Name = "Halle";
// const birthYear = 2005;
// const job = 'programmer';
// const now = 2023;
// const Halle = `Hello my name is ${Name},  I am a ${now - birthYear} years old ${job}`
// console.log(Halle)

// let user = prompt("enter user name");
// let pass = prompt("enter password");
// if (String(user) === '😎' && String(pass) === '🔑') {
//     console.log("logged in successfully");
// } else {
//     console.log("incorrect username or password entered")
// }

// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 106) / 3;
// console.log(avgDolphins, avgKoalas);
// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//   console.log("Dolphins win!");
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
//   console.log("Koalas win!");
// } else if (avgDolphins == avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
//   console.log("draw game");
// } else {
//   console.log("No winner at all");
// }
// const day = prompt('what is the day today?')
// switch(day) {
//     case 'monday':
//     case 'Monday':
//         console.log("week planning");
//         break;
//     case 'tuesday':
//     case "Tuesday":
//         console.log("learn to code");
//         break;
//     case 'wednesday':
//     case 'Wednesday':
//         console.log("visit someone");
//         break;
//     default:
//         console.log("no work at all")
// }

// if (day === "monday" || day === "Monday") {
//     console.log("week planning")
// } else if (day === 'tuesday' || day === 'Tuesday') {
//     console.log('learn to code')
// } else if (day === 'wednesday' || day === 'Wednesday') {
//     console.log('visit someone')
// } else {
//     console.log('no work at all')
// }
// const birthYear = Number(prompt("when were you born?"))
// const canDrive = 2023 - birthYear >= 18 ? 'You can drive': "You can't drive";
// console.log(canDrive)
const bill = Number(prompt("How much is the food"));
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Be generous, get ready to pay ${tip + bill}`);
