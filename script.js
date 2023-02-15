const menu = document.querySelector(".header")

function ativarScroll() {
    menu.classList.toggle('scrolly', scrollY > 20);
}

window.addEventListener('scroll', ativarScroll);

// -------- Abrir e fechar menu ---------
const btnMenu = document.querySelector(".btn-menu");
const listaMenu = document.querySelector(".list-menu");
const btnIcon = document.querySelector(".btn-icon");

function abrirMenu() {
    listaMenu.classList.toggle('active')
    btnIcon.classList.toggle('active')
}

btnMenu.addEventListener('click', abrirMenu);