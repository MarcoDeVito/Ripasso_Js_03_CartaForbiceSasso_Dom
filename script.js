function getRandomComputerResult() {
    const options = ["Sasso", "Carta", "Forbici"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Sasso" && computer === "Forbici") ||
      (player === "Forbici" && computer === "Carta") ||
      (player === "Carta" && computer === "Sasso")
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Il giocatore vince! ${userOption} batte ${computerResult}`;
    } else if (computerResult === userOption) {
      return `È un pareggio! Entrambi hanno scelto ${userOption}`;
    } else {
      computerScore++;
      return `Il computer vince! ${computerResult} batte ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Giocatore" : "Computer"
      } ha vinto la partita!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
  };
  
  resetGameBtn.addEventListener("click", resetGame);
  
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  rockBtn.addEventListener("click", function () {
    showResults("Sasso");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Carta");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Forbici");
  });
  