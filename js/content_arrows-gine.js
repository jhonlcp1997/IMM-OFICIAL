// *============= desplazamiento de flechas informacion antes, durante y despues
// *============= desplazamiento de flechas informacion antes, durante y despues

let contenido_header = document.querySelectorAll('.contenido-header');
let contenido_body = document.querySelectorAll('.contenido-body');
let contenido_body1 = document.querySelector('.contenido-body1');

function toggleContent() {
    let itemClass = this.className;

    let parentHeader = this.parentNode;
    let childrens = parentHeader.childNodes;

    if (itemClass === 'contenido-header close'){
        this.className = 'contenido-header open';

        for(let child of childrens){
            if( child.className == 'contenido-body close'){
                child.className = 'contenido-body open';
            }
        }
    } else {
        this.className = 'contenido-header close';

        for(let child of childrens){
            if( child.className == 'contenido-body open'){
                child.className = 'contenido-body close';
            }
        }
    }
}

contenido_header.forEach((el) => {
    el.addEventListener('click', toggleContent);
})

// *============= dezplamiento agregado de EMI======
// *============= dezplamiento agregado de EMI======

let election1 = document.querySelector('.day1');
let election2 = document.querySelector('.day2');
let view = document.querySelectorAll('.info-date-container');

try {
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
} catch (err) {
    // console.log(err);
}