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
