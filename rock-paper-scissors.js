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

/* finction to prompt user input */
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