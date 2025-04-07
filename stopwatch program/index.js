
const display=document.getElementById("display");
let timer=null;
let starttime=0;
let stoptime=0;
let isRunning=false;

function start(){
    if(!isRunning){
        starttime=Date.now()- elapsedTime;
        timer=setInterval(PaymentRequestUpdateEvent,10);
        isRunning=true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-starttime;
        isRunning=false;
    }
}
function update(){
    const currenttime=Date.now();
    elapsedTime=currenttime-starttime;

    let hours=Math.floor(elapsedTime/(1000*60*60));
    hours=String(hours).padStart(2,"0");

    let mins=Math.floor(elapsedTime/(1000*60)%60);
    mins=String(mins).padStart(2,"0");

    let secs=Math.floor(elapsedTime/(1000*60));
    secs=String(secs).padStart(2,"0");

    let ms=Math.floor(elapsedTime% 1000)/10;
    ms=String(ms).padStart(2,"0");

    display.textContent="${hours}:${mins}:${secs}:${ms}";
}

function reset(){
    clearInterval(timer);
    starttime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent="00:00:00:00";
}