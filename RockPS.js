const list1 = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return list1[Math.floor(Math.random()*list1.length)];
};

let playerScore = 0;
let comScore = 0;

function getPlayerChoice() {
    console.log("chuan bi lay text tu input, input hiện tại đang có giá trị là", document.getElementById("myText").value);
    return playerSelection = document.getElementById("myText").value;
};

function playRound(playerSelection, computerSelection) {
    console.log("so sanh lua chon nguoi choi sau do cong diem cho ben thang");
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


function game() {
    let playerSelection = getPlayerChoice();
    console.log("nguoi choi chon", playerSelection);
    let computerSelection = getComputerChoice();
    console.log("may chon", computerSelection);
    document.getElementById("result").innerHTML = playRound(playerSelection, computerSelection);  
    console.log("in ket qua tren man hinh");
    document.getElementById("score").innerHTML = (`Your score: ${playerScore}; Computer's score: ${comScore}`);
    console.log("in diem len man hinh");
    
};

function play() {
    console.log("IN ket qua cuoi");
    if (playerScore > comScore) 
        document.getElementById("finalResult").innerHTML = "YOU WON!";
    else if (playerScore < comScore)
        document.getElementById("finalResult").innerHTML = "YOU LOSE!";
    else
        document.getElementById("finalResult").innerHTML = "TIE!";

};

function changeValue() {
    console.log("change giá trị của input thành null");
    textField = document.getElementById("myText");
    textField.value = null;
};
let i = 1;

function game1() {
    console.log(i);
    game();
    changeValue();
    i = i + 1;
    if (i % 6 == 0) {
        console.log("heet game");
        play();
        i = 1;
        console.log(i);
        comScore = playerScore = 0;
        console.log(playerScore);
    }
    if (i == 2) {
        document.getElementById("finalResult").innerHTML = ""
    }
};



