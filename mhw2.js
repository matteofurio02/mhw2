window.addEventListener("scroll", () => {
    let header = document.querySelector(".nav-menu");
    console.log("ciao");
    header.classList.toggle("sticky", window.scrollY > 140);
})