const btnrock=document.querySelector('.rock');
const btnpaper=document.querySelector('.paper');
const btnscis=document.querySelector('.scissors');
const result=document.querySelector('.resdesp');
const compsc=document.querySelector('.compscore');
const urscore=document.querySelector('.yourscore');
let userWin=0; // Number of rounds won by the User
let compWin=0; // Number of rounds won by the Computer
let playerChoice;
let resmsg;
let userscoremsg;
let computerscoremsg;


// Get Computer Choice
function getComputerChoice(){
    let cChoice=Math.floor(Math.random()*3)+1;
    if (cChoice===1){
        console.log('rock');
        return "rock";
    }
    else if (cChoice===2){
        console.log('scissors')
        return 'scissors';
    } 
    else {
        console.log('paper')
        return 'paper';
    }
}

// Get Player Chocie
btnrock.addEventListener('click',function (){
    playerChoice ='rock';
    computerChoice=getComputerChoice();
    playRound(playerChoice,computerChoice)
})
btnpaper.addEventListener('click',function(){
    playerChoice='paper';
    computerChoice=getComputerChoice();
    playRound(playerChoice,computerChoice)
})
btnscis.addEventListener('click',function (){
    playerChoice='scissors';
    computerChoice=getComputerChoice();
    playRound(playerChoice,computerChoice)
})

 
// Function for playing the game

function playRound(playerChoice,computerChoice){
 
 
        if (playerChoice===computerChoice){
            userWin++;
            compWin++;
            computerscoremsg=`Computer Score: ${compWin}`;
            compsc.textContent=computerscoremsg;
            userscoremsg=`Your Score: ${userWin}`;
            urscore.textContent=userscoremsg;
            resmsg=`It is a draw as both chose ${playerChoice}`;
            result.textContent=resmsg
        }
        else if (playerChoice==='rock' && (computerChoice==='scissors')){
            userWin++;
            computerscoremsg=`Computer Score: ${compWin}`;
            compsc.textContent=computerscoremsg;
            userscoremsg=`Your Score: ${userWin}`;
            urscore.textContent=userscoremsg;
            result.textContent='You win as rock beats scissors';
        }
        else if(playerChoice==='rock' && (computerChoice==='paper')){
            compWin++;
            result.textContent='Computer wins as paper beats rock';
            computerscoremsg=`Computer Score: ${compWin}`;
            compsc.textContent=computerscoremsg;
            userscoremsg=`Your Score: ${userWin}`;
            urscore.textContent=userscoremsg
        }
        else if (playerChoice==='paper' && computerChoice==='scissors'){
            compWin++;
            result.textContent='Computer wins as scissors beats paper';
            computerscoremsg=`Computer Score: ${compWin}`;
            compsc.textContent=computerscoremsg;
            userscoremsg=`Your Score: ${userWin}`;
            urscore.textContent=userscoremsg
        }
        else if (playerChoice==='paper' && computerChoice==='rock'){
            userWin++;
            result.textContent='You win as paper beats rock';
            computerscoremsg=`Computer Score:${compWin}`;
            compsc.textContent=computerscoremsg;
            userscoremsg=`Your Score: ${userWin}`;
            urscore.textContent=userscoremsg
        }
        else if (playerChoice==='scissors' && computerChoice==='rock'){
            compWin++;
            result.textContent='Computer wins as rock beats scissors';
            computerscoremsg=`Computer: ${compWin}`;
            compsc.textContent=computerscoremsg;
            userscoremsg=`Your Score: ${userWin}`;
            urscore.textContent=userscoremsg;
        }
        else if (playerChoice==='scissors' && computerChoice==='paper'){
            userWin++;
            result.textContent='You win as scissors beats paper ';
            computerscoremsg= `Computer: ${compWin}`;
            compsc.textContent=computerscoremsg;
            userscoremsg=`Your Score: ${userWin}`;
            urscore.textContent=userscoremsg
        }
        if (userWin == 5 && compWin <5){
            result.textContent='Final Result: You win with 5 points. Congrats'
            userWin=0;
            compWin=0;
        }
        else if (userWin<5 && compWin==5){
            result.textContent='Final Result: Computer wins with 5 points. Try Again'
            userWin=0;
            compWin=0;
        }
        else if (userWin ==5 && compWin==5){
            result.textContent='Final Result: It is a Draw. Congrats';
            userWin=0;
            compWin=0;
        }
    }


