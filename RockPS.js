const list1 = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return list1[Math.floor(Math.random() * list1.length)];
};

let playerScore = 0;
let comScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return ("Same");

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "rock" || playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore = playerScore + 1;
        return (`You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`);
    } else if (playerSelection.toLowerCase() === "") {
        return ('Type your choice');

    } else {
        comScore = comScore + 1;
        return (`You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
    }
};


function compareScore() {
    let computerSelection = getComputerChoice();
    document.getElementById("result").innerHTML = playRound(playerSelection, computerSelection);
    document.getElementById("score").innerHTML = (`Your score: ${playerScore}; Computer's score: ${comScore}`);

};

function printFinalResult() {
    console.log("IN ket qua cuoi");
    if (playerScore > comScore)
        document.getElementById("finalResult").innerHTML = "YOU WON!";
    else if (playerScore < comScore)
        document.getElementById("finalResult").innerHTML = "YOU LOSE!";
    else
        document.getElementById("finalResult").innerHTML = "TIE!";

};


let i = 1;

function game1() {
    compareScore();
    i = i + 1;
    if (i % 6 == 0) {
        console.log("heet game");
        printFinalResult();
        i = 1;
        console.log(i);
        comScore = playerScore = 0;
        console.log(playerScore);
    }
    if (i == 2) {
        document.getElementById("finalResult").innerHTML = ""
    }
};

function getRock() {
    return playerSelection = document.getElementById("btn1").value
};

function getPaper() {
    return playerSelection = document.getElementById("btn2").value
};

function getScissors() {
    return playerSelection = document.getElementById("btn3").value
}