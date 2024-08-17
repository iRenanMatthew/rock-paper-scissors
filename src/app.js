let computerScore, humanScore, computerMove;

computerScore = 0;
userScore = 0;

function getComputerChoice(move) {
  let computerResult = "";

  if (move <= 1 / 3) {
    computerResult = "rock";
  } else if (move <= 1 / 3 || move <= 2 / 3) {
    computerResult = "paper";
  } else if (move >= 2 / 3) {
    computerResult = "scissors";
  }
  return computerResult;
}

function getHumansChoice(userMove) {
  if (userMove === "rock") {
    if (userMove === "rock" && computerMove === "rock") {
      result = "Tie";
    } else if (userMove === "rock" && computerMove === "paper") {
      result = "Lose";
    } else if (userMove === "rock" && computerMove === "scissors") {
      result = "Win";
    }
  } else if (userMove === "paper") {
    if (userMove === "paper" && computerMove === "rock") {
      result = "Win";
    } else if (userMove === "paper" && computerMove === "paper") {
      result = "Tie";
    } else if (userMove === "paper" && computerMove === "scissors") {
      result = "Lose";
    }
  } else if (userMove === "scissors") {
    if (userMove === "scissors" && computerMove === "rock") {
      result = "Lose";
    } else if (userMove === "scissors" && computerMove === "paper") {
      result = "Win";
    } else if (userMove === "scissors" && computerMove === "scissors") {
      result = "Tie";
    }
  }

  return result;
}

function playGame(choice) {
  let resultDesc;
  computerMove = getComputerChoice(Math.random());
  getHumansChoice(choice);

  if (getHumansChoice(choice) === "Win") {
    userScore += 1;
    resultDesc = "User win";
  } else if (getHumansChoice(choice) === "Lose") {
    computerScore += 1;
    resultDesc = "User Lose";
  } else {
    computerScore += 0;
    userScore += 0;
    resultDesc = "Tie";
  }

  // Computer and User Move
  document.querySelector(".userMove").textContent = choice;
  document.querySelector(".computerMove").textContent = computerMove;

  //Result
  document.querySelector(".resultDesc").textContent = resultDesc;

  // Computer and User Scores
  document.querySelector(".userResult").textContent = userScore;
  document.querySelector(".computerResult").textContent = computerScore;

  if (userScore === 5 || computerScore === 5) {
    if (userScore === 5) {
      alert("You win!");
    } else {
      alert("You Lose");
    }
    return resetScore();
  }
}

function resetScore() {
  computerScore = 0;
  userScore = 0;

  document.querySelector(".userMove").textContent = "";
  document.querySelector(".computerMove").textContent = "";

  //Result
  document.querySelector(".resultDesc").textContent = "";

  // Computer and User Scores
  document.querySelector(".userResult").textContent = 0;
  document.querySelector(".computerResult").textContent = 0;
}
