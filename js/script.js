/* Função de Abrir e Fechar menu */
function toggleMenu() {
    const nav = document.getElementById("mobile-nav");
    const icon = document.getElementById("menu-icon");

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        icon.src = "images/icon_close.png"; // ícone X
        nav.style.display = "flex";
    } else {
        icon.src = "images/icon_menu.png";
        nav.style.display = "none";
    }
}

/* Fecha o menu mobile e ativa menu desktop ao voltar pro modo desktop */
window.addEventListener("resize", () => {
    const navMobile = document.getElementById("mobile-nav");
    const navDesktop = document.querySelector("nav.desktop");
    const icon = document.getElementById("menu-icon");

    if (window.innerWidth > 900) {
        // Oculta menu mobile
        navMobile.classList.remove("open");
        navMobile.style.display = "none";

        // Restaura o ícone para o hambúrguer
        icon.src = "images/icon_menu.png";

        // Exibe menu desktop
        if (navDesktop) {
            navDesktop.style.display = "flex";
        }
    } else {
        // Em telas pequenas, esconde menu desktop (caso ele ainda esteja visível)
        if (navDesktop) {
            navDesktop.style.display = "none";
        }
    }
});