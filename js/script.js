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


/*

EFEITO PIRAMIDE NO HTML BASE 2 ITENS


            <!-- Linha inferior com 2 áreas (base da pirâmide invertida) -->
            <div class="linha linha-base">
                <!-- Início do Card: Direito Previdenciário -->
                <a href="direito-previdenciario.html" class="card">
                    <img src="images/previdenciario.png" alt="Direito Previdenciário">
                    <h3 style="color: #b18d50;">Direito Previdenciário</h3>
                    <p>Atuação em aposentadorias, benefícios por incapacidade, revisão de cálculos e auxílio junto ao
                        INSS.</p>
                </a>
                <!-- Fim do Card: Direito Previdenciário -->

                <!-- Início do Card: Direito do Consumidor -->
                <a href="direito-consumidor.html" class="card">
                    <img src="images/consumidor.png" alt="Direito do Consumidor">
                    <h3 style="color: #b18d50;">Direito do Consumidor</h3>
                    <p>Defesa dos direitos do consumidor em casos de cobranças indevidas, produtos com defeito ou
                        propaganda enganosa.</p>
                </a>
                <!-- Fim do Card: Direito do Consumidor -->
            </div>
            <!-- Fim da linha inferior -->*/ 