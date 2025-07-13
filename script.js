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

function getHumanChoice(){
    choice = prompt("Pick one: Rock Paper Scissors")
    return choice.toLowerCase();
}

function playRound(humanScore, computerScore){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if(humanChoice == "rock" && computerChoice == "paper")
    {
        console.log("You lose! Paper beats Rock.")
        computerScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log("You lose! Scissors beats Paper.")
        computerScore += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log("You lose! Rock beats Scissors.")
        computerScore += 1;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors")
    {
        console.log("You win! Rock beats Scissors.")
        humanScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "rock") 
    {
        console.log("You win! Paper beats Rock.")
        humanScore += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper")
    {
        console.log("You win! Scissors beat Paper.")
        humanScore += 1;
    }
    else if(humanChoice == computerChoice)
    {
        console.log("It's a tie.")
    }

    alert("Human Score: " + humanScore + " Computer Score: " + computerScore)
    console.log("Human Score: " + humanScore + " Computer Score: " + computerScore)
    return [humanScore, computerScore];
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++)
    {
        [humanScore,computerScore] = playRound(humanScore, computerScore);
    }
    if(humanScore > computerScore)
    {
        console.log("Congrats! You won.")
    }
    else if(humanScore < computerScore)
    {
        console.log("You lost. Better luck next time.")
    }
    else
    {
        console.log("It's a tie. Try again.")
    }
}

playGame();