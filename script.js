alert("Open the Console");
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
