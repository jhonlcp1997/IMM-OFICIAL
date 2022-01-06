
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector("#header-center-right");

menu.onclick=()=>{
    
    busqueda.classList.remove('fa-times');
    formBusqueda.classList.remove('active1');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
    busqueda.classList.remove('fa-times');
    formBusqueda.classList.remove('active1');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

