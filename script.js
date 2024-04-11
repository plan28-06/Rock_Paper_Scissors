/*alert('This is a 5 round Rock, Paper, Scissor game');
let userWin=0; // Number of rounds won by the User
let compWin=0; // Number of rounds won by the Computer
// Get Computer Choice
function getComputerChoice(){
    let cChoice=Math.floor(Math.random()*3)+1;
    if (cChoice===1){
        console.log('rock');
        return "rock";
    }
    else if (cChoice===2){
        console.log('scissors');
        return 'scissors';
    } 
    else {
        console.log('paper');
        return 'paper';
    }
}

// Get Player Chocie
function getPlayerChoice(){
    let pChoice=prompt("Rock, Paper or Scissors");
    playChoice=pChoice.toLowerCase();
    if (pChoice==='rock'){
        return 'rock';
    }
    else if (pChoice==='scissors' || pChoice==='scissor'){
        return 'scissors';
    }
    else if (pChoice==='paper'){
        return 'paper';
    }
    else {
        alert("Invalid Choice");
        getPlayerChoice();
    }
}
alert('Round 1');
let playerChoice=getPlayerChoice();
let computerChoice=getComputerChoice();
 
// Function for playing a single round

function playRound(playerChoice,computerChoice){
    if (playerChoice===computerChoice){
        userWin++;
        compWin++;
        alert(`User - ${userWin} Computer - ${compWin} `);
    }
    else if (playerChoice==='rock' && (computerChoice==='scissors')){
        userWin++;
        alert(`User - ${userWin} Computer - ${compWin} `);
    }
    else if(playerChoice==='rock' && (computerChoice==='paper')){
        compWin++;
        alert(`User - ${userWin} Computer - ${compWin} `);
    }
    else if (playerChoice==='paper' && computerChoice==='scissors'){
        compWin++;
        alert(`User - ${userWin} Computer - ${compWin} `);
    }
    else if (playerChoice==='paper' && computerChoice==='rock'){
        userWin++;
        alert(`User - ${userWin} Computer - ${compWin} `);
    }
    else if (playerChoice==='scissors' && computerChoice==='rock'){
        compWin++;
        alert(`User - ${userWin} Computer - ${compWin} `);
    }
    else if (playerChoice==='scissors' && computerChoice==='paper'){
        userWin++;
        alert(`User - ${userWin} Computer - ${compWin} `);
    }
}
// Function to make sure there are a total of 5 rounds
function playGame(){
    playRound(playerChoice,computerChoice);
    alert('Round 2');
    playerChoice=getPlayerChoice();
    computerChoice=getComputerChoice();
    playRound(playerChoice,computerChoice);
    alert('Round 3');
    playerChoice=getPlayerChoice();
    computerChoice=getComputerChoice();
    playRound(playerChoice,computerChoice);
    alert('Round 4');
    playerChoice=getPlayerChoice();
    computerChoice=getComputerChoice();
    playRound(playerChoice,computerChoice);
    alert('Round 5');
    playerChoice=getPlayerChoice();
    computerChoice=getComputerChoice();
    playRound(playerChoice,computerChoice);
    if (userWin === compWin){
        alert('It is a tie.')
    }
    else if (userWin > compWin){
        alert('You win, Congratulations.')
    }
    else{
        alert('Computer Wins, Better luck next time.')
    }
}

playGame();*/