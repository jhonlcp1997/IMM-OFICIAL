let slider_general = document.querySelector(".slider-general");
let sliders_g =  document.querySelector(".slider-contenedor-g");
let contenido_sliders_g = document.querySelectorAll(".contenido-slider-g");

let width_1 = sliders_g.scrollWidth;
let width_2 = contenido_sliders_g[0].clientWidth;
let width_3 = slider_general.clientWidth;
let posicion = sliders_g.getBoundingClientRect().left;
let resultado=0;
let contador_g = 0;
let slider_actual =0;

console.log(width_1);
console.log(width_2);
console.log(width_3);

window.ontouchmove = () =>{
    console.log(`movimiento slider: ${sliders_g.getBoundingClientRect().left}`);
    posicion = sliders_g.getBoundingClientRect().left;
    posicion= -posicion;
    // console.log(contenido_sliders_g.getBoundingClientRect().right);
    // console.log("Se movio");
    // console.log(contenido_sliders_g);
    // console.log(width_1);
    // console.log(width_2);
    // console.log("Horizontal: " + window.scrollX);
    // console.log("Vertical: " + window.scrollY);
    // console.log("Horizontal: " + contenido_sliders_g.scrollX);
    resultado = width_1 / 8;
    console.log("Tamaño del resultado:",resultado);
    if (posicion >= resultado*5){
        console.log("Esto pertenece al 4to slider");
        slider_actual= resultado*6;
    } else if ( posicion>= resultado*3 && posicion< resultado*5){
        console.log("ESte pertenece al 3er slider");
        slider_actual= resultado*4;
    } else if (posicion >= resultado && posicion < resultado*3){
        console.log("Este pertenece al 2do slider");
        slider_actual= resultado*2;
    } else {
        console.log("Este pertenece al 1er slider");
        slider_actual=0;
    }

    setTimeout(() => {
        sliders_g.style.transform = "translate(" + (-396) + "px)";
        sliders_g.style.transition = "2s all linear";
        console.log("me ejecute");
        sliders_g.style.left =  0 +"px";
        setTimeout(() => {
            // sliders_g.style.transform = "translate(" + (0) + "px)";
            console.log("me ejecuteotra vez");
            // sliders_g.style.left =  -300 +"px";
        }, 500);
    }, 1000);
}

window.addEventListener("resize", function () {
    width_3 = slider_general.clientWidth;
    console.log("Tamaño de cabeza",width_3);
    width_1 = sliders_g.scrollWidth;
    console.log("Tamaño total",width_1);  
})