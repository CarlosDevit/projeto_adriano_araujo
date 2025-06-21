/* Função de Abrir e Fechar menu */

function toggleMenu() {
    const nav = document.getElementById("mobile-nav");
    const icon = document.getElementById("menu-icon");

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        icon.src = "images/icon_close.png"; // ícone X (crie esse arquivo)
    } else {
        icon.src = "images/icon_menu.png";
    }
}
/* ***** */