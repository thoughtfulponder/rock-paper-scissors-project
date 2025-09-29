function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
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
/*console.log(getComputerChoice());*/



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
      console.log(`Bot choosed ${computerChoice}!`); 
      console.log(`You choosed ${humanChoice}!`);
      console.log("You win this round!");
      humanScore++;
      console.log(`You scored ${humanScore}`);
    } else if (computerChoice === "Rock" && humanChoice === "Scissors" ||
      computerChoice === "Paper" && humanChoice === "Rock" ||
      computerChoice === "Scissors" && humanChoice === "Paper") {
      console.log(`Bot choosed ${computerChoice}!`); 
      console.log(`You choosed ${humanChoice}!`);
      console.log("Bot win this round!");
      computerScore++;
      console.log(`Bot scored ${computerScore}`);
    } else {
      console.log(`Bot choosed ${computerChoice}!`);
      console.log(`You choosed ${humanChoice}!`);
      console.log("round is draw");
    }
  }
  
  for (let i = 1; i <= 5; i++) {
    let round = i;
    console.log(`round ${round}`);
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    if (i === 5) {
      if (computerScore === humanScore) {
        console.log("match draw");
      } else if (computerScore > humanScore) {
        console.log("Bot won match");
      } else {
        console.log("You won match");
      }
    }
  }
}
console.log(playGame());