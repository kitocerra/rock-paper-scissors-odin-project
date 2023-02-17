// create a function called getComputerChoice that will randomly return either 'rock', 'paper', or 'scissors'

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

// function that takes two parameters and returns a string that declares the winner of a round

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "rock") {
        return("You Tie! Rock does nothing to Rock");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return("You Lose! Rock loses to Paper");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return("You Tie! Scissors does nothing to Scissors");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You Lose! Scissors loses to Rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You Win! Scissors beats Paper");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return("You Tie! Paper beats Paper");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You Lose! Paper loses to Scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You Win! Paper beats Rock");
    } else {
        return("Invalid answer. Choose either between rock, paper or scissors.");
    }
    
}

// create two variables, one that holds the value of the players choice and another that holds the computers choice 
const playerSelection = "rock";
const computerSelection = getComputerChoice();

//testing function by using console.log to see results
console.log(playRound(playerSelection, computerSelection));