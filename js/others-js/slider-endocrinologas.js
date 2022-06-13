// *slider para las imagenes
let content_dinamic = document.querySelector(".dinamic-content");
let img_dinamic = document.querySelectorAll(".img-dinamic");
let content_li = document.querySelectorAll(".content-li");
let contador2 = 1;
let contador3 = 0;
let width2 = img_dinamic[0].clientWidth;
let intervalo =4000;

window.addEventListener("resize", function () {
    width2 = img_dinamic[0].clientWidth;
})

function img_slides() {
    content_dinamic.style.transform = "translate(" + (-width2 * contador2) + "px)";
    content_dinamic.style.transition = "transform 1s";
    if (contador2 >=7) {
       content_li[0].classList.toggle('active');
       content_li[6].classList.remove('active')
    }  else {
        
        content_li[contador2].classList.toggle('active');
        content_li[contador3].classList.remove('active');
    }
    console
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

// *Aqui se quita el mecanismo con un media queri max-width: 675px
// Todo: El problema que con el devtools de google no lo puedo regresar cuando cambio los width
if(window.matchMedia("(max-width: 730px)").matches) {
    // console.log("Entro aqui")
    
} else{

    setInterval(function () {
        img_slides();
    }, intervalo);
}
// let content_dinamic = document.querySelector(".dinamic-content");let img_dinamic = document.querySelectorAll(".img-dinamic");let content_li = document.querySelectorAll(".content-li");let contador2 = 1;let contador3 = 0;let width2 = img_dinamic[0].clientWidth;let intervalo =4000;window.addEventListener("resize", function () {    width2 = img_dinamic[0].clientWidth;})function img_slides() {    content_dinamic.style.transform = "translate(" + (-width2 * contador2) + "px)";    content_dinamic.style.transition = "transform 1s";    if (contador2 >=7) {       content_li[0].classList.toggle('active');       content_li[6].classList.remove('active')    }  else {                content_li[contador2].classList.toggle('active');        content_li[contador3].classList.remove('active');    }    console    contador3++;    contador2++;    if (contador2 == img_dinamic.length) {        setTimeout(function () {            content_dinamic.style.transform = "translate(0px)";            content_dinamic.style.transition = "transform 0s";            contador2 = 1;            contador3 = 0;        }, 1500)    }}// *Aqui se quita el mecanismo con un media queri max-width: 675px// Todo: El problema que con el devtools de google no lo puedo regresar cuando cambio los widthif(window.matchMedia("(max-width: 675px)").matches) {    console.log("Entro aqui")    } else{    setInterval(function () {        img_slides();    }, intervalo);}