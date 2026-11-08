
document.addEventListener("DOMContentLoaded", function () {

    // FILTROS DA GALERIA
    const botoesFiltro = document.querySelectorAll(".filtro-galeria");
    const itensGaleria = document.querySelectorAll(".galeria-item");

    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", function () {

            const filtro = this.dataset.filtro;

            botoesFiltro.forEach(b => b.classList.remove("ativo"));
            this.classList.add("ativo");

            itensGaleria.forEach(item => {

                if (filtro === "todos" || item.dataset.categoria === filtro) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }

            });
        });
    });

    // LIGHTBOX - AMPLIAR FOTOS
    const lightbox = document.getElementById("lightbox");
    const imagemAmpliada = document.getElementById("imagem-ampliada");
    const legenda = document.getElementById("legenda-lightbox");
    const fecharLightbox = document.getElementById("fechar-lightbox");

    itensGaleria.forEach(item => {

        item.addEventListener("click", function () {

            const imagem = this.querySelector("img");
            const texto = this.querySelector("figcaption");

            imagemAmpliada.src = imagem.src;
            imagemAmpliada.alt = imagem.alt;
            legenda.textContent = texto.textContent;

            lightbox.classList.add("aberto");
        });

    });

    // FECHAR LIGHTBOX
    function fechar() {
        lightbox.classList.remove("aberto");
        imagemAmpliada.src = "";
    }

    fecharLightbox.addEventListener("click", fechar);

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            fechar();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            fechar();
        }
    });

});
