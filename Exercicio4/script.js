// Função para calcular o valor arrecadado com a venda de camisetas
function calcularValor() {
    const quantidadePequenas = parseInt(document.getElementById('quantidadePequenas').value);
    const quantidadeMedias = parseInt(document.getElementById('quantidadeMedias').value);
    const quantidadeGrandes = parseInt(document.getElementById('quantidadeGrandes').value);

    const precoPequenas = 10; // preço da camiseta pequena
    const precoMedias = 12;    // preço da camiseta média
    const precoGrandes = 15;    // preço da camiseta grande

    // Calcula o valor total arrecadado
    const valorTotal = (quantidadePequenas * precoPequenas) +
                       (quantidadeMedias * precoMedias) +
                       (quantidadeGrandes * precoGrandes);

    // Exibe o valor arrecadado na página
    const valorArrecadadoElement = document.getElementById('valorArrecadado');
    valorArrecadadoElement.textContent = `R$ ${valorTotal.toFixed(2)}`;
}