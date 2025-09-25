let humanScore = 0;
let computerScore = 0;

let randomNumber = Math.floor(Math.random() * 3) +1;

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
}
console.log(getComputerChoice());

function humanChoice() {
  let userChoice = prompt("enter Rock, Paper or Scissors");
  console.log(userChoice);
}
humanChoice();