//Variables
const letters = document.querySelectorAll(".animated-name path");
const lastLetter = letters[letters.length - 1];
const animatedName = document.querySelector(".animated-name");

//Functions
function animateLetters(){
    for(let i=0; i < letters.length; i++){
        letters[i].style.strokeDasharray = letters[i].getTotalLength() + "px";
        letters[i].style.strokeDashoffset = letters[i].getTotalLength() + "px";
        letters[i].style.animation = "forward-animation 2s ease forwards";
    }
}

function startFill(){
    animatedName.style.animation = "white-fill 1s ease-in-out forwards";
}

//Events
window.addEventListener("load", animateLetters);
lastLetter.addEventListener("animationend", startFill);