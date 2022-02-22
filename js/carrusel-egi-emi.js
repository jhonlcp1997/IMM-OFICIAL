let slider = document.querySelector(".slider-contenedor2");
let sliderIndividual = document.querySelectorAll(".characteres_all");
let children = document.getElementById("points").children;
let puntos = document.querySelectorAll(".pt");
let contador = 1;
let contador2 = 0;
// estas variables estarn porseacaso por que no se de ninguna de estas
let width = sliderIndividual[0].clientWidth;
let height = sliderIndividual[0].clientHeight;
let intervalo = 7000;

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
            
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
            contador2 = 0;
        }, 1500)
    }
}

// *============ CLICK EN PUNTOS ==========
function toggleStudy() {
    // console.log("Entro en el toggleStudy");

    for (let k = 0; k < puntos.length; k++) {
        puntos[k].onclick = () => {
            // console.log("Entro al click de puntos");
            if (k === 0) {
                slider.style.transform = "translate(0px)";
                slider.style.transition = "transform 0s";

                sliderIndividual[contador].style["height"] = (height) + "px";
                sliderIndividual[contador].classList.remove('active');
                console.log(`El contador borrado esta en ${contador}`);
                children[contador2].style.background = "rgba(7, 17, 27, 0.2)";
                console.log(`El contador que borrara el punto esta en ${contador2}`);

                children[0].style.background = "#007cc3";
                contador = 1;
                contador2 = 0;
            }
            else {
                slider.style.transform = "translate(" + (-210 * (k - 1)) + "px)";
                slider.style.transition = "transform 1s";

                sliderIndividual[contador - 1].style["height"] = (height) + "px";
                sliderIndividual[contador - 1].classList.remove('active');
                console.log(`El contador borrado esta en ${contador}`);
                children[contador2 - 1].style.background = "rgba(7, 17, 27, 0.2)";
                console.log(`El contador que borrara el punto esta en ${contador2}`);

                sliderIndividual[k].style["height"] = (height + 30) + "px";
                sliderIndividual[k].classList.toggle('active');
                children[k].style.background = "#007cc3";
                contador = k + 1;
                contador2 = k;
            }
        }
    }
}

puntos.forEach((de) => {
    de.addEventListener('click', toggleStudy);
    // console.log("Aqui entro a las cosas de forEach")
})