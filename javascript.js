function getComputerChoice() {
    const number = Math.random();
    if (number <= 0.33) {
        return "rock";
    } else if (number <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = window.prompt("rock, paper, or scissors");
    choice = choice.toLowerCase(); 
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = window.prompt("Invalid choice. Please choose rock, paper, or scissors:");
        choice = choice.toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function playgame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        console.log(playRound());
        console.log(`Scores: Human ${humanScore} - Computer ${computerScore}`);
        console.log("---------------------------");
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, the computer won the game.");
    } else {
        console.log("It's a tie overall!");
    }
}

playgame();