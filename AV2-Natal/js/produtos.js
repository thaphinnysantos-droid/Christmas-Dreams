
/* =====================================
   CHRISTMAS DREAMS
   CATÁLOGO DE 50 PRODUTOS
===================================== */

// LISTA DE PRODUTOS
const produtos = [

    // ENFEITES DE ÁRVORE
    { id: 1, nome: "Bola Dourada Clássica", categoria: "Enfeites", preco: 29.90, imagem: "img/bola-natal.png" },
    { id: 2, nome: "Bola Verde Esmeralda", categoria: "Enfeites", preco: 34.90, imagem: "img/bola-verde.png" },
    { id: 3, nome: "Estrela Dourada", categoria: "Enfeites", preco: 39.90, imagem: "img/estrela.png" },
    { id: 4, nome: "Laço de Veludo Verde", categoria: "Enfeites", preco: 24.90, imagem: "img/laço-veludo.png" },
    { id: 5, nome: "Kit de Mini Enfeites", categoria: "Enfeites", preco: 49.90, imagem: "img/enfeites-min.png" },
    { id: 6, nome: "Pingente Floco de Neve", categoria: "Enfeites", preco: 19.90, imagem: "img/pingente.png" },
    { id: 7, nome: "Guirlanda de Pinheiro", categoria: "Enfeites", preco: 89.90, imagem: "img/guirlanda.png" },
    { id: 8, nome: "Ponteira Estrela Champagne", categoria: "Enfeites", preco: 59.90, imagem: "img/ponteiro-estrela.png" },
    { id: 9, nome: "Enfeite Sino Dourado", categoria: "Enfeites", preco: 22.90, imagem: "img/sino-png.jpg" },

    // LUZES NATALINAS
    { id: 10, nome: "Cordão de Luz Quente", categoria: "Luzes", preco: 39.90, imagem: "img/cordao-luz.png" },
    { id: 11, nome: "Pisca-Pisca Clássico", categoria: "Luzes", preco: 29.90, imagem: "img/pisca-pisca.png" },
    { id: 12, nome: "Cortina de Luzes", categoria: "Luzes", preco: 69.90, imagem: "img/cotina-luz.png" },
    { id: 13, nome: "Luzes LED Douradas", categoria: "Luzes", preco: 44.90, imagem: "img/luz-led.png" },
    { id: 14, nome: "Estrela Luminosa", categoria: "Luzes", preco: 54.90, imagem: "img/estrela-luminosa.png" },
    { id: 15, nome: "Mini Lanternas LED", categoria: "Luzes", preco: 34.90, imagem: "img/lanterna-led.png" },
    { id: 16, nome: "Luz Decorativa de Mesa", categoria: "Luzes", preco: 79.90, imagem: "img/luz-mesa.png" },
    { id: 17, nome: "Fio de Luz Delicado", categoria: "Luzes", preco: 24.90, imagem: "img/fio-luz.png" },

    // BRINQUEDOS
    { id: 18, nome: "Ursinho Natalino", categoria: "Brinquedos", preco: 79.90, imagem: "img/urso-cachecol.png" },
    { id: 19, nome: "Rena de Pelúcia", categoria: "Brinquedos", preco: 69.90, imagem: "img/rena-pelucia.png" },
    { id: 20, nome: "Boneco de Neve", categoria: "Brinquedos", preco: 49.90, imagem: "img/boneco-neve.png" },
    { id: 21, nome: "Urso com Cachecol", categoria: "Brinquedos", preco: 89.90, imagem: "img/urso-marrom.png" },
    { id: 22, nome: "Mini Papai Noel", categoria: "Brinquedos", preco: 39.90, imagem: "img/mini-noel.png" },
    { id: 23, nome: "Duende de Natal", categoria: "Brinquedos", preco: 44.90, imagem: "img/duende-natal.png" },
    { id: 24, nome: "Rena de Pelúcia Verde", categoria: "Brinquedos", preco: 74.90, imagem: "img/rena-verde.png" },
    { id: 25, nome: "Kit Amigos do Natal", categoria: "Brinquedos", preco: 99.90, imagem: "img/ursos-kit.png" },

    // EMBALAGENS E CARTÕES
    { id: 26, nome: "Caixa Presente Dourada", categoria: "Embalagens", preco: 19.90, imagem: "img/caixa-dourada.png" },
    { id: 27, nome: "Papel de Presente Verde", categoria: "Embalagens", preco: 14.90, imagem: "img/papel-verde.png" },
    { id: 28, nome: "Laço de Cetim", categoria: "Embalagens", preco: 9.90, imagem: "img/laco-cetim.png" },
    { id: 29, nome: "Cartão Feliz Natal", categoria: "Embalagens", preco: 12.90, imagem: "img/cartao-natal.png" },
    { id: 30, nome: "Kit Embalagem Premium", categoria: "Embalagens", preco: 39.90, imagem: "img/embalagem-kit.png" },
    { id: 31, nome: "Sacola Natalina", categoria: "Embalagens", preco: 16.90, imagem: "img/sacola-natalina.png" },
    { id: 32, nome: "Fita Decorativa Dourada", categoria: "Embalagens", preco: 11.90, imagem: "img/fita-decorativa.png" },
    { id: 33, nome: "Caixa Verde Especial", categoria: "Embalagens", preco: 24.90, imagem: "img/caixa-verde.png" },

    // DECORAÇÃO DA CASA
    { id: 34, nome: "Mini Árvore Decorativa", categoria: "Decoração", preco: 89.90, imagem: "img/mini-arvore.png" },
    { id: 35, nome: "Vela Aromática Natalina", categoria: "Decoração", preco: 34.90, imagem: "img/vela-natalina.png" },
    { id: 36, nome: "Casinha Iluminada", categoria: "Decoração", preco: 79.90, imagem: "img/casa-iluminada.png" },
    { id: 37, nome: "Centro de Mesa Verde", categoria: "Decoração", preco: 69.90, imagem: "img/centro-mesa.png" },
    { id: 38, nome: "Castical Dourado", categoria: "Decoração", preco: 49.90, imagem: "img/castical.png" },
    { id: 39, nome: "Almofada Natalina", categoria: "Decoração", preco: 59.90, imagem: "img/almofada-png.webp" },
    { id: 40, nome: "Guirlanda para Porta", categoria: "Decoração", preco: 99.90, imagem: "img/guirlanda-porta.png" },
    { id: 41, nome: "Enfeite de Mesa Pinheiro", categoria: "Decoração", preco: 44.90, imagem: "img/pinheiro-mesa.png" },
    { id: 42, nome: "Mini Árvore Dourada", categoria: "Decoração", preco: 54.90, imagem: "img/mini-dorada.png" },

    // LIVROS
    { id: 43, nome: "A última carta", categoria: "Livros", preco: 59.60, imagem: "img/ultima-carta.png" },
    { id: 44, nome: "Mangá Jujustsu Kaizen", categoria: "Livros", preco: 44.90, imagem: "img/jjk-maga.png" },
    { id: 45, nome: "Prícipe Cruel", categoria: "Livros", preco: 132.90, imagem: "img/pricipe-cruel.png" },
    { id: 46, nome: "Livro de Receitas Natalinas", categoria: "Livros", preco: 49.90, imagem: "img/receitas-natal.png" },
    { id: 47, nome: "Divinos rivais", categoria: "Livros", preco: 149.80, imagem: "img/divinos-rivais.png" },
    { id: 48, nome: "Mangá Kimestu no Yaba", categoria: "Livros", preco: 35.40, imagem: "img/demon-slayer.png" },
    { id: 49, nome: "Diário de um Banana", categoria: "Livros", preco: 33.90, imagem: "img/diario-banana.png" },
    { id: 50, nome: "Tempestade de Ônix", categoria: "Livros", preco: 65.90, imagem: "img/livro-onix.png" }

];

