// function to get random computer choice
function getComputerChoice() {
    // get random number 0, 1, or 2
    number = Math.floor(Math.random() * 3);

    // make constant for computer choice
    let computerChoice;

    /* if random number is 0, choice is rock. 
       if random number is 1, choice is paper. 
       if random number si 2, choice is scissors */
    if (number == 0) {
        computerChoice = 'rock';
    }
    else if (number == 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }

    // return computer choice
    return computerChoice;
}

// function to play a round
function playRound (playerChoice) {
    
    let computerChoice = getComputerChoice();

    // win conditions
    win = (playerChoice == 'rock' && computerChoice == 'scissors' || 
        playerChoice == 'paper' && computerChoice == 'rock' || 
        playerChoice == 'scissors' && computerChoice == 'paper');

    // lose conditions
    lose = (playerChoice == 'rock' && computerChoice == 'paper' || 
        playerChoice == 'paper' && computerChoice == 'scissors' || 
        playerChoice == 'scissors' && computerChoice == 'rock');

    // grab the status div
    let status = document.querySelector('.status');
    
    // output for each conditions
    if (playerChoice == computerChoice) {
        status.textContent = 'It\'s a tie. ' + playerChoice[0].toUpperCase() + playerChoice.substring(1) + ' ties with ' + computerChoice + '.';
    } else if (win) {
        status.textContent = 'You win. ' + playerChoice[0].toUpperCase() + playerChoice.substring(1) + ' beats ' + computerChoice + '.';
        playerPoints += 1;
    } else if (lose) {
        status.textContent = 'You lose. ' + computerChoice[0].toUpperCase() + computerChoice.substring(1) + ' beats ' + playerChoice + '.';
        computerPoints += 1;
    }

    if (playerPoints == 5) {
        alert('You Won!');
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints == 5) {
        alert('You Lost!');
        playerPoints = 0;
        computerPoints = 0;
    }

    // input text content to points div
    points.textContent = 'Player: ' + playerPoints + ' Computer: ' + computerPoints;
}

// set initial points
let playerPoints = 0;
let computerPoints = 0;

// grab all buttons
const buttons = document.querySelectorAll('button')

// iterate through each button
buttons.forEach((button) => {
    // ada a 'click' listener for each button to play a round
    button.addEventListener('click', () => {
        playRound(button.id)
    });
});

// grab points div
const points = document.querySelector('.points');

