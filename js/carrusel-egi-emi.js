let slider = document.querySelector(".slider-contenedor2");
let sliderIndividual = document.querySelectorAll(".characteres_all");
let children = document.getElementById("points").children;
let puntos = document.querySelectorAll(".pt");
let contador = 1;
let contador2 = 0;
// estas variables estarn porseacaso por que no se de ninguna de estas
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;
let index = 0;


window.addEventListener("resize", function () {
    width = sliderIndividual[0].clienteWidth;
})


setInterval(function () {
    slides();

}, intervalo);

function slides() {
    // slider.style.transform = "translate("+((-width*contador))+"px)";
    slider.style.transform = "translate(" + (-210 * contador) + "px)";
    slider.style.transition = "transform 1s";
    // children[contador2].style.background= "rgba(7, 17, 27, 0.4)";
    // children[contador].style.background = "#fff";

    if (contador > 7) {
        children[contador2].style.background = "rgba(7, 17, 27, 0.2)";
        // children[contador2].style["boxShadow"]= "0 0 0 2px rgba(255, 255, 255, 0.8) inset";
        children[0].style.background = "#007cc3";
        // children[0].style["boxShadow"]= "0 0 0 2px rgba(7,17,27,0.4) inset";
        sliderIndividual[contador2].style["boxShadow"]="0rem 0 0px -70px rgb(51, 46, 46)";
        sliderIndividual[contador2].style["height"]="290px";
        sliderIndividual[contador2].style["top"]="15px";


        sliderIndividual[0].style["boxShadow"]="-3rem 0 80px -70px rgb(51, 46, 46)";
        sliderIndividual[0].style["height"]="320px";
        sliderIndividual[0].style["top"]="0px";

    } else {
        console.log(contador);
        console.log(contador2);
        sliderIndividual[contador].style["boxShadow"]="-3rem 0 80px -70px rgb(51, 46, 46)";
        sliderIndividual[contador].style["height"]="320px";
        sliderIndividual[contador].style["top"]="0px";

        sliderIndividual[contador2].style["boxShadow"]="0rem 0 0px -70px rgb(51, 46, 46)";
        sliderIndividual[contador2].style["height"]="290px";
        sliderIndividual[contador2].style["top"]="15px";

        children[contador2].style.background= "rgba(7, 17, 27, 0.2)";
        // children[contador2].style["boxShadow"]= "0 0 0 2px rgba(255, 255, 255, 0.8) inset";

        children[contador].style.background = "#007cc3";
        // children[contador].style["boxShadow"]= "0 0 0 2px rgba(7,17,27,0.4) inset";
    }


    // console.log(`Contador1 antes:`, contador);
    // console.log(`Contador2 antes:`, contador2);
    contador++;
    contador2++;
    


    if (contador == (sliderIndividual.length - 2)) {
        setTimeout(function () {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
            contador2 = 0;
        }, 1500)
    }
}
