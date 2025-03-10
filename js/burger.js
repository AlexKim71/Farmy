document
.querySelector(".burger__menu")
.addEventListener("click", function () {
this.classList.toggle("active");
document.querySelector(".main__menu").classList.toggle("open");
document
.querySelector(".header__menu-block__bottom")
.classList.toggle("open");
});




  