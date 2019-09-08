const burgerIcon = document.querySelector(".burger-icon");
const popupMenu = document.querySelector(".popup-menu");

burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle("open");
    popupMenu.classList.toggle("popup-menu-active");
});