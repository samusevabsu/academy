let scoreFirst = 0;
let scoreSecond = 0;
let count = 0;

// Get Random Number
function getRandomInt () {
  let rand = 1 - 0.5 + Math.random() * (6 - 1 + 1);
  count = Math.round(rand);
  return count;
}

// Roll the dice
for (let i = 1; i <= 3; i++) {
  getRandomInt();
  scoreFirst += count;
  getRandomInt();
  scoreSecond += count;
}

// Name the winner
let message = (scoreFirst > scoreSecond) ? 'My Congratulations, Player 1' :
  (scoreSecond > scoreFirst) ? 'My Congratulations, Player 2' :
  'This is draw!';

console.log(message);
console.log(scoreFirst, scoreSecond);

