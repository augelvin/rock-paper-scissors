/* function to get random computer choice */
function getComputerChoice() {
    /* get random number 0, 1, or 2 */
    number = Math.floor(Math.random() * 3);

    /* make constant for computer choice */
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

    /* return computer choice */
    return computerChoice;
}

/* function to prompt user input */
function getPlayerChoice() {
    /* create a variable for valid answer */
    let answer = false;

    /* create a variable for player's choice */
    let playerChoice;
    
    /* create a loop until user input a valid answer */
    while (answer == false) {

        /* prompt player to choose */
        playerChoice = window.prompt('Choose rock, paper, or scissors');

        /* convert input to all lower case */
        playerChoice = playerChoice.toLowerCase()

        /* if input is vaild change ansew to true */
        if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors' ) {
            answer = true;
        }
    }

    /* return player choice */
    return playerChoice;
}

/* function to play a round */
function playRound(playerChoice, computerChoice) {

    /* win conditions */
    win = (playerChoice == 'rock' && computerChoice == 'scissors' || 
        playerChoice == 'paper' && computerChoice == 'rock' || 
        playerChoice == 'scissors' && computerChoice == 'paper');

    /* lose conditions */
    lose = (playerChoice == 'rock' && computerChoice == 'paper' || 
        playerChoice == 'paper' && computerChoice == 'scissors' || 
        playerChoice == 'scissors' && computerChoice == 'rock');

    /* output for each conditions */ 
    if (playerChoice == computerChoice) {
        return 'It\'s a tie. ' + playerChoice[0].toUpperCase() + playerChoice.substring(1) + ' ties with ' + computerChoice + '.';
    }
    else if (win) {
        return 'You win. ' + playerChoice[0].toUpperCase() + playerChoice.substring(1) + ' beats ' + computerChoice + '.';
    }
    else if (lose) {
        return 'You lose. ' + computerChoice[0].toUpperCase() + computerChoice.substring(1) + ' beats ' + playerChoice + '.';
    }
}

/* function to play a game of 5 rounds */
function game() {

    /* set initial points */
    let playerPoints = 0;
    let computerPoints = 0;

    /* initiate playerChoice and computerChoice variables */
    let playerChoice;
    let computerChoice;

    /* loop for 5 rounds */
    for (let i = 0; i < 5; i++) {

        /* generate computer choice */
        computerChoice = getComputerChoice();

        /* prompt user choice */
        playerChoice = getPlayerChoice();

        /* play a round */
        round = playRound(playerChoice, computerChoice)

        /* update points after each round */
        if (round.includes('win')) {
            playerPoints += 1;
            console.log('Player = ' + playerPoints + ', Computer = ' + computerPoints)
        }
        else if (round.includes('lose')) {
            computerPoints += 1;
            console.log('Player = ' + playerPoints + ', Computer = ' + computerPoints)
        }
    }

    if (playerPoints == computerPoints) {
        return 'It\'s a tie!'
    }
    else if (playerPoints > computerPoints) {
        return 'You win!'
    }
    else {
        return 'You lose!'
    }
}