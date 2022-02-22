
    let slider = document.querySelector(".slider-contenedor");
    let sliderIndividual = document.querySelectorAll(".contenido-slider");
    let puntos = document.querySelectorAll(".pt-g");

    let width = sliderIndividual[0].clientWidth;
    // let height = sliderIndividual[0].clientHeight;

    window.addEventListener("resize", function () {
        width = sliderIndividual[0].clienteWidth;
        height = sliderIndividual[0].clientHeight;
    })

    function fntExecuteSlide(side) {
        let curElement, nextElement;

        for (let i = 0; i < puntos.length; i++) {

            if (puntos[i].className == 'pt-g active') {

                curElement = i;

                break;
            }
        }

        if (side == 'prev' || side == 'next') {

            if (side == "prev") {
                nextElement = (curElement == 0) ? puntos.length - 1 : curElement - 1;

                puntos[curElement].className = 'pt-g';
                puntos[nextElement].className = 'pt-g active';
            } else {
                nextElement = (curElement == puntos.length - 1) ? 0 : curElement + 1;

                puntos[curElement].className = 'pt-g';
                puntos[nextElement].className = 'pt-g active';
            }
        } else {
            nextElement = side;
            side = (curElement > nextElement) ? 'prev' : 'next';

        }

        let itempoint = this.className;

        if (itempoint === 'pt-g') {

            for (let j = 0; j < puntos.length; j++) {
                puntos[j].className = 'pt-g';

            };

            this.className = 'pt-g active';

            for (let j = 0; j < puntos.length; j++) {
                if (puntos[j].className == 'pt-g active') {
                    console.log(`Entro al if de los if ${puntos[j].className}`);
                    slider.style.transform = "translate(" + (-width * j) + "px)";
                    slider.style.transition = "transform 1s";

                }
            };
        }

        slider.style.transform = "translate(" + (-width * nextElement) + "px)";
        slider.style.transition = "transform 1s";
    }

    puntos.forEach((de) => {
        de.addEventListener('click', fntExecuteSlide);

    })