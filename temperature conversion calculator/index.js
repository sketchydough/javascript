const textbox=document.getElementById("textbox");
const tofareheit=document.getElementById("tofarenheit");
const tocelsius=document.getElementById("tocelsius");
const result=document.getElementById("result");

function conversion(){
    if(tofareheit.checked){
        let temp=Number(textbox.value);
        temp=temp* (9/5)+32;
        result.textContent=temp.toFixed(1)+"deg F";
    }
    else if(tocelsius.checked){
        let temp=Number(textbox.value);
        temp = (temp - 32) * (5/9); 
        result.textContent=temp.toFixed(1)+"deg C";
    }
    else{
        result.textContent="select a unit";
    }
    }



