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
      alert(`You choosed ${computerChoice}!`); 
      alert(`You choosed ${humanChoice}!`);
      alert("You win this round!");
      humanScore++;
      alert(`You scored ${humanScore}`);
    } else if (computerChoice === "Rock" && humanChoice === "Scissors" ||
      computerChoice === "Paper" && humanChoice === "Rock" ||
      computerChoice === "Scissors" && humanChoice === "Paper") {
      alert(`Bot choosed ${computerChoice}!`); 
      alert(`You choosed ${humanChoice}!`);
      alert("Bot win this round!");
      computerScore++;
      alert(`Bot scored ${computerScore}`);
    } else {
      alert(`Bot choosed ${computerChoice}!`);
      alert(`You choosed ${humanChoice}!`);
      alert("round is draw");
    }
  }
  
  for (let i = 1; i <= 5; i++) {
    let round = i;
    alert(`round ${round}`);
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    if (i === 5) {
      if (computerScore === humanScore) {
        alert("match draw");
      } else if (computerScore > humanScore) {
        alert("Bot won match");
      } else {
        alert("You won match");
      }
    }
  }
}
console.log(playGame());