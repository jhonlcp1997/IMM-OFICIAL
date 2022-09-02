function disableScroll() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', disableScroll);

const $popup = document.querySelector(".popups");
const $icon_close = document.getElementById("icon_close");
const $btnClose = document.getElementById("btn_popup");

$icon_close.addEventListener("click", () =>{
    $popup.classList.toggle("close");
    window.removeEventListener('scroll', disableScroll); 
})

$btnClose.addEventListener("click", () =>{
    $popup.classList.toggle("close");
    window.removeEventListener('scroll', disableScroll); 
})
