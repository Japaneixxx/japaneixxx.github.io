function rollDice() {
  function randomNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }

  diceMin = document.getElementById("min").value;
  diceMax = document.getElementById("max").value;
  diceFace = document.getElementById("dice").value;
  document.getElementById("diceStat").style.color = "white";
  document.getElementById("diceNumber").style.color = "white";

  if (diceFace <= diceMax) {
    diceMax = diceFace;
    document.getElementById("max").value = diceMax;
  }

  number = randomNumber(diceFace);

  document.getElementById("diceNumber").innerHTML = number;
  console.log(number);

  diceStatus = "Sucesso Normal";

  if (number >= diceMax) {
    diceStatus = "Sucesso Extremo";
    document.getElementById("diceStat").style.color = "cyan";
    document.getElementById("diceNumber").style.color = "cyan";
  } else if (number <= diceMin) {
    diceStatus = "Desastre";
    document.getElementById("diceStat").style.color = "red";
    document.getElementById("diceNumber").style.color = "red";
  }
  document.getElementById("diceStat").innerHTML = diceStatus;
  console.log(diceStatus);
}
