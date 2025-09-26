let randomNumber = Math.floor(Math.random() * 3) + 1;



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
  return computerAnwser;
}
console.log(getComputerChoice());

function getHumanChoice() {
  let userChoice = prompt("enter Rock, Paper or Scissors");
  let capChara = userChoice.slice(0, 1).toUpperCase();
  let lowerChara = userChoice.slice(1, userChoice.length).toLowerCase();
  userChoice = capChara + lowerChara;
  return userChoice;
}
/*console.log(getHumanChoice());*/



function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(computerChoice, humanChoice) {
    if (computerChoice === "Rock" && humanChoice === "Paper" ||
      computerChoice === "Paper" && humanChoice === "Scissors" ||
      computerChoice === "Scissors" && humanChoice === "Rock") {
      console.log(`computer choosed ${computerChoice}! and human choosed ${humanChoice}!`);
      console.log("Human win this round!");
      humanScore++;
      console.log(`human scored ${humanScore}`);
    } else if (computerChoice === "Rock" && humanChoice === "Scissors" ||
      computerChoice === "Paper" && humanChoice === "Rock" ||
      computerChoice === "Scissors" && humanChoice === "Paper") {
      console.log(`computer choosed ${computerChoice}! and human choosed ${humanChoice}!`);
      console.log("computer win this round!");
      computerScore++;
      console.log(`computer scored ${computerScore}`);
    } else {
      console.log("round is draw");
    }
    
  }
  
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  
  let runGame = playRound(computerSelection, humanSelection);
}
console.log(playGame());