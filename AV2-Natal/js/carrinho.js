
let carrinho = JSON.parse(
    localStorage.getItem("carrinhoChristmas")
) || [];

const listaCarrinho = document.getElementById("lista-carrinho");
const quantidadeItens = document.getElementById("quantidade-itens");
const subtotalElemento = document.getElementById("subtotal");
const totalElemento = document.getElementById("total");
const mensagemCarrinho = document.getElementById("mensagem-carrinho");

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function atualizarCarrinho() {
    localStorage.setItem(
        "carrinhoChristmas",
        JSON.stringify(carrinho)
    );

    listaCarrinho.innerHTML = "";

    let quantidadeTotal = 0;
    let subtotal = 0;

    if (carrinho.length === 0) {
        mensagemCarrinho.textContent = "Sua sacola está vazia. Que tal escolher alguns presentes?";
    } else {
        mensagemCarrinho.textContent = "";

        carrinho.forEach((produto, indice) => {
            quantidadeTotal += produto.quantidade;
            subtotal += produto.preco * produto.quantidade;

            const item = document.createElement("div");
            item.classList.add("item-carrinho");

            item.innerHTML = `
                <img src="${produto.imagem || 'img/logo-christmas-dreams.png'}" alt="${produto.nome}">
                <div class="item-carrinho-info">
                    <h3>${produto.nome}</h3>
                    <p>${formatarPreco(produto.preco)}</p>

                    <div class="controle-quantidade">
                        <button class="diminuir" data-indice="${indice}">−</button>
                        <span>${produto.quantidade}</span>
                        <button class="aumentar" data-indice="${indice}">+</button>
                    </div>

                    <button class="remover-produto" data-indice="${indice}">
                        Remover
                    </button>
                </div>
            `;

            listaCarrinho.appendChild(item);
        });
    }

    quantidadeItens.textContent = `${quantidadeTotal} ${quantidadeTotal === 1 ? "item" : "itens"}`;
    subtotalElemento.textContent = formatarPreco(subtotal);
    totalElemento.textContent = formatarPreco(subtotal);
}

listaCarrinho.addEventListener("click", function(event) {
    const indice = Number(event.target.dataset.indice);

    if (event.target.classList.contains("aumentar")) {
        carrinho[indice].quantidade++;
    }

    if (event.target.classList.contains("diminuir")) {
        carrinho[indice].quantidade--;

        if (carrinho[indice].quantidade <= 0) {
            carrinho.splice(indice, 1);
        }
    }

    if (event.target.classList.contains("remover-produto")) {
        carrinho.splice(indice, 1);
    }

    atualizarCarrinho();
});

document.getElementById("limpar-carrinho").addEventListener("click", function() {
    carrinho = [];
    atualizarCarrinho();
});

document.getElementById("finalizar-compra").addEventListener("click", function() {
    if (carrinho.length === 0) {
        alert("Sua sacola está vazia!");
        return;
    }

    alert("Pedido realizado com sucesso! Esta é uma demonstração da loja.");
});

atualizarCarrinho();
