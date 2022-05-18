// FUNCTION

function refreshPage() {
  var player1 = Math.floor(Math.random()*6) + 1;
  var player2 = Math.floor(Math.random()*6) + 1;

  if (player1 > player2){
    var winner = 1;
  }
  else if (player2 > player1){
    winner = 2;
  }
  else {
    winner = 0;
  }

  diceArray.push(player1);
  diceArray.push(player2);
  diceArray.push(winner);

  return diceArray
}

// EXECUTION

var diceArray = [];
refreshPage();
var cent = diceArray[2];

 if (cent===1){
   var winner = "🚩Play 1 Wins!"
 }
 else if (cent===2){
   winner = "Play 2 Wins!🚩"
 }
 else if (cent===0){
   winner = "⚖️ Draw!"
 }
 else {
   winner = "🔄Please Refresh the Page"
 }

var dice1 = "images/dice" + diceArray[0] + ".png";
var dice2 = "images/dice" + diceArray[1] + ".png";
