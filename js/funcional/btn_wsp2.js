const $btn_float = document.getElementById('btn_wsp');
let width_page = window.innerWidth;
let $screenWidth = screen.width;

if($screenWidth <= 720){
    $btn_float.setAttribute('href', "https://wa.me/51997737165");
}

window.addEventListener('resize', () => {
    $screenWidth = screen.width;

    if($screenWidth <= 720){
        $btn_float.setAttribute('href', "https://wa.me/51997737165");
    } else{
        $btn_float.setAttribute('href', "https://web.whatsapp.com/send?phone=51997737165");
    }
})