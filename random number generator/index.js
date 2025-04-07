const mybutton=document.getElementById("mybutton");
const mylabel1=document.getElementById("mylabel");
const mylabel2=document.getElementById("mylabe2");
const mylabel3=document.getElementById("mylabe3");

const min=1;
const max=6;
let randomnum1;
let randomnum2;
let randomnum3;

mybutton.onclick=function(){
    randomnum1=Math.floor(Math.random()*max +min);
    mylabel1.textContent=randomnum1;

    randomnum2=Math.floor(Math.random()*max +min);
    mylabel2.textContent=randomnum2;

    randomnum3=Math.floor(Math.random()*max +min);
    mylabel3.textContent=randomnum3;
}