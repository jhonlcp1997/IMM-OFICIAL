// let slider_general = document.querySelector(".slider-general");
let sliders_g =  document.querySelector(".slider-contenedor-g");
let contenido_sliders_g = document.querySelectorAll(".contenido-slider-g");

let width_1 = sliders_g.scrollWidth;
let width_2 = contenido_sliders_g[0].clientWidth;

let contador_g = 0;

// console.log(width_1);
// console.log(width_2);
// console.log(sliders_g);

// setInterval(function (){
//     slidesGeneral();
// }, 4000);

// function slidesGeneral(){
//     sliders_g.style.transform = "translate("+(-width_2 * contador_g)+"px)";
//     contador_g++;

//     if(contador_g == contenido_sliders_g.length){
//         contador_g = 0;
//     }
// }

window.onpointermove = () =>{
    console.log("Se movio");
    console.log(contenido_sliders_g);
}