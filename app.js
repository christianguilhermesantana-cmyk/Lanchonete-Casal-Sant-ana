const menu = document.querySelector(".menu");
const navmenu = document.querySelector(".nav-menu");


menu.addEventListener("click", (e) => {
    e.stopPropagation(); // Impede que o clique chegue ao documento
    menu.classList.toggle("ativo");
    navmenu.classList.toggle("ativo");
});


document.addEventListener("click", (e) => {
    if (!navmenu.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("ativo");
        navmenu.classList.remove("ativo");
    }
});


navmenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

const btn = document.querySelector(".btn-wt");

btn.addEventListener("click", (evento) => {
    window.open("https://wa.link/on8kbh");
});