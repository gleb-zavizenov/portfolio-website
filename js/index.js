//Variables
let smallLetters = document.querySelectorAll(".small-name path");
let smallLastLetter = smallLetters[smallLetters.length - 1];
let largeLetters = document.querySelectorAll(".large-name path");
let largeLastletter = largeLetters[largeLetters.length - 1];
let smallAnimatedName = document.querySelector(".small-name");
let largeAnimatedName = document.querySelector(".large-name");

//Functions
function animateLetters(){
    for(let i=0; i < smallLetters.length; i++){
        smallLetters[i].style.strokeDasharray = smallLetters[i].getTotalLength() + "px";
        smallLetters[i].style.strokeDashoffset = smallLetters[i].getTotalLength() + "px";
        smallLetters[i].style.animation = "forward-animation 2s ease forwards";
    }
    for(let i=0; i < largeLetters.length; i++){
        largeLetters[i].style.strokeDasharray = largeLetters[i].getTotalLength() + "px";
        largeLetters[i].style.strokeDashoffset = largeLetters[i].getTotalLength() + "px";
        largeLetters[i].style.animation = "forward-animation 2s ease forwards";
    }
}

function startFill(){
    smallAnimatedName.style.animation = "white-fill 1s ease-in-out forwards";
    largeAnimatedName.style.animation = "white-fill 1s ease-in-out forwards";
}

//Events
window.addEventListener("load", animateLetters);
smallLastLetter.addEventListener("animationend", startFill);
largeLastletter.addEventListener("animationend", startFill);