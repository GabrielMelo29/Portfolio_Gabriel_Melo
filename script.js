const menu = document.querySelector(".site-header")

function ativarScroll() {
    menu.classList.toggle('scrolly', scrollY > 20);
}

window.addEventListener('scroll', ativarScroll);

// -------- Abrir e fechar menu ---------
const btnMenu = document.querySelector(".menu-btn");
const listaMenu = document.querySelector(".nav-links");
const menuLists = document.querySelectorAll('.nav-links li');
const btnIcon = document.querySelector(".btn-icon");

function abrirMenu() {
    listaMenu.classList.toggle('active')
    btnIcon.classList.toggle('active')
}

btnMenu.addEventListener('click', abrirMenu);

for (var listItem of menuLists) {
    listItem.addEventListener("click", () => {
  
      listaMenu.classList.remove("active")
      btnIcon.classList.remove('active')
    }
)}