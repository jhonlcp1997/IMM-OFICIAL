let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".characteres_all");
let children = document.getElementById("points").children;
let contador = 1;
let contador2 =0;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";

    if(contador>=4){
        children[0].classList.toggle('active')
        children[3].classList.remove('active')
    } else {
        children[contador].classList.toggle('active');
        children[contador2].classList.remove('active');
    }

    contador2++;
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
            contador2=0;
        },1500)
    }
}