alert("Open the Console");
// Get Computer Choice
function getComputerChoice(){
    let compChoice=Math.floor(Math.random()*3)+1;
    if (compChoice===1){
        return "rock";
    }
    else if (compChoice===2){
        return 'scissors';
    } 
    else {
        return 'paper';
    }
}

// Get Player Chocie
function getPlayerChoice(){
    let playChoice=prompt("Rock, Paper or Scissors");
    playChoice=playChoice.toLowerCase();
    if (playChoice==='rock'){
        return 'rock';
    }
    else if (playChoice==='scissors' || playChoice==='scissor'){
        return 'scissors';
    }
    else if (playChoice==='paper'){
        return 'paper';
    }
    else {
        alert("Invalid Choice");
        getPlayerChoice();
    }
}

