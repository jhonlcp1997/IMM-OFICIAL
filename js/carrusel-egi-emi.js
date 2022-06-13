
// *aqui se pondra el slider que no requiere movimiento{}

let sliderAlternive = document.querySelector(".slider-contenedor2");
let slider_Ind_A = document.querySelectorAll(".characteres_all");
let sliderSectionLast = slider_Ind_A[slider_Ind_A.length - 1];
let header = document.querySelector(".header");
// let slider_hidden = document.querySelector(".characteres_a");


const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
let width2 = header.clientWidth;
// console.log(width2);

// La repeticion de los mismos procedimientos es por que no creo que me funciones como funcion

window.addEventListener("resize", function () {
    width2 = header.clientWidth;
    // console.log("moviemiento");

    if (width2 > 1050) {
        sliderAlternive.insertAdjacentElement('afterbegin', sliderSectionLast);
        function Next() {
            let sliderSectionFirst = document.querySelectorAll(".characteres_all")[0];
            sliderAlternive.style.marginLeft = "-420px";
            sliderAlternive.style.transition = "all .8s linear";

            setTimeout(function () {
                sliderAlternive.style.transition = "none";
                sliderAlternive.insertAdjacentElement('beforeend', sliderSectionFirst);
                sliderAlternive.style.marginLeft = "-210px";
            }, 800);
        }

        function Prev() {
            let sliderSection = document.querySelectorAll(".characteres_all");
            let sliderSectionLast = sliderSection[sliderSection.length - 1];
            sliderAlternive.style.marginLeft = "0";
            sliderAlternive.style.transition = "all .8s linear";

            setTimeout(function () {
                sliderAlternive.style.transition = "none";
                sliderAlternive.insertAdjacentElement('afterbegin', sliderSectionLast);
                sliderAlternive.style.marginLeft = "-210px";
            }, 800);
        }

        btnRight.addEventListener('click', function () {
            Next();
        });

        btnLeft.addEventListener('click', function () {
            Prev();
        });
    }
})

// console.log(`co-poniendo ${width2}`);
// sliderAlternive.style.marginLeft = "-210px";
// if (width2 > 1050) {
if (width2 > 1050) {
    sliderAlternive.insertAdjacentElement('afterbegin', sliderSectionLast);
    function Next() {
        let sliderSectionFirst = document.querySelectorAll(".characteres_all")[0];
        sliderAlternive.style.marginLeft = "-420px";
        sliderAlternive.style.transition = "all .8s linear";

        setTimeout(function () {
            sliderAlternive.style.transition = "none";
            sliderAlternive.insertAdjacentElement('beforeend', sliderSectionFirst);
            sliderAlternive.style.marginLeft = "-210px";
        }, 800);
    }

    function Prev() {
        let sliderSection = document.querySelectorAll(".characteres_all");
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
        sliderAlternive.style.marginLeft = "0";
        sliderAlternive.style.transition = "all .8s linear";

        setTimeout(function () {
            sliderAlternive.style.transition = "none";
            sliderAlternive.insertAdjacentElement('afterbegin', sliderSectionLast);
            sliderAlternive.style.marginLeft = "-210px";
        }, 800);
    }

    btnRight.addEventListener('click', function () {
        Next();
    });

    btnLeft.addEventListener('click', function () {
        Prev();
    });

    setInterval(function () {
        Next();
    }, 8000);
}
