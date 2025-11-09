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

let gameRound = document.querySelector(".game-round");

let playerScore = document.querySelector(".player-score");

let botScore = document.querySelector(".bot-score");

let playerChoice = document.querySelector(".player-choice");

let playerChoiceImg = document.querySelector(".player-choice-image");

let botChoice = document.querySelector(".bot-choice");

let botChoiceImg = document.querySelector(".bot-choice-image");

let roundWinner = document.querySelector(".round-winner");

let matchWinner = document.querySelector(".match-winner");

let matchWinnerImg = document.querySelector(".winner-image");

function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;
  
  function playRound(computerChoice, humanChoice) {
    if (computerChoice === "Rock" && humanChoice === "Paper" ||
      computerChoice === "Paper" && humanChoice === "Scissor" ||
      computerChoice === "Scissor" && humanChoice === "Rock") {
      botChoice.textContent = `Bot choosed ${computerChoice}!`;
      botChoiceImg.src = `/assets/images/bot-${computerChoice}-hand.svg`;
      playerChoice.textContent = `You choosed ${humanChoice}!`;
      playerChoiceImg.src = `/assets/images/user-${humanChoice}-hand.svg`;
      roundWinner.textContent = "You win this round!";
      humanScore++;
      playerScore.textContent = `${humanScore}`;
    } else if (computerChoice === "Rock" && humanChoice === "Scissor" ||
      computerChoice === "Paper" && humanChoice === "Rock" ||
      computerChoice === "Scissor" && humanChoice === "Paper") {
      botChoice.textContent = `Bot choosed ${computerChoice}!`;
      botChoiceImg.src = `/assets/images/bot-${computerChoice}-hand.svg`;
      playerChoice.textContent = `You choosed ${humanChoice}!`;
      playerChoiceImg.src = `/assets/images/user-${humanChoice}-hand.svg`;
      roundWinner.textContent = "Bot win this round!";
      computerScore++;
      botScore.textContent = `${computerScore}`;
    } else {
      botChoice.textContent = `Bot choosed ${computerChoice}!`;
      botChoiceImg.src = `/assets/images/bot-${computerChoice}-hand.svg`;
      playerChoice.textContent = `You choosed ${humanChoice}!`;
      playerChoiceImg.src = `/assets/images/user-${humanChoice}-hand.svg`;
      roundWinner.textContent = "Round is draw";
    }
  }
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("pressed");
      setTimeout(() => {
        button.classList.toggle("pressed");
      }, 300);
      /*console.log(button.innerHTML);*/
      
      /*round++;*/
      /*gameRound.textContent = `${round}`;*/
      let humanSelection = button.textContent;
      let computerSelection =
        getComputerChoice();
      
      playRound(computerSelection, humanSelection);
      
      if (computerScore === 5 || humanScore === 5) {
        if (computerScore === humanScore) {
          matchWinner.textContent = "Match draw";
        } else if (computerScore > humanScore) {
          matchWinner.textContent = "Bot won match";
          matchWinnerImg.src = "/assets/images/bot-front-face.svg";
        } else {
          matchWinner.textContent = "You won match";
          matchWinnerImg.src = "/assets/images/user-front-face.svg";
        }
        setTimeout(() => {
          gameStat.classList.toggle("hidden");
          endStat.classList.toggle("hidden");
        }, 2000);
        
      }
      nextRound();
    });
  });
  
  function nextRound() {
    setTimeout(() => {
      round++
      gameRound.textContent = round;
      playerChoice.textContent = "";
      playerChoiceImg.src = "";
      botChoice.textContent = "";
      botChoiceImg.src = "";
      roundWinner.textContent = "";
      
    }, 2000);
  }
  playAgainBtn.addEventListener("click", () => {
    playAgainBtn.classList.toggle("pressed");
    setTimeout(() => {
      playAgainBtn.classList.toggle("pressed");
    }, 300);
    setTimeout(() => {
      gameStat.classList.toggle("hidden");
      endStat.classList.toggle("hidden");
    }, 300);
    
    humanScore = 0;
    computerScore = 0;
    playerScore.textContent = humanScore;
    botScore.textContent = computerScore;
    round = 1;
    gameRound.textContent = round;
  });
}
/*console.log(playGame());*/

const startStat = document.querySelector("#start-stat");
const gameStat = document.querySelector("#game-stat");
const endStat = document.querySelector("#end-stat");
const playAgainBtn = document.querySelector(".play-again-btn");

const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
  startBtn.classList.toggle("pressed");
  setTimeout(() => {
    startBtn.classList.toggle("pressed");
  }, 300);
  setTimeout(() => {
    startStat.classList.toggle("hidden");
    gameStat.classList.toggle("hidden");
    playGame();
  }, 300);
  
});