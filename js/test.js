let slider = document.querySelector(".slider-contenedor2");
let sliderIndividual = document.querySelectorAll(".characteres_all");
let children = document.getElementById("points").children;
let puntos = document.querySelectorAll(".pt");
let contador = 1;
let contador2 = 0;
// estas variables estarn porseacaso por que no se de ninguna de estas
let width = sliderIndividual[0].clientWidth;
let height = sliderIndividual[0].clientHeight;
let intervalo = 2000;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clienteWidth;
    height = sliderIndividual[0].clientHeight;
})

setInterval(function () {
    slides();
}, intervalo);

function slides() {
    // slider.style.transform = "translate("+((-width*contador))+"px)";
    slider.style.transform = "translate(" + (-210 * contador2) + "px)";
    slider.style.transition = "transform 1s";

    if (contador > 8) {
        children[7].style.background = "rgba(7, 17, 27, 0.2)";
        children[0].style.background = "#007cc3";

        sliderIndividual[contador2].style["height"] = (height) + "px";
        sliderIndividual[contador2].classList.remove('active');

        sliderIndividual[0].style["height"] = (height + 30) + "px";
        sliderIndividual[0].classList.toggle('active');

    } else if (contador === 1) {
        sliderIndividual[contador].style["height"] = (height + 30) + "px";
        sliderIndividual[contador].classList.toggle('active');
        children[contador2].style.background = "#007cc3";
    }

    else {
        sliderIndividual[contador].style["height"] = (height + 30) + "px";
        sliderIndividual[contador].classList.toggle('active');

        sliderIndividual[contador2].style["height"] = (height) + "px";
        sliderIndividual[contador2].classList.remove('active');

        children[contador2 - 1].style.background = "rgba(7, 17, 27, 0.2)";

        children[contador2].style.background = "#007cc3";
    }

    contador++;
    contador2++;

    if (contador == (sliderIndividual.length - 3)) {
        setTimeout(function () {
            sliderIndividual[0].style["height"] = (height) + "px";
            sliderIndividual[contador2].classList.remove('active');
            children[7].style.background = "rgba(7, 17, 27, 0.2)";
            children[0].style.background = "#007cc3";
            // children[7].style.background = "rgba(7, 17, 27, 0.2)";
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
            contador2 = 0;
        }, 1500)
    }
}

// *=============no tiene nada que ver esto que voy a escribir=====
// *=============no tiene nada que ver esto que voy a escribir=====

// function gallina(){
//     return huevo();
// }

// function huevo(){
//     return gallina();
// }

console.log(" vino primero.");