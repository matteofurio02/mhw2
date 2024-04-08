window.addEventListener("scroll", () => {
    let header = document.querySelector(".nav-menu");
    console.log("ciao");
    header.classList.toggle("sticky", window.scrollY > 140);
})


const cartBtn = document.querySelector("#cart-btn");
const cartCloseBtn = document.querySelector("#cart-btn-closer");
const overlay = document.querySelector(".overlay-cart");
const cartMenu = document.querySelector(".cart-menu");

cartBtn.addEventListener("click", () => {
    console.log("ciao")
    overlay.classList.add("shown");
    cartMenu.classList.add("open");
})

cartCloseBtn.addEventListener("click", () => {
    overlay.classList.remove("shown");
    cartMenu.classList.remove("open");
})