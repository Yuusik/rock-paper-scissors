function getComputerChoice() {
    choice = Math.ceil(Math.random() * 3);
    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("error: Computer made an incorrect choice. It selected " + choice + ".");
            return "error";
    }
    return choice;
}

//console.log(getComputerChoice());

function getPlayerSelection() {
    i = 0;
    choice = "";

    do {
        choice = prompt("Make your selection. \"rock\", \"paper\" or \"scissors\"");
        choice.toLowerCase();

        switch(choice) {
            case "rock":
            case "paper":
            case "scissors":
                i = 1;
                break;
            default:
                alert("Incorrect selection! Please select from \"rock\", \"paper\" or \"scissors\"")
                break;
        }
    } while (i != 1);

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    result = "deciding";
    
    if(playerSelection === computerSelection) {
        console.log("This round is a draw! You both selected " + playerSelection + ".");
        result = 0;
    } else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors") {
        console.log("You win this round! You played " + playerSelection + " and the computer played " + computerSelection + ".");
        result = 1;
    } else {
        console.log("You lose this round! You played " + playerSelection + " and the computer played " + computerSelection + ".");
        result = 2;
    }

    return result;
}
// tests above functions
/*const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

function game() {
    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++) {
        round = playRound(getPlayerSelection(), getComputerChoice());
        if(round == 1) {
            playerScore++;
        } else if(round == 2) {
            computerScore++;
        }
    }

    if(playerScore > computerScore) {
        console.log("You win the game! Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else if(playerScore < computerScore) {
        console.log("You lose the game! Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else {
        console.log("The game is a draw! Player Score: " + playerScore + " Computer Score: " + computerScore);
    }
}

game();