var humanScore = 0,
  compScore = 0,
  ties = 0;
var rounds = 5;

function play() {
  for (let i = 0; i < rounds; i++) {
    start();
    alert("Player: " + humanScore + "\nComputer: " + compScore+ "\nDraws: "+ ties);
  }
  let winner = checkScores();
  alert(winner);
}

function start() {
  let cc = getComputerChoice();
  let hc = getHumanChoice();

  let control = check(hc, cc);
  console.log("control: "+control)
  if (control == 0) {
    compScore++;
  } else if (!control) {
    ties++;
  } else {
    humanScore++;
  }
}

function checkScores() {
  if (humanScore > compScore) {
    return "Player wins";
  } else if (humanScore == compScore) {
    return "Draw";
  } else {
    return "Computer Wins";
  }
}

function check(hc, cc) {
  let control = null;
  if (hc == cc) {
    control = null;
  } else if (cc == 1 && hc == 2) {
    control = 1;
  } else if (cc == 1 && hc == 3) {
    control = 0;
  } else if (cc == 2 && hc == 1) {
    control = 0;
  } else if (cc == 2 && hc == 3) {
    control = 1;
  } else if (cc == 3 && hc == 1) {
    control = 1;
  } else if (cc == 3 && hc == 2) {
    control = 0;
  }

  return control;
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3)+1;
  console.log(rand)
  return rand;
}

function getHumanChoice() {
  let choice = parseInt(prompt("1. Rock \n2. Paper \n3. Scissors"));
  if (!(choice >= 1 && choice <= 3)) {
    choice = getHumanChoice();
  }
  return choice;
}
