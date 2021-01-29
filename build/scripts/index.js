var mainMenu = document.querySelector(".header__nav-btn");
var mainMenuPopup = document.querySelector(".header__nav-mob");



// open main menu
mainMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (mainMenuPopup.classList.contains("header__nav-mob--show")) {
    mainMenuPopup.classList.remove("header__nav-mob--show");
    mainMenu.classList.remove("header__nav-btn--close");
  } else {
    mainMenuPopup.classList.add("header__nav-mob--show");
    mainMenu.classList.add("header__nav-btn--close");
  }

});



