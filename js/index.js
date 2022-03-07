// *js solo para abrir el boton menu
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

let menu = document.querySelector(".header-right");
let navbar = document.querySelector(".header-menu");
let general = document.querySelector(".slider-general");

menu.onclick = () => {
    general.classList.toggle('active');
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    general.classList.remove('active');
    menu.classList.remove('active');
    navbar.classList.remove('active');
}

window.onpointermove= () => {
    general.classList.remove('active');
    menu.classList.remove('active');
    navbar.classList.remove('active');
}