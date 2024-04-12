window.addEventListener("scroll", () => {
    const header = document.querySelector(".nav-menu");
    header.classList.toggle("sticky", window.scrollY > 140);
})

/*
 *
 * Apri carrello
 *
*/

const cartBtn = document.querySelector("#cart-btn");
const cartCloseBtn = document.querySelector("#cart-btn-closer");
const overlay = document.querySelector(".overlay-cart");
const cartMenu = document.querySelector(".cart-menu");

cartBtn.addEventListener("click", () => {
    overlay.classList.add("shown");
    cartMenu.classList.add("open");
})

cartCloseBtn.addEventListener("click", () => {
    overlay.classList.remove("shown");
    cartMenu.classList.remove("open");
})

/*
 *
 * Slider Immagini con mouse
 *
*/
let isDown = false;
let startX;
let dist = 0
const slider = document.querySelector('#slider');
const images = document.querySelectorAll(".slider-element");

const end = () => {
	isDown = false;
    //slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  //slider.classList.add('active');
  slider.dataset.downAt = e.clientX;
}

const move = (e) => {
	if(!isDown) return;

    e.preventDefault();
    dist += (slider.dataset.downAt - e.clientX) / 1100;
    if(dist > 1920) {

    }
    slider.style.transform = `translate3d(${-dist}%, 0, 0)`
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();
/*
const slider = document.querySelector("#image-slider")
const items = document.querySelector("#slider")

let isPressed = false

slider.addEventListener("mousedown", e  => {
    isPressed = true
    cursorX = e.offsetX - items.offsetLeft
    slider.computedStyleMap.cursor = "grabbing"
})

slider.addEventListener("mousemove", (e) => {
    if(!isPressed) return
    e.preventDefault()

    items.style.left = `${e.offsetX - cursorX}px`
})

window.addEventListener("mouseup", () => {
    isPressed = false
})
*/
