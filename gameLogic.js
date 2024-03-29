//console.log(game());
const resultsField = document.querySelector("#results-field");
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    resultsField.textContent = turn("Rock", getComputerChoice())

    if ((playerScore == 5) || (computerScore == 5)) {
        resultsField.textContent = determineWinner(playerScore, computerScore);
        document.querySelector("#rock").style.pointerEvents = "none";
        document.querySelector("#paper").style.pointerEvents = "none";
        document.querySelector("#scissors").style.pointerEvents = "none";
        resultsField.addEventListener("click", () => location.reload());
    }
});

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    resultsField.textContent = turn("Paper", getComputerChoice())

    if ((playerScore == 5) || (computerScore == 5)) {
        resultsField.textContent = determineWinner(playerScore, computerScore);
        document.querySelector("#rock").style.pointerEvents = "none";
        document.querySelector("#paper").style.pointerEvents = "none";
        document.querySelector("#scissors").style.pointerEvents = "none";
        resultsField.addEventListener("click", () => location.reload());
    }
});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    resultsField.textContent = turn("Scissors", getComputerChoice())

    if ((playerScore == 5) || (computerScore == 5)) {
        resultsField.textContent = determineWinner(playerScore, computerScore);
        document.querySelector("#rock").style.pointerEvents = "none";
        document.querySelector("#paper").style.pointerEvents = "none";
        document.querySelector("#scissors").style.pointerEvents = "none";
        resultsField.addEventListener("click", () => location.reload());
    }
});

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

        playerScore++;
        setPlayerScore();
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection == "Paper" && computerSelection == "Scissors") ||
               (playerSelection == "Rock" && computerSelection == "Paper") ||
               (playerSelection == "Scissors" && computerSelection == "Rock")) {

        computerScore++;
        setComputerScore();
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == computerSelection) {
        return "Draw!";
    }
}

function setPlayerScore() {
    const scoreList = document.querySelectorAll(".checks-player");

    for (let i = 0; i < scoreList.length; i++) {
        if (window.getComputedStyle(scoreList[i]).visibility === "hidden") {
            scoreList[i].style.visibility = "visible";
            break;
        }
    }
}

function setComputerScore() {
    const scoreList = document.querySelectorAll(".checks-computer");

    for (let i = 0; i < scoreList.length; i++) {
        if (window.getComputedStyle(scoreList[i]).visibility === "hidden") {
            scoreList[i].style.visibility = "visible";
            break;
        }
    }
}

/*function game() {
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
}*/

function determineWinner(playerWin, computerWin) {
    if (playerWin > computerWin) {
        return "The winner of the game is you!";
    } else if (playerWin < computerWin) {
        return "You lost the game!";
    } else if ((playerWin == computerWin) && (playerWin != 0) && (computerWin != 0)) {
        return "The game is a draw!";
    }
}