let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameOver = false;

function getComputerChoice(){
    let x = Math.random();
    if(x>=0 && x<=0.33)
    {
        return "rock";
    }
    else if(x>0.33 && x<0.66)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function playRound(humanChoice){
    if(gameOver) return;

    let computerChoice = getComputerChoice();
    let resultText = "";

    if((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock"))
    {
        resultText = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper"))
    {
        resultText = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
    }
    else if(humanChoice == computerChoice)
    {
        resultText = "It's a tie.";
    }

    roundsPlayed++;

    document.getElementById("roundResult").textContent = resultText;
    document.getElementById("score").textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    document.getElementById("roundCount").textContent = `Played ${roundsPlayed} rounds out of 5.`;

    if(roundsPlayed >= 5){
        gameOver = true;
        let finalMessage = "";
        let refresh = "Refresh the page to play again."
        if(humanScore > computerScore){
            finalMessage = 'You won the fucking game!';
        }
        else if(humanScore < computerScore){
            finalMessage = 'You lost the fucking game!';
        }
        else{
            finalMessage = "It's a tie. Try again.";
        }
        document.getElementById("finalResult").innerHTML = finalMessage + "<br>" + refresh;
    }
}

document.getElementById("rock").addEventListener("click", ()=> playRound("rock"));
document.getElementById("paper").addEventListener("click", ()=> playRound("paper"));
document.getElementById("scissors").addEventListener("click", ()=> playRound("scissors"));