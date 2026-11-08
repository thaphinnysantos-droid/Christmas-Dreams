
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario-contato");
    const resposta = document.getElementById("resposta-formulario");

    formulario.addEventListener("submit", function(event) {

        // Impede a página de atualizar
        event.preventDefault();

        // Pega o nome digitado
        const nome = document.getElementById("nome").value;

        // Mostra a mensagem de sucesso
        resposta.textContent = "Obrigada, " + nome +
            "! Sua mensagem foi recebida com carinho. 🎄";

        // Limpa os campos
        formulario.reset();

    });

});
