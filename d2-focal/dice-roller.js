
let num = process.argv.slice(2);
num = Number(num);

const rollingDice = (num) => {
  let diceResults = "";
  for (let i = 0; i < num; i++) {
    let resultOfEachDice = "";
    resultOfEachDice = Math.floor((Math.random() * 6) + 1);
    diceResults += resultOfEachDice + ", ";
  }
  let lastComma = diceResults.lastIndexOf(", ");
  diceResults = diceResults.slice(0, lastComma);

  return diceResults;
};

console.log("Rolled " + num + " dice: " + rollingDice(num));