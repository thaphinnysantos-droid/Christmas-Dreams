
// MÚSICA DA CHRISTMAS DREAMS
const musica = new Audio("audio/Mariah.mp3");

musica.loop = true;
musica.volume = 0.35;

// DADOS SALVOS
const CHAVE_TEMPO = "christmasMusicaTempo";
const CHAVE_ESTADO = "christmasMusicaTocando";

// BOTÃO DE MÚSICA
const botaoMusica = document.createElement("button");

botaoMusica.className = "botao-musica";
botaoMusica.textContent = "♫ Ouvir música";

document.body.appendChild(botaoMusica);

// RECUPERAR O ESTADO ANTERIOR
const tempoSalvo = Number(localStorage.getItem(CHAVE_TEMPO)) || 0;
const estavaTocando = localStorage.getItem(CHAVE_ESTADO) === "true";

// SALVAR POSIÇÃO E ESTADO
function salvarMusica() {
    localStorage.setItem(CHAVE_TEMPO, musica.currentTime);
    localStorage.setItem(CHAVE_ESTADO, String(!musica.paused));
}

// RECUPERAR A MÚSICA AO CARREGAR A PÁGINA
musica.addEventListener("loadedmetadata", async () => {

    if (tempoSalvo < musica.duration) {
        musica.currentTime = tempoSalvo;
    }

    if (estavaTocando) {
        try {
            await musica.play();
            botaoMusica.textContent = "Ⅱ Pausar música";
        } catch (erro) {
            botaoMusica.textContent = "♫ Ouvir música";
            console.log("O navegador precisa de um clique para liberar a música.");
        }
    }
});

// SALVAR A POSIÇÃO ENQUANTO TOCA
musica.addEventListener("timeupdate", salvarMusica);

// BOTÃO DE TOCAR E PAUSAR
botaoMusica.addEventListener("click", async () => {

    if (musica.paused) {
        try {
            await musica.play();
            botaoMusica.textContent = "Ⅱ Pausar música";
            salvarMusica();
        } catch (erro) {
            console.error("Erro ao reproduzir música:", erro);
        }

    } else {
        musica.pause();
        botaoMusica.textContent = "♫ Ouvir música";
        salvarMusica();
    }
});

// SALVAR ANTES DE TROCAR DE PÁGINA
window.addEventListener("pagehide", salvarMusica);
