let slider_G = document.querySelector(".slider-contenedor-g");
let sliderIndividual_g = document.querySelectorAll(".contenido-slider-g");
let puntos_G = document.querySelectorAll(".pt-g");
let header = document.querySelector('.header');     

let width_g = header.clientWidth;
let curElement, nextElement;
// let height = sliderIndividual[0].clientHeight;

window.addEventListener("resize", function () {
    width_g = this.innerWidth;
    if(width_g > 768){
        slider_G.style.transform = "translate(" + (-width_g * 0) + "px)";
        slider_G.style.transition = "transform 1s";
    }
})

function fntExecuteSlide(side) {

    for (let i = 0; i < puntos_G.length; i++) {

        if (puntos_G[i].className == 'pt-g active') {

            curElement = i;

            break;
        }
    }

    if (side == 'prev' || side == 'next') {

        if (side == "prev") {
            nextElement = (curElement == 0) ? puntos_G.length - 1 : curElement - 1;

            puntos_G[curElement].className = 'pt-g';
            puntos_G[nextElement].className = 'pt-g active';
        } else {
            nextElement = (curElement == puntos.length - 1) ? 0 : curElement + 1;

            puntos_G[curElement].className = 'pt-g';
            puntos_G[nextElement].className = 'pt-g active';
        }
    } else {
        nextElement = side;
        side = (curElement > nextElement) ? 'prev' : 'next';

    }

    let itempoint = this.className;

    if (itempoint === 'pt-g') {

        for (let j = 0; j < puntos_G.length; j++) {
            puntos_G[j].className = 'pt-g';

        };

        this.className = 'pt-g active';

        for (let j = 0; j < puntos_G.length; j++) {
            if (puntos_G[j].className == 'pt-g active') {
                console.log(`Entro al if de los if ${puntos_G[j].className}`);
                slider_G.style.transform = "translate(" + (-width_g * j) + "px)";
                slider_G.style.transition = "transform 1s";

            }
        };
    }

    slider_G.style.transform = "translate(" + (-width_g * nextElement) + "px)";
    slider_G.style.transition = "transform 1s";
}

puntos_G.forEach((de) => {
    de.addEventListener('click', fntExecuteSlide);
})
