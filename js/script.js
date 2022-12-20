// Sticky Navbar
window.addEventListener("scroll", function(){
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", this.window.scrollY > 0);
})

// Toggle Menu
const menu = document.querySelector('#menu')
const navLinks = document.querySelector('.nav-links')
const label = document.querySelector('label')

function changeMenu() {

  if (menu.checked) {
    navLinks.classList.replace("menu-open", "close")
  } else {
    navLinks.classList.replace("close", "menu-open")
  }
}

function changeMenuByLink() {
  if (navLinks.getElementsByClassName('menu-open')) {
    navLinks.classList.replace("menu-open", "close")
    menu.checked = false;
  } else {
    menu.checked = true;
  }
}