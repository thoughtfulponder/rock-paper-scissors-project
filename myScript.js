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
    computerAnwser = "Scissor";
    // console.log("Scissors");
  }
  return computerAnwser;
}
/*console.log(getComputerChoice());*/



function getHumanChoice() {
  let userChoice = prompt("enter Rock, Paper or Scissor");
  let capChara = userChoice.slice(0, 1).toUpperCase();
  let lowerChara = userChoice.slice(1, userChoice.length).toLowerCase();
  userChoice = capChara + lowerChara;
  return userChoice;
}
/*console.log(getHumanChoice());*/

let displayResult = document.querySelector("#display-result");

function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;
  
  function playRound(computerChoice, humanChoice) {
    if (computerChoice === "Rock" && humanChoice === "Paper" ||
      computerChoice === "Paper" && humanChoice === "Scissor" ||
      computerChoice === "Scissor" && humanChoice === "Rock") {
      displayResult.innerHTML += `Bot choosed ${computerChoice}! <br>`;
      displayResult.innerHTML += `You choosed ${humanChoice}! <br>`;
      displayResult.innerHTML += "You win this round! <br>";
      humanScore++;
      displayResult.innerHTML += (`You scored ${humanScore}` + `<br>`);
    } else if (computerChoice === "Rock" && humanChoice === "Scissor" ||
      computerChoice === "Paper" && humanChoice === "Rock" ||
      computerChoice === "Scissor" && humanChoice === "Paper") {
      displayResult.innerHTML += `Bot choosed ${computerChoice}! <br>`;
      displayResult.innerHTML += `You choosed ${humanChoice}! <br>`;
      displayResult.innerHTML += "Bot win this round! <br>";
      computerScore++;
      displayResult.innerHTML += `Bot scored ${computerScore} <br>`;
    } else {
      displayResult.innerHTML += `Bot choosed ${computerChoice}! <br>`;
      displayResult.innerHTML += `You choosed ${humanChoice}! <br>`;
      displayResult.innerHTML += "round is draw <br>";
    }
  }
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      /*console.log(button.innerHTML);*/
      
      round++;
      displayResult.innerHTML = `round ${round}` + `<br>`;
      let humanSelection = button.innerHTML;
      let computerSelection =
        getComputerChoice();

      playRound(computerSelection, humanSelection);
      
      if (round === 5) {
        if (computerScore === humanScore) {
          displayResult.innerHTML += "match draw";
        } else if (computerScore > humanScore) {
          displayResult.innerHTML += "Bot won match";
        } else {
          displayResult.innerHTML += "You won match";
        }
        
      }
    });
  });
}
console.log(playGame());