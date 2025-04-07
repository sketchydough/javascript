function updateclock(){
    const now=new Date();
    const hours=now.getHours().padStart(2,0);
    const mins=now.getMinutes().padStart(2,0);
    const secs=now.getSeconds().padStart(2,0);
    const timestring='${hours:${mins}:${secs}';

    document.getElementById("clock").textContent=timestring;
}

updateclock();
setInterval(updateclock,1000);