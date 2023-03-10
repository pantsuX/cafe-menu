function diceGame(rolls) {
    let score = 0;
    for (let i = 0; i < rolls.length; i++) {
      const roundScore = rolls[i][0] + rolls[i][1];
      if (rolls[i][0] === rolls[i][1]) {
        console.log("0");
        return 0;
      } else {
        console.log("round " + (i + 1) + " score: " + roundScore);
        score += roundScore;
      }
    }
    console.log( + score);
    return score;
  }

  const rolls1 = [[1, 2], [3, 4], [5, 6]]; diceGame(rolls1); 
  const rolls2 = [[1, 1], [5, 6], [6, 4]]; diceGame(rolls2); 
  const rolls3 = [[4, 5], [4, 5], [4, 5]]; diceGame(rolls3); 
  const score1 = diceGame(rolls1);
console.log("nabila score 1 : " + score1);

const score2 = diceGame(rolls2);
console.log("nabila score 2 : " + score2);

const score3 = diceGame(rolls3);
console.log("nabila score 3 : " + score3);