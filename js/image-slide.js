const leftImg = document.querySelector(".main-left");
const rightInfo = document.querySelector(".main-right");

window.addEventListener("load", function(){
    leftImg.style.animation = "img-slidein 1s ease-in-out";
    rightInfo.style.animation = "info-slidein 1s ease-in-out";
});