// return computer selection
function getComputerSelection() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

// compare player and computer choices and return who won
function playRound (playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")
        ) {
            return "Computer won!";
        }
    else if (playerSelection === computerSelection) {
            return "It is a tie";
    } else {
            return "Player won";
    }
}

// set variable for computer and player


for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    let computerSelection = getComputerSelection();
    // console.log(`Computer: ${computerSelection} \nYou: ${playerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
}
