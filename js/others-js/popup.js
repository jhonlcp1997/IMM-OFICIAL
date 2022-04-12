const $popup = document.querySelector(".popups");
const $icon_close = document.getElementById("icon_close");
const $btnClose = document.getElementById("btn_popup");

$icon_close.addEventListener("click", () =>{
    $popup.classList.toggle("close");
})

$btnClose.addEventListener("click", () =>{
    $popup.classList.toggle("close");
})