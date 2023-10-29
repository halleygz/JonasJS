'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const fixed = flights.split('+');
// console.log(type, origin, dest, time);

for (const na of flights.split('+')){
  const [type, origin, dest, time] = na.split(';')
  console.log(`${type.startsWith('_Delayed')? '🔴':''}${type.replaceAll('_', ' ')} from ${origin.toUpperCase().slice(0,3)} to ${dest.toUpperCase().slice(0,3)} (${time})`.padStart(37));
}
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 1,
    mainIndex = 1,
    address = 'Addis Ababa',
    time = '20:00',
  }) {
    console.log(
      `Order Delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
// const bop = Object.entries(openingHours)
// console.log(bop);
// for (const [key, {open, close}] of bop){
//   console.log(`${key}: opens @ ${open}, and closes @ ${close}`);

// }
// Maps and sets:
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'wrong'],
]);
// console.log(question.get('question'));
// for (const [key, value] of question){
//   if(typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const input = Number(prompt('enter your answer choice here'))
// console.log(question.get((input===question.get('correct'))));

// for (const day of Object.keys(openingHours)) console.log(day);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) console.log(`${i+1}: ${el}`);
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// for (const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`restaurant is ${open}`);
// }
// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 1,
//   time: '3:00',
//   address: "Kara Asmara Rd"
// })
// restaurant.orderDelivery({
//   time: '3:00',
// })
/* Array destructuring */
// let [main, secondary] = restaurant.categories
// console.log(main, secondary);

// [main, secondary] = [secondary, main]
// console.log(main, secondary)
// let [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);
/* object destructuring */
// let restname = 'andiamo';
// let opening = 13;
// const well = {restname: 'Catalino Italiano', opening: 5};
// ({ restname, opening } = well);
// console.log(restname, opening);
// spreading
// const newMenu = ['Taliateli', 'Bologna', 'Bistro de Motile']
// restaurant.mainMenu = [...restaurant.mainMenu, ...newMenu]
// const objCopy = {...restaurant}
// objCopy.openingHours = 'null'
// console.log(objCopy.openingHours);
// console.log(restaurant.openingHours);

// console.log(restaurant.mainMenu);
const rest1 = {
  meName: 'Capri',
  numGuest: 0,
};
const rest2 = {
  meName: 'La Piazza',
  owner: 'Giovani Rossi',
};

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
// console.log(rest1)
// console.log(rest2)
