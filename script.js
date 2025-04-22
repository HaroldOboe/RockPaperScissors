const buttons = document.querySelectorAll("#rock, #paper, #scissors");
const result = document.getElementById("result");
const compScoreDisplay = document.getElementById("comp-score");
const userScoreDisplay = document.getElementById("player-score");
const winnerDisplay = document.getElementById("winner");
const resetButton = document.getElementById("reset");
let compScore = 0;
let userScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    determineWinner(button.id);
  });
});

resetButton.addEventListener("click", () => {
  resetGame();
});

const updateScores = (winner) => {
  if (winner === "user") {
    userScore++;
    userScoreDisplay.textContent = `Player: ${userScore}`;
  } else {
    compScore++;
    compScoreDisplay.textContent = `Computer: ${compScore}`;
  }
};

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const checkWin = () => {
  if (compScore >= 5 || userScore >= 5) {
    if (compScore === 5) {
      winnerDisplay.textContent = "Computer won!";
    } else if (userScore === 5) {
      winnerDisplay.textContent = "Player won!";
    }
    return true;
  }
  return false;
};

const determineWinner = (playerChoice) => {
  const compChoice = getComputerChoice();
  if (playerChoice === compChoice) {
    result.textContent = "It's a draw!";
  } else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    result.textContent = "You win!";
    updateScores("user");
  } else {
    result.textContent = "You lose.";
    updateScores("computer");
  }
  if (checkWin()) resetButton.classList.remove("hidden");
};

const resetGame = () => {
  compScore = 0;
  userScore = 0;
  userScoreDisplay.textContent = `Player: ${userScore}`;
  compScoreDisplay.textContent = `Computer: ${compScore}`;
  result.textContent = "";
  winnerDisplay.textContent = "Game to 5";
  resetButton.classList.add("hidden");
};
