let slider = document.querySelector(".slider-contenedor2");
let sliderIndividual = document.querySelectorAll(".characteres_all");
let children = document.getElementById("points").children;
let puntos = document.querySelectorAll(".pt");
let contador = 1;
let contador2 = 0;
// estas variables estarn porseacaso por que no se de ninguna de estas
let width = sliderIndividual[0].clientWidth;
let height = sliderIndividual[0].clientHeight;
let intervalo = 3500;
let index = 0;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clienteWidth;
    height= sliderIndividual[0].clientHeight;
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

        sliderIndividual[contador2].style["height"]= (height)+"px";
        sliderIndividual[contador2].classList.remove('active');

        sliderIndividual[0].style["height"]= (height +30)+"px";
        sliderIndividual[0].classList.toggle('active');

    } else if (contador===1){
        sliderIndividual[contador].style["height"]= (height +30)+"px";
        sliderIndividual[contador].classList.toggle('active');
        children[contador2].style.background = "#007cc3";
    }

    else {
        sliderIndividual[contador].style["height"]= (height +30)+"px";
        sliderIndividual[contador].classList.toggle('active');
        
        sliderIndividual[contador2].style["height"]= (height)+"px";
        sliderIndividual[contador2].classList.remove('active');

        children[contador2-1].style.background= "rgba(7, 17, 27, 0.2)";

        children[contador2].style.background = "#007cc3";
    }

    contador++;
    contador2++;
    
    if (contador == (sliderIndividual.length - 3)) {
        setTimeout(function () {
            sliderIndividual[contador2].style["height"]= (height)+"px";
            sliderIndividual[contador2].classList.remove('active');
            children[7].style.background = "rgba(7, 17, 27, 0.2)";
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
            contador2 = 0;
        }, 1500)
    }
}

// *============ CLICK EN PUNTOS ==========
function toggleStudy(){
    // console.log("Entro en el toggleStudy");

    for(let k=0; k < puntos.length; k++){
        puntos[k].onclick=()=>{
            // console.log("Entro al click de puntos");
            if(k===0){
                slider.style.transform = "translate(0px)";
                slider.style.transition = "transform 0s";

                sliderIndividual[contador].style["height"]= (height)+"px";
                sliderIndividual[contador].classList.remove('active');
                console.log(`El contador borrado esta en ${contador}`);
                children[contador2].style.background = "rgba(7, 17, 27, 0.2)";
                console.log(`El contador que borrara el punto esta en ${contador2}`);

                children[0].style.background = "#007cc3";
                contador = 1;
                contador2 = 0;
            }
            else{
                slider.style.transform = "translate(" + (-210 * (k-1)) + "px)";
                slider.style.transition = "transform 1s";

                sliderIndividual[contador-1].style["height"]= (height)+"px";
                sliderIndividual[contador-1].classList.remove('active');
                console.log(`El contador borrado esta en ${contador}`);
                children[contador2-1].style.background = "rgba(7, 17, 27, 0.2)";
                console.log(`El contador que borrara el punto esta en ${contador2}`);

                sliderIndividual[k].style["height"]= (height +30)+"px";
                sliderIndividual[k].classList.toggle('active');
                children[k].style.background = "#007cc3";
                contador = k+1;
                contador2 = k;
            }
        }
    }
}

puntos.forEach((de) =>{
    de.addEventListener('click',toggleStudy);
    // console.log("Aqui entro a las cosas de forEach")
})

// *============= desplazamiento de flechas informacion antes, durante y despues
// *============= desplazamiento de flechas informacion antes, durante y despues

let contenido_header  = document.querySelectorAll('.contenido-header');
let contenido_body = document.querySelectorAll('.contenido-body');
let contenido_body1 = document.querySelector('.contenido-body1');

function toggleContent(){
    console.log("Entro en el toggle");
    
    // let itemClass = contenido_header[2].className;
    // console.log(itemClass);

    for(let i =0; i <contenido_body.length; i++){
        // contenido_body[i].className = 'contenido-body close';
        // contenido_header[i].className = 'contenido-header close';

        contenido_header[i].onclick=() =>{
            if(contenido_header[i].className === 'contenido-header close'){
                contenido_header[i].className = 'contenido-header open';
                contenido_body[i].className = 'contenido-body open';
                if(i>0){
                    // contenido_body[i].className = 'contenido-body open';
                    contenido_body1.className = 'contenido-body1 open';;
                }
            }else{
                contenido_header[i].className = 'contenido-header close';
                contenido_body[i].className = 'contenido-body close';
                if(i>0){
                    // contenido_body[i].className = 'contenido-body close';
                    contenido_body1.className = 'contenido-body1 close';
                }
            }
        }
    }

    // if(itemClass === 'contenido-header close'){
    //     contenido_header[2].className = 'contenido-header open';
    //     contenido_body[2].className = 'contenido-body open';
    //     console.log("aqui entro a las cosas de close");
    // }
}

contenido_header.forEach((el) =>{
    el.addEventListener('click',toggleContent)
    // console.log("Aqui entro a las cosas de forEach")
})

// *============= dezplamiento agregado de EMI======
// *============= dezplamiento agregado de EMI======

let election1 =document.querySelector('.day1');
let election2 =document.querySelector('.day2');
let view = document.querySelectorAll('.info-date-container');

election1.onclick=()=>{
    election1.classList.toggle('active');
    election2.classList.remove('active');
    view[0].classList.toggle('active');
    view[1].classList.remove('active');
}

election2.onclick=()=>{
    election2.classList.toggle('active');
    election1.classList.remove('active');
    view[1].classList.toggle('active');
    view[0].classList.remove('active');
}