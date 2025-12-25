let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();

    if (choice <= 0.3) {
        return 'rock';
    } else if (choice > 0.3 && choice <= 0.6) {
        return 'paper';
    } else if (choice > 0.6 && choice <= 1) {
        return 'scissors';
    } else {
        return 'Error!';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('rock, paper, or scissors?: ');

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return 'Draw';
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        return 'You win';
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        return 'You win';
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        return 'You win';
    } else {
        computerScore++;
        return 'I win';
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }
    
    if (computerScore > humanScore) {
        return `Game ended:
    My score: ${computerScore}
    Your score: ${humanScore}
    I win!`;
    } else if (computerScore < humanScore) {
        return `Game ended:
    My score: ${computerScore}
    Your score: ${humanScore}
    You win!`;
    } else {
        return `Game ended:
    My score: ${computerScore}
    Your score: ${humanScore}
    Draw!`;
    }
}

console.log(playGame());