const container = document.querySelector(".container");
const playbtn = document.createElement("button");
const scoreDiv = document.createElement("div");
const playArea = document.createElement("div");
const playerHead = document.createElement("h2");
const compHead = document.createElement("h2");
const tieHead = document.createElement("h2");
const currentState = document.createElement("p");

playbtn.textContent = "Play";
//playbtn.style["margin-bottom"] = "10px";
scoreDiv.style["background-color"] = "pink";
scoreDiv.style["border-style"] = "solid";
scoreDiv.style["border-color"] = "black";
container.style["text-align"] = "center";

playerHead.textContent = "Player Score: " + humanScore;
compHead.textContent = "Computer Score: " + compScore;
tieHead.textContent = "Draws: " + ties;

playArea.innerHTML =
  "<button id='rockBtn'>Rock</button><button id='paperBtn'>Paper</button><button id='sciBtn'>Scissor</button>";
playArea.style["display"] = "none";

container.appendChild(scoreDiv);
scoreDiv.appendChild(playbtn);
scoreDiv.appendChild(playArea);
playArea.appendChild(playerHead);
playArea.appendChild(compHead);
playArea.appendChild(tieHead);
playArea.appendChild(currentState);

playbtn.addEventListener("click", (e) => {
  e.target.style.display = "none";
  playArea.style["display"] = "block";
});

const btnPress = (selection) => {
  play(selection);
};

const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const sci = document.querySelector("#sciBtn");

rock.addEventListener("click", () => {
  btnPress(1);
});

paper.addEventListener("click", () => {
  btnPress(2);
});

sci.addEventListener("click", () => {
  btnPress(3);
});

const updateScores = () => {
  playerHead.textContent = "Player Score: " + humanScore;
  compHead.textContent = "Computer Score: " + compScore;
  tieHead.textContent = "Draws: " + ties;
};

const updateState = (winner) => {
  currentState.textContent = winner;
};

const disableState = () => {
  const allBtn = document.querySelectorAll("button");
  allBtn.forEach((button) => {
    button.disabled = true;
    setTimeout(() => {
      updateState("reloading....");
    }, 1000);
    setTimeout(() => {
        location.reload();
      }, 2000);
  });
};
