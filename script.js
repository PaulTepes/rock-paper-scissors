let resultFrame = document.querySelector("#result-frame");
let bo5List = document.createElement("ul");
resultFrame.appendChild(bo5List);
let whoWinScore = document.createElement("p");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice = 0;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

// we take player choice and computer choice and compare it. then return the winner
function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection === "paper" && computerSelection == "rock") {
    result = "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    result = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    result = "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    result = "You Lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    result = "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    result = "You Lose! Rock beats Scissors";
  } else {
    result = `Draw! ${playerSelection} equal ${computerSelection}`;
  }

  addGameLog(result);

  return result;
}

function addGameLog(result) {
  let gameLog = document.createElement("li");
  gameLog.textContent = result;

  if (result.includes("Win")) {
    playerScore++;
  } else if (result.includes("Lose")) {
    computerScore++;
  }

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      whoWin = "Congratulations!!! You win.";
    } else if (computerScore === 5) {
      whoWin = "Game Over";
    } else {
      whoWin = "Draw bo5!!!";
    }

    whoWinScore.textContent = whoWin;
    resultFrame.appendChild(whoWinScore);
    buttonDisabler();
    gameReset();
  }
  bo5List.appendChild(gameLog);
  scoreContainer.appendChild(playerCounter);
  scoreContainer.appendChild(computerCounter);
  playerCounter.textContent = `Your score: ${playerScore}`;
  computerCounter.textContent = `Computer score: ${computerScore}`;
}

function buttonDisabler() {
  document
    .querySelectorAll(".selection")
    .forEach((button) => (button.disabled = true));
}

function buttonEnabler() {
  document
    .querySelectorAll(".selection")
    .forEach((button) => (button.disabled = false));
}

function gameReset() {
  resultFrame.appendChild(restartButton);
  restartButton.textContent = "Restart the game";
  restartButton.addEventListener("click", clearTable);
  restartButton.scrollIntoView();
  window.scrollTo(0, document.body.scrollHeight);
}

function clearTable() {
  resultFrame.removeChild(bo5List);
  resultFrame.removeChild(whoWinScore);
  resultFrame.removeChild(restartButton);
  buttonEnabler();
  bo5List = document.createElement("ul");
  resultFrame.appendChild(bo5List);
  whoWinScore = document.createElement("p");
  scoreContainer.removeChild(playerCounter);
  scoreContainer.removeChild(computerCounter);
  playerScore = 0;
  computerScore = 0;
}
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);

paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);

scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

let playerCounter = document.createElement("p");

let computerCounter = document.createElement("p");

let scoreContainer = document.querySelector("#score-container");

let restartButton = document.createElement("button");
