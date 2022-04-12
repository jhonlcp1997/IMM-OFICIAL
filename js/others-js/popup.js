const $popup = document.querySelector(".popups");
const $icon_close = document.getElementById("icon_close");

$icon_close.addEventListener("click", () =>{
    $popup.classList.toggle("close");
})