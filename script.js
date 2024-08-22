var humanScore = 0,
  compScore = 0,
  ties = 0;
var rounds = 0;

function play(selection) {
  start(selection);
  // update scores here
  updateScores();
  // until the round ends
  let winner = checkScores();
  updateState(winner);
  rounds++;
  if (rounds == 5) {
    gameEnd();
  }
}

function start(selection) {
  let cc = getComputerChoice();
  let hc = selection;

  let control = check(hc, cc);
  console.log("control: " + control);
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
    return "Player is winnning";
  } else if (humanScore == compScore) {
    return "Scores have tied";
  } else {
    return "Computer is winning";
  }
}

function check(hc, cc) {
  const control = {
    1: { 1: null, 2: 1, 3: 0 },
    2: { 1: 0, 2: null, 3: 1 },
    3: { 1: 1, 2: 0, 3: null },
  };

  return control[cc]?.[hc] ?? null;
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;
  console.log(rand);
  return rand;
}


const gameEnd = () => {
  if (humanScore > compScore) {
    updateState("Player Wins");
  } else if (humanScore == compScore) {
    updateState("Drawn");
  } else {
    updateState("Computer Wins");
  }
  disableState();
}