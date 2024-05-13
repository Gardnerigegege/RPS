

var humanScore = 0;
var computerScore = 0;

function playGame() {
  var humanScore = 0;
  var computerScore = 0;
 for (let i = 0; i < 5; i++) {

  const randIndex = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[randIndex];
  const humanChoice = prompt("Type rock, paper or scissors").toLowerCase();

  console.log("You rolled " + humanChoice)
  console.log("Computer rolled " + computerChoice)

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("Paper beats rock, you lost");
      computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("Paper beats rock, you won");
      humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("Scissors beats paper, you lost");
      computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("Scissors beats paper, you won");
      humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("Rock beats scissors, you lost");
      computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("Rock beats scissors, you won");
      humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors") {
      console.log("It's a tie.");
    }
    else {
    console.log("Something went wrong :/");
    }
  }

  const humanSelection = humanChoice;
  const computerSelection = computerChoice;

  playRound(humanSelection, computerSelection);

  console.log("The score is " + humanScore + " to " + computerScore);
}

if (humanScore > computerScore) {
    console.log("Final score: " + humanScore + " to " + computerScore + ". You won.");
}
else if (humanScore < computerScore) {
  console.log("Final score: " + humanScore + " to " + computerScore + ". You lost.");
}
else if (humanScore == computerScore) {
  console.log("Final score: " + humanScore + " to " + computerScore + ". You tied.");
}

}; //end playGame
  

playGame();

