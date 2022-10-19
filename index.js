
// access html elements
const resultText = document.querySelector('.result');
const selection = document.querySelector('.selections');
const playerScoreText = document.querySelector('.player');
const computerScoreText = document.querySelector('.computer')
const buttonsContainer = document.querySelector('.buttons-container');
const buttons = document.querySelectorAll('button')

// player and computer scores
let playerScore = 0;
let computerScore = 0;

// return computer selection
function getComputerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

// compare player and computer choices and add a score to the winner
function playRound (playerSelection, computerSelection) {
    if (playerSelection && computerSelection) {
        if (
            (playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')
            ) {
                computerScore += 1;
                resultText.innerText = 'Computer won!';
                if (computerScore === 5) {
                    resultText.innerText = 'Computer won the round!\nCLick Reset Button to reset the round';
                }
            }
        else if (playerSelection === computerSelection) {
                resultText.innerText =  'It is a tie!';
        } else {
                playerScore += 1;
                resultText.innerText =  'Player won!';
                if (playerScore === 5) {
                    resultText.innerText = 'Player won the round!\nCLick Reset Button to reset the round';
                }

        }
    }
    playerScoreText.innerText = `Player: ${playerScore}`;
    computerScoreText.innerText = `Computer: ${computerScore}`
}

// function to disable all buttons when someone wins the round
// will add reset button to reset the round and reset textcontent of divs
function checkIfRoundFinished(){
    if (playerScore === 5 || computerScore === 5) {
        for (const button of buttons) {
            button.disabled = true;
        };
        let resetButton = document.createElement('button');
        resetButton.innerText = 'Reset';
        console.log(buttonsContainer);
        buttonsContainer.append(resetButton);
        resetButton.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            for (const button of buttons) {
                button.disabled = false;
            };
            resultText.innerText = '';
            selection.innerText = '';
            playerScoreText.innerText = `Player: ${playerScore}`;
            computerScoreText.innerText = `Computer: ${computerScore}`
            resetButton.remove();
        })
    }
}

// add event listeners and play the game
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.innerText.toLowerCase();
        let computerSelection = getComputerSelection();
        selection.innerText = `You selected ${playerSelection}\nComputer selected ${computerSelection}`
        playRound(playerSelection, computerSelection);
        checkIfRoundFinished();
    })
})
