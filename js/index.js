// // *js solo para abrir el boton menu
// let menu = document.querySelector("#menu-btn");
// let navbar = document.querySelector("#header-center-right");

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

// *js solo para abrir el boton menu
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header-menu");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}