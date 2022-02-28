// *============= desplazamiento de flechas informacion antes, durante y despues
// *============= desplazamiento de flechas informacion antes, durante y despues

let contenido_header = document.querySelectorAll('.contenido-header');
let contenido_body = document.querySelectorAll('.contenido-body');
let contenido_body1 = document.querySelector('.contenido-body1');

function toggleContent() {
    let itemClass = this.className;

    if (itemClass === 'contenido-header close') {
        // forOnCheckSiblings();
        if (this.nextElementSibling.nextElementSibling) {
            this.className = 'contenido-header open';
            this.nextElementSibling.className = 'contenido-body open';
            console.log(this.nextElementSibling.nextElementSibling.className);
            let moment_sibling_name = this.nextElementSibling.nextElementSibling.className;

            if(moment_sibling_name === 'contenido-body close'){
                console.log("Entro aqui revesion del hermano");
                this.nextElementSibling.nextElementSibling.className = 'contenido-body open';
            } else{
                console.log(this.nextElementSibling.nextElementSibling.className);
                this.nextElementSibling.nextElementSibling.className = 'contenido-body1 open';
                console.log(this.nextElementSibling.nextElementSibling.className);
            }
        } else {
            this.className = 'contenido-header open';
            this.nextElementSibling.className = 'contenido-body open';
        }

    } else {

        if (this.nextElementSibling.nextElementSibling) {
            this.className = 'contenido-header close';
            this.nextElementSibling.className = 'contenido-body close';
            console.log(this.nextElementSibling.nextElementSibling.className);
            let moment_sibling_name = this.nextElementSibling.nextElementSibling.className;

            if(moment_sibling_name === 'contenido-body open'){
                console.log("Entro aqui revesion del hermano");
                this.nextElementSibling.nextElementSibling.className = 'contenido-body close';
            } else{
                console.log(this.nextElementSibling.nextElementSibling.className);
                this.nextElementSibling.nextElementSibling.className = 'contenido-body1 close';
                console.log(this.nextElementSibling.nextElementSibling.className);
            }
        } else {
            this.className = 'contenido-header close';
            this.nextElementSibling.className = 'contenido-body close';
        }
    }
}

function forOnCheckSiblings (){
    for(let k=0; k<contenido_body.length; k++){
        contenido_header[k].className = 'contenido-header close';
        contenido_body[k].className = 'contenido-body close';
        if(contenido_body[k].nextElementSibling){
            contenido_body1.className = 'contenido-body1 close';
        }
    }
}

contenido_header.forEach((el) => {
    el.addEventListener('click', toggleContent)
    // console.log("Aqui entro a las cosas de forEach")
})

// *============= dezplamiento agregado de EMI======
// *============= dezplamiento agregado de EMI======

let election1 = document.querySelector('.day1');
let election2 = document.querySelector('.day2');
let view = document.querySelectorAll('.info-date-container');

election1.onclick = () => {
    if (election1.className === 'day1 active') {

    } else {
        election1.classList.toggle('active');
        election2.classList.remove('active');
        view[0].classList.toggle('active');
        view[1].classList.remove('active');
    }
}

election2.onclick = () => {
    if (election2.className === 'day2 active') {

    } else {
        election2.classList.toggle('active');
        election1.classList.remove('active');
        view[1].classList.toggle('active');
        view[0].classList.remove('active');
    }
}