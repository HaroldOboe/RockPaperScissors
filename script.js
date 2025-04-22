const buttons = document.querySelectorAll("#rock, #paper, #scissors");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkWin(button.id);
  });
});

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const checkWin = (playerChoice) => {
  const compChoice = getComputerChoice();
  if (playerChoice === compChoice) {
    result.textContent = "It's a draw!";
  } else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    result.textContent = "You win!";
  } else {
    result.textContent = "You lose.";
  }
};
