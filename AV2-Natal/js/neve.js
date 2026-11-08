// EFEITO DE NEVE NATALINA

const neve = document.createElement("div");
neve.classList.add("neve-container");

document.body.appendChild(neve);

for (let i = 0; i < 45; i++) {
    const floco = document.createElement("span");

    floco.classList.add("floco-neve");

    floco.style.left = Math.random() * 100 + "%";
    floco.style.animationDuration = (Math.random() * 5 + 5) + "s";
    floco.style.animationDelay = Math.random() * 5 + "s";
    floco.style.opacity = Math.random();

    neve.appendChild(floco);
}