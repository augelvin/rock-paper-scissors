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
        computerChoice = 'scissors'
    }

    /* return computer choice */
    return computerChoice
}

/* function to prompt user to make a rock paper sccisors choice */
functio