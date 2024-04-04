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
    overlay.classList.remove("hidden");
    cartMenu.classList.remove("hidden");
})

cartCloseBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    cartMenu.classList.add("hidden");
})