// ELEMENTOS DA PÁGINA
const listaProdutos = document.getElementById("lista-produtos");
const campoBusca = document.getElementById("busca");
const filtroCategoria = document.getElementById("categoria");
const quantidadeProdutos = document.getElementById("quantidade-produtos");
const contadorCarrinho = document.getElementById("quantidade-carrinho");

// FORMATAÇÃO DE PREÇO
function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// CRIAR OS CARDS
function criarCard(produto) {

    return `
        <article class="produto-card">

            <div class="produto-imagem">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    loading="lazy"
                >

                <span class="produto-categoria">
                    ${produto.categoria}
                </span>

            </div>

            <div class="produto-info">

                <h3>${produto.nome}</h3>

                <p class="produto-preco">
                    ${formatarPreco(produto.preco)}
                </p>

                <button
                    class="botao-comprar"
                    type="button"
                    data-id="${produto.id}"
                >
                    Adicionar à sacola +
                </button>

            </div>

        </article>
    `;
}

// MOSTRAR PRODUTOS
function mostrarProdutos(lista) {

    quantidadeProdutos.textContent =
        `Mostrando ${lista.length} de ${produtos.length} produtos`;

    if (lista.length === 0) {

        listaProdutos.innerHTML = `
            <p class="sem-produtos">
                Nenhum produto encontrado.
                Tente outra busca!
            </p>
        `;

        return;
    }

    listaProdutos.innerHTML = lista.map(criarCard).join("");
}

// BUSCA E FILTRO
function filtrarProdutos() {

    const busca = campoBusca.value.toLowerCase().trim();
    const categoria = filtroCategoria.value;

    const resultado = produtos.filter(produto => {

        const correspondeNome =
            produto.nome.toLowerCase().includes(busca);

        const correspondeCategoria =
            categoria === "todos" ||
            produto.categoria === categoria;

        return correspondeNome && correspondeCategoria;

    });

    mostrarProdutos(resultado);
}

// CARRINHO
let carrinho = JSON.parse(
    localStorage.getItem("carrinhoChristmas")
) || [];

function atualizarCarrinho() {

    const total = carrinho.reduce(
        (soma, item) => soma + item.quantidade,
        0
    );

    contadorCarrinho.textContent = total;

    localStorage.setItem(
        "carrinhoChristmas",
        JSON.stringify(carrinho)
    );
}

// ADICIONAR PRODUTO
listaProdutos.addEventListener("click", function(event) {

    const botao = event.target.closest(".botao-comprar");

    if (!botao) return;

    const id = Number(botao.dataset.id);

    const produto = produtos.find(item => item.id === id);

    if (!produto) return;

    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    imagem: produto.imagem,
    quantidade: 1
});
    }

    atualizarCarrinho();

    botao.textContent = "Adicionado ✓";

    setTimeout(() => {
        botao.textContent = "Adicionar à sacola +";
    }, 1200);

});

// EVENTOS
campoBusca.addEventListener("input", filtrarProdutos);

filtroCategoria.addEventListener("change", filtrarProdutos);

// INICIALIZAÇÃO
mostrarProdutos(produtos);
atualizarCarrinho();
