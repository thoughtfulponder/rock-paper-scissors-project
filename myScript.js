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
      displayResult.textContent += (`Bot choosed ${computerChoice}! `);
      displayResult.textContent += (`You choosed ${humanChoice}! `);
      displayResult.textContent += ("You win this round! ");
      humanScore++;
      displayResult.textContent += (`You scored ${humanScore} `);
    } else if (computerChoice === "Rock" && humanChoice === "Scissor" ||
      computerChoice === "Paper" && humanChoice === "Rock" ||
      computerChoice === "Scissor" && humanChoice === "Paper") {
      displayResult.textContent += `\n` + `Bot choosed ${computerChoice}!` + `\n`;
      displayResult.textContent += `\n` + `You choosed ${humanChoice}!` + `\n`;
      displayResult.textContent += "\n" + "Bot win this round!" + "\n";
      computerScore++;
      displayResult.textContent += `\n` + `Bot scored ${computerScore}` + `\n`;
    } else {
      displayResult.textContent += `\n` + `Bot choosed ${computerChoice}!` + `\n`;
      displayResult.textContent += `\n` + `You choosed ${humanChoice}!` + `\n`;
      displayResult.textContent += "\n" +"round is draw" + "\n";
    }
  }
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      /*console.log(button.textContent);*/
      
      round++;
      displayResult.textContent = `round ${round} ` + `\n`;
      let humanSelection = button.textContent;
      let computerSelection =
        getComputerChoice();

      playRound(computerSelection, humanSelection);
      
      if (round === 5) {
        if (computerScore === humanScore) {
          displayResult.textContent += "\n" + "match draw";
        } else if (computerScore > humanScore) {
          displayResult.textContent += "\n" + "Bot won match";
        } else {
          displayResult.textContent += "\n" + "You won match";
        }
        
      }
    });
  });
}
console.log(playGame());