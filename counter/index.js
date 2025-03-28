const decrease=document.getElementById("decrease");
const increase=document.getElementById("increase");
const reset=document.getElementById("reset");
const countlabel=document.getElementById("countlabel");

let count=0;

increase.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    countlabel.textContent=count;
}
reset.onclick=function(){
    window.alert('Hey! this will reset the count to 0.');
    count=0;
    countlabel.textContent=count;
}