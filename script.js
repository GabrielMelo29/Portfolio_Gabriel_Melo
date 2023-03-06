const menu = document.querySelector(".header")
const menuLists = document.querySelectorAll(".list-menu li")

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

for (var listItem of menuLists) {
    listItem.addEventListener("click", () => {
  
      listaMenu.classList.remove("active")
      btnIcon.classList.remove('active')
    }
)}
