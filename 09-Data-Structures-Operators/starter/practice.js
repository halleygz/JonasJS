'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  pNames: function (...playerNames) {
    console.log(
      `${playerNames.length} goals were scored.`,
      ...playerNames,
      `scored the goal for their teams'`
    );
  },
};
// Challange 1
// {//task 1
// const [t1, t2] = game.players;
// console.log(t1);
// console.log(t2);
// // task 2
// const [gk, ...others] = t1;
// console.log(gk);
// console.log(others);
// // task 3
// const allPlayers = [...t1, ...t2];
// console.log(allPlayers);
// // task 4
// const player1Final = [...t1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final);
// // task 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// // task 6
// game.pNames(...game.scored);
// team1 < team2 && console.log(`Team 1 is more likely to win.`);
// team2 < team1 && console.log(`Team 2 is more likely to win`);}
// Challange 2
// {//task1
// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }
// //task 2
// let sum = 0;
// const allOdds = Object.entries(game.odds);
// for (const [, el] of allOdds) {
//   sum += el;
// }
// console.log(sum / allOdds.length);
// // task3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${str}: ${odd}`);
// }
// //Bonus
// const scores = {};
// for (const player of game.scored) {
//   scores[player] ? scores[player]++ : (scores[player] = 1);
// }
// console.log(scores);}
// Challange 3
// {const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // task 1
// const events = [...new Set([...gameEvents.values()])]
// console.log(events);
// //task 2
// gameEvents.delete('64')
// console.log(gameEvents);
// //task 3
// const handler=[...gameEvents.keys()]
// let count = 0
// for(let i= handler.length-1;i>0; i--){  
//   const comp = handler[i]-handler[i-1];
//   count+=comp
// };
// console.log(`An event happened, on average, every ${Math.ceil(count/9)} minutes`);
// //task 4
// for (const [key, value] of gameEvents){
//   if(key <= 47){
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }
// }
// Challange 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function(){
  let val = document.querySelector('textarea').value.toLowerCase()
  const raws  = val.split('\n')
  console.log(raws);
  
  for (const row of raws) {
    const [first, last] = row.toLowerCase().trim().split('_')
    const ot =`${first}${last.replace(last[0], last[0].toUpperCase())}`
    console.log(ot);
  }
  // let ind = val.indexOf('_')
  // let pew = val.slice(ind+1)
  // let correct = val.slice(0,ind)+pew[0].toUpperCase()+pew.slice(1)
  // console.log(correct);
})
// console.log('plaww'.slice(1));
// const a = 'trim_the_spaces'
// const b = a.split('_');
// console.log(b[0]+b[1][0].toUpperCase()+b[1].slice(1,3)+b[2][0].toUpperCase()+b[2].slice(1,6));
