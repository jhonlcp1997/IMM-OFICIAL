const $logos = document.querySelectorAll('.main-logo');
const $content = document.querySelectorAll('.content');

setInterval(() => {
    for(let i= 0; i<$logos.length; i++){
        $logos[i].classList.toggle('active');
    }

    for(let j= 0; j<$content.length; j++){
        $content[j].classList.toggle('interval');
    }
}, 5000);

// *================= MODAL ==================
// *================= MODAL ==================
const $buttonsModal = document.querySelectorAll('.animated.button')
const $modal1 = document.getElementById('modal-1');
const $modal2 = document.getElementById('modal-2');

function ejecution(){
    if(this.className == 'animated button modal-1'){
        $modal1.classList.toggle('active');
    }else{
        $modal2.classList.toggle('active');
    }
}

$buttonsModal.forEach((button)=>{
    button.addEventListener('click', ejecution)
})

// $modal1.addEventListener('click', ejecution)
// $modal2.addEventListener('click', ejecution)


$modal1.onclick = () => {
    $modal1.classList.toggle('active');
}


$modal2.onclick = () => {
    $modal2.classList.toggle('active');
}

window.onscroll = () => {
    $modal1.classList.remove('active');
    $modal2.classList.remove('active');
}

window.addEventListener("scroll", ()=>{
    $modal1.classList.remove('active');
    $modal2.classList.remove('active');
    console.log('hice un scrol');
})


// *============= otro js de carrusel ==========
// *============= otro js de carrusel ==========
let slider = document.querySelector(".box-carrusel");
let sliderIndividual = document.querySelectorAll(".carrusel");
let sliderFinal = sliderIndividual[sliderIndividual.length-1];
let children = document.querySelectorAll('.dot');
let contador = 1;
let contador2 = 0;
let width = sliderIndividual[0].clientWidth;
let intervalo = 12000;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})

let interval = setInterval(function () {
    slides();
}, intervalo);

function slides() {

    if(contador == 0){
        prev();    
    }
    else{
        next();
    }

    contador++;

    if (contador >= sliderIndividual.length) {
        contador = 0;
    }
}

const prev = ()=>{
    slider.style.transform = "translate(" + (0) + "px)";
    slider.style.transition = "transform 2s";   
    for(let i=0; i<children.length; i++){
        children[i].classList.toggle('active');
        
    }

    children[0].classList.add('active');
    children[1].classList.remove('active');
}

const next = () =>{
    slider.style.transform = "translate(" + (-width) + "px)";
    slider.style.transition = "transform 2s";
    children[0].classList.remove('active');
    children[1].classList.add('active');
}

function move(){
    if(this.className == 'dot active'){
    }else{
        if(this.className == children[0].className){
            prev();
        } else{
            next();
        }
    }
}

children.forEach((dot)=>{
    dot.addEventListener('click', move)
})