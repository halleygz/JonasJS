'use strict';
const bookings = [];
function createBooking(
  flightNum = '',
  numPassangers = 1,
  price = 199 * numPassangers
) {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}
// createBooking('ADD', 3)
const flight = 'ADD878';
const me = {
  nme: 'Halle',
  passportNum: 898394839489384,
};
const checkIn = function (num, passanger) {
  num = 'ADD9090';
  passanger.nme = 'Mr.' + passanger.nme;
  if (passanger.passportNum === 898394839489384) {
    alert('CheckedkIN');
  } else {
    alert('wrong passport');
  }
};
// checkIn(flight, me)
// console.log(flight);
// console.log(me);
const greet = greeting => mname => console.log(`${greeting} ${mname}`);
greet('hey')('halleluya');
