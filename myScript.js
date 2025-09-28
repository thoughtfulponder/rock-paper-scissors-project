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
      alert(`computer choosed ${computerChoice}! and human choosed ${humanChoice}!`);
      alert("Human win this round!");
      humanScore++;
      alert(`human scored ${humanScore}`);
    } else if (computerChoice === "Rock" && humanChoice === "Scissors" ||
      computerChoice === "Paper" && humanChoice === "Rock" ||
      computerChoice === "Scissors" && humanChoice === "Paper") {
      alert(`computer choosed ${computerChoice}! and human choosed ${humanChoice}!`);
      alert("computer win this round!");
      computerScore++;
      alert(`computer scored ${computerScore}`);
    } else {
      alert(`computer choosed ${computerChoice}!`);
      alert(`human choosed ${humanChoice}!`);
      alert("round is draw");
    }
    /*return {
      computerChoice,
      humanChoice
    }*/
  }
  
  function runGame() {
    for (let i = 1; i <= 5; i++) {
      let round = i;
      alert(`round ${round}`);
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      
      playRound(computerSelection, humanSelection);
      if ( i === 5) {
        if (computerScore === humanScore) {
          alert(" match draw")
        } else if (computerScore > humanScore) {
          alert("computer won");
        } else {
          alert("human won");
        }
      }
    }
  }
  runGame();
}
console.log(playGame());