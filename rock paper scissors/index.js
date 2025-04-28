const options=["Rock","Paper","Scissor"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");

const playerscoreDisplay=document.getElementById("playerscoreDisplay");
const computerscoreDisplay=document.getElementById("computerscoreDisplay");
let playerscore=0;
let computerscore=0;

function playGame(playerChoice){
    const computerChoice= options[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    let result="";

    if(playerChoice===computerChoice){
        result="its a tie!";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result=(computerChoice==="Scissor")?"you win!":"you lose!";
                break;
            case "Paper":
                result=(computerChoice==="Rock")?"you win!":"you lose!";
                break;
            case "Scissor":
                result=(computerChoice==="Paper")?"you win!":"you lose!";
                break;
                                  
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;

    switch(result){
        case "you win!":
            playerscore++;
            playerscoreDisplay.textContent=playerscore;
            break;
    
      case "you lose!":
            computerscore++;
            computerscoreDisplay.textContent=computerscore;
            break;
    }
}



