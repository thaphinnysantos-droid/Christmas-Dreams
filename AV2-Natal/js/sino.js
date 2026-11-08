
const sino = new Audio("audio/sino.mp3");

sino.volume = 0.45;

const botaoSino = document.createElement("button");

botaoSino.className = "botao-sino";
botaoSino.textContent = "🔔 Ligar sino";

document.body.appendChild(botaoSino);

let sinoAtivo = false;

botaoSino.addEventListener("click", () => {
    sinoAtivo = !sinoAtivo;

    if (sinoAtivo) {
        sino.currentTime = 0;
        sino.play();
        botaoSino.textContent = "🔕 Desligar sino";
    } else {
        sino.pause();
        sino.currentTime = 0;
        botaoSino.textContent = "🔔 Ligar sino";
    }
});

sino.addEventListener("ended", () => {
    if (sinoAtivo) {
        sino.currentTime = 0;
        sino.play();
    }
});
