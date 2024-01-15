console.log(game());

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);

    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "Error";
    }
}

function turn(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection == "Paper" && computerSelection == "Scissors") ||
               (playerSelection == "Rock" && computerSelection == "Paper") ||
               (playerSelection == "Scissors" && computerSelection == "Rock")) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == computerSelection) {
        return "Draw!";
    }
}

function game() {
    let i = 0;
    let playerWin = 0;
    let computerWin = 0;
    while (i < 5) {
        const playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors':");
        const computerSelection = getComputerChoice();
        let result = turn(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerWin++;
        } else if (result.includes("lose")) {
            computerWin++;
        }
        i++;
    }
    return determineWinner(playerWin, computerWin);
}

function determineWinner(playerWin, computerWin) {
    if (playerWin > computerWin) {
        return "The winner of the game is you!";
    } else if (playerWin < computerWin) {
        return "The winner of the game is the computer!";
    } else if (playerWin == computerWin) {
        return "The game is a draw!";
    }
}