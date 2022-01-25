let slider = document.querySelector(".slider-contenedor2");
let sliderIndividual = document.querySelectorAll(".characteres_all");
let children= document.getElementById("points").children;
let puntos = document.querySelectorAll(".pt");
let contador = 1;
let contador2 = 0;
// estas variables estarn porseacaso por que no se de ninguna de estas
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;
let index=0;




window.addEventListener("resize", function(){
    width = sliderIndividual[0].clienteWidth;
})


setInterval ( function(){
    slides();

}, intervalo);

function slides(){
    // slider.style.transform = "translate("+((-width*contador))+"px)";
    slider.style.transform = "translate("+(-210*contador)+"px)";
    slider.style.transition = "transform 1s";
    children[contador2].style.background = "blue";

    contador++;
    contador2++;
    
    // puntos[contador].onclick=()=>{
    //     puntos.classList.toggle('active');
    // }
    
    // dots[contador].onclick = function (){
    //     className= "active";
    //     changeImg();
    // }

    // children[contador-1].style.display = "inline-block";
    // children[contador].style.background = "blue";


    if(contador == (sliderIndividual.length -2)){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
            contador2=0;
        },1500)
    }
}
