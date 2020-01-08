let blink=document.querySelector("#blink");
let square=document.querySelector(".square");
blink.addEventListener("click", startAnimation);

function startAnimation() {
    square.classList.toggle("blink");
}
