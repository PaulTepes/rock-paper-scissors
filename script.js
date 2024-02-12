// computer generate random choice

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

//player select his choice via prompt with case-insensitive
function getPlayerSelection() {
  let playerChoice;
  do {
    playerChoice = prompt(`Choose weapon`, "rock, paper, scissors")
      .toLowerCase()
      .trim();
  } while (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  );
  return playerChoice;
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
  return result;
}

// play 5 times in a row and check who win bo5

function playGame() {
  let winCounter = 0;
  let whoWin = "Draw";
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Win")) {
      winCounter++;
    } else if (result.includes("Lose")) {
      winCounter--;
    }
    // console.log(winCounter) win counter checker;
  }
  if (winCounter > 0) {
    whoWin = "Congratulations!!! You win bo5.";
  } else if (winCounter < 0) {
    whoWin = "You lose bo5!!!";
  } else {
    whoWin = "Draw bo5!!!";
  }
  return whoWin;
}

console.log(playGame());
