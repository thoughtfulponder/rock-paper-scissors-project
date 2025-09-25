let humanScore = 0;
let computerScore = 0;

let randomNumber = Math.floor(Math.random() * 3) +1;

let userChoice = prompt("enter Rock, Paper or Scissors");

function getComputerChoice() {
  let computerAnwser;
  if (randomNumber === 1) {
    computerAnwser = "Rock";
    console.log("Rock");
  } else if (randomNumber === 2) {
    computerAnwser = "Paper";
    console.log("Paper");
  } else {
    computerAnwser = "Scissors";
    console.log("Scissors");
  }
  return `computer choosed ${computerAnwser}!`;
}
console.log(getComputerChoice());

function humanChoice() {
  
  let capChara = userChoice.slice(0, 1).toUpperCase();
  let lowerChara = userChoice.slice(1, userChoice.length).toLowerCase();
  userChoice = capChara + lowerChara;
  return `human choosed ${userChoice}!`;
}
console.log(humanChoice());

function playRound(computerChoice, getHumanChoice) {
  if (getComputerChoice === "Rock" && humanChoice === "Paper" || getComputerChoice === "Paper" && humanChoice === "Scissors" || getComputerChoice === "Scissors" && humanChoice === "Rock") {
    console.log("Human win this round!");
    humanScore++;
    console.log(`human scored ${humanScore}`);
  } else if (getComputerChoice === "Rock" && humanChoice === "Scissors" || getComputerChoice === "Paper" && humanChoice === "Rock" || getComputerChoice === "Scissors" && humanChoice === "Paper") {
    console.log("computer win this round!");
    computerScore++;
    console.log(`computer scored ${computerScore}`);
  } else {
    console.log("draw");
  }
}

const humanSelection = humanChoice();
const computerSelection = getComputerChoice();
playRound(computerSelection, humanSelection);