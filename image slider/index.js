const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalid=null;

function initializeSlider(){
    if(slides.length>0){ //i.e. if slides(images) exist
        slides[slideIndex].classList.add("displayslide");
        intervalid=setInterval(nextslide,5000);
    }
}

//initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);//to run only after content is loaded

function nextslide(){
    slideIndex++;
    showslide(slideIndex);
}

function showslide(index){

    //to loop and not stop after last index
    if(index >= slides.length){
        slideIndex=0;
    }
    else if(index<0){
        slideIndex=slides.length-1;
    }

    //to show the slides
    slides.forEach(slide =>{
        slide.classList.remove("displayslide");
    })
    slides[slideIndex].classList.add("displayslide");
}

function prevslide(){
    clearInterval(intervalid);
    slideIndex--;
    showslide(slideIndex);
}

