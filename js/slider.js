let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".menu")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function () {
    slides();
    img_slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform 1s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500)
    }
}

// *slider para las imagenes
let content_dinamic = document.querySelector(".dinamic-content");
let img_dinamic = document.querySelectorAll(".img-dinamic");
let content_li = document.querySelectorAll(".content-li");
let contador2 = 1;
let contador3 = 0;
let width2 = img_dinamic[0].clientWidth;

window.addEventListener("resize", function () {
    width2 = img_dinamic[0].clientWidth;
})

function img_slides() {
    content_dinamic.style.transform = "translate(" + (-width2 * contador2) + "px)";
    content_dinamic.style.transition = "transform 1s";

    if (contador2 >= 7) {
        content_li[0].classList.toggle('active');
    } else {
        // console.log(contador3);
        // console.log(contador2);
        content_li[contador2].classList.toggle('active');
        content_li[contador3].classList.remove('active');
    }
    
    contador3++;
    contador2++;

    if (contador2 == img_dinamic.length) {
        setTimeout(function () {
            content_dinamic.style.transform = "translate(0px)";
            content_dinamic.style.transition = "transform 0s";
            contador2 = 1;
            contador3 = 0;
        }, 1500)
    }
}