const min=1;
const max=100;

const answer=Math.floor(Math.random()*(max-min +1));//to generate random num
console.log(answer);

//to track no of attempts made
let attempts=0;
let guess;
let running=true;

while(running){

    guess=window.prompt("guess a number between ${min} - ${max}");
    guess=Number(guess);
    console.log(typeof guess,guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");

    }
    else if(guess<min || guess>max){
        window.alert("please enter a valid number");

    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("too low! try again");

        }
        else if(guess>answer){
            window.alert("too high! try again");
        }
        else{
            window.alert("correct! the answer was ${answer}, it took you ${attempts} attempts.");
            running=false;//to exit
        }
    }

}