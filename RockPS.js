const list1 = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return list1[Math.floor(Math.random()*list1.length)];
};

let playerScore = 0;
let comScore = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return ("Same");
        
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "rock" || playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore = playerScore + 1;
        return (`You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`);
    } else {
        comScore = comScore + 1;
        return (`You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
    }
};


function game() {
    let playerSelection = prompt("What is your choice?");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your score: ${playerScore}; Computer's score: ${comScore}`);
    
};

function play() {
    game();
    game();
    game();
    game();
    game();
    if (playerScore > comScore) 
        console.log("YOU WON!");
    else if (playerScore < comScore)
        console.log("YOU LOSE!")
    else
        console.log("TIE!")

};

play();
