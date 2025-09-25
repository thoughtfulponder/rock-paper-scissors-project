let humanScore = 0;
let computerScore = 0;

let randomNumber = Math.floor(Math.random() * 3) +1;

let userChoice = prompt("enter Rock, Paper or Scissors");

function getComputerChoice() {
  let computerAnwser;
  if (randomNumber === 1) {
    computerAnwser = "Rock";
    // console.log("Rock");
  } else if (randomNumber === 2) {
    computerAnwser = "Paper";
    // console.log("Paper");
  } else {
    computerAnwser = "Scissors";
    // console.log("Scissors");
  }
  return `computer choosed ${computerAnwser}!`;
}
console.log(getComputerChoice());

function getHumanChoice() {
  
  let capChara = userChoice.slice(0, 1).toUpperCase();
  let lowerChara = userChoice.slice(1, userChoice.length).toLowerCase();
  userChoice = capChara + lowerChara;
  return `human choosed ${userChoice}!`;
}
console.log(getHumanChoice());

function playRound(computerChoice, humanChoice) {
  if (computerChoice === "Rock" && humanChoice === "Paper" 
    || computerChoice === "Paper" && humanChoice === "Scissors" 
    || computerChoice === "Scissors" && humanChoice === "Rock") {
    console.log("Human win this round!");
    humanScore++;
    console.log(`human scored ${humanScore}`);
  } else if (computerChoice === "Rock" && humanChoice === "Scissors" 
    || computerChoice === "Paper" && humanChoice === "Rock" 
    || computerChoice === "Scissors" && humanChoice === "Paper") {
    console.log("computer win this round!");
    computerScore++;
    console.log(`computer scored ${computerScore}`);
  } else {
    console.log("draw");
  }
 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(playRound(computerSelection, humanSelection));