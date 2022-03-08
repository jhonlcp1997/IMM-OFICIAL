let slider_general = document.querySelector(".slider-general");
let sliders_g =  document.querySelector("slider-contenedor-g");
let contenido_sliders_g = document.querySelectorAll(".contenido-slider-g");

let width_1 = slider_general.scrollWidth;
let width_2 = contenido_sliders_g[0].clientWidth;
let contador_g = 0;

console.log(width_1);
console.log(width_2);

setInterval(function (){
    slidesGeneral();
}, 4000);

function slidesGeneral(){
    sliders_g.style.transform = "translate(200px)";;
    contenido_sliders_g[1];
